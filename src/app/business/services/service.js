(function(Global){

    function service ({driverPort, repository, serviceName} = {}) {

        if(!driverPort || !repository || !serviceName) {
            return;
        }

        const services = {
            todoService: Global.App.business.todoService,
            priorityService: Global.App.business.priorityService
        };

        return services[serviceName]({
            driverPort: driverPort,
            reader: Global.App.business.ports.driven.reader(repository),
            writer: Global.App.business.ports.driven.writer(repository)
        });
    }

    Global.App.business.service = service;

}(window));
