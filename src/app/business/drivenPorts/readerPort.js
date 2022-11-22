(function(Global){

    function reader (repository = null) {

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
            getBy: (fn) => {
                return repository.getBy(fn);
            }
        };
    }

    Global.App.business.ports.driven.reader = reader;

}(window));
