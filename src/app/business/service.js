(function(Global){

    function service (repository = null) {

        if(!repository) {
            return;
        }

        return {
            getAll: () => {
                return repository.getAll();
            },
            getById: ({id}) => {
                return repository.getById(id);
            },
            create: ({entity}) => {
                repository.create(entity);
            },
            update: ({id, entity}) => {
                repository.update(id, entity);
            },
            remove: ({id}) => {
                repository.remove(id);
            }
        };
    }

    Global.App.business.service = service;

}(window));
