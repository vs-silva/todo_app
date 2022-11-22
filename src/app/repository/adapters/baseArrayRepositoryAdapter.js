(function(Global){

    function baseArrayRepositoryAdapter ({targetDataset, dataSource} = null) {

        if(!targetDataset || !dataSource) {
            return;
        }

        const repository = dataSource[targetDataset];

        return {
            getAll: () => {
                return repository;
            },
            getById: (id) => {
                return repository.find(x => x.id.toString() === id.toString());
            },
            getBy: (fn) => {
                return fn(repository);
            },
            create: (entity) => {
                repository.push(entity);
            },
            update: (id, entity) => {
                const entityToUpdate = repository.find(x => x.id.toString() === id.toString());
                entityToUpdate.title = entity.title;
                entityToUpdate.description = entity.description;
                entityToUpdate.priority = entity.priority;
            },
            remove: (id) => {
                const entityToDelete = repository.findIndex(x => x.id.toString() === id.toString());
                repository.splice(entityToDelete, 1);
            }
        };
    }

    Global.App.repositories.baseArrayRepositoryAdapter = baseArrayRepositoryAdapter;

}(window));
