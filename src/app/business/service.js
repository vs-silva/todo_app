(function(Global){

    function service (repository = null) {

        if(!repository) {
            return;
        }

        return {
            writer: Global.App.business.ports.driven.writer(repository),
            reader: Global.App.business.ports.driven.reader(repository)
        };
    }

    Global.App.business.service = service;

}(window));
