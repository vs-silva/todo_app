(function(Global){

    function baseArrayRepositoryAdapter ({targetDataset, dataSource} = null) {

        if(!targetDataset || !dataSource) {
            return;
        }

        const collection = dataSource[targetDataset];

        return {
            getAll: () => {
                return collection;
            },
            getById: (id) => {
                return collection.find(x => x.id.toString() === id.toString());
            },
            getBy: (fn) => {
                return fn(collection);
            },
            create: (entity) => {
                collection.push(entity);
            },
            update: (id, entity) => {
                const entityToUpdate = collection.find(x => x.id.toString() === id.toString());
                entityToUpdate.title = entity.title;
                entityToUpdate.description = entity.description;
                entityToUpdate.priority = entity.priority;
            },
            remove: (id) => {
                const entityToDelete = collection.findIndex(x => x.id.toString() === id.toString());
                collection.splice(entityToDelete, 1);
            }
        };
    }

    Global.App.repositories.baseArrayRepositoryAdapter = baseArrayRepositoryAdapter;

}(window));
