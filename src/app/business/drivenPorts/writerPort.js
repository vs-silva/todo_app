(function(Global){

    function writer (repository = null) {

        if(!repository) {
            return;
        }

        return {
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

    Global.App.business.ports.driven.writer = writer;

}(window));
