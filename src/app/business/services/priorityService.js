(function(Global){

    function service ({driverPort, reader, writer} = {}) {

        if(!driverPort || !reader) {
            return;
        }

        driverPort.getAllPriorities = () => {
            return reader.getAll();
        };

        driverPort.getPriorityById = (id) => {
            return reader.getById({id: id});
        };

        return {
            getAllPriorities: driverPort.getAllPriorities,
            getPriorityById: driverPort.getPriorityById
        };
    }

    Global.App.business.priorityService = service;

}(window));
