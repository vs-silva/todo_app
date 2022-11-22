(function(Global){

    function service ({driverPort, repository, serviceName} = {}) {

        if(!driverPort || !repository || !serviceName) {
            return;
        }

        const writer = Global.App.business.ports.driven.writer(repository);
        const reader = Global.App.business.ports.driven.reader(repository);

        const services = {
            todoService: Global.App.business.todoService,
            priorityService: Global.App.business.priorityService
        };

        return services[serviceName]({
            driverPort: driverPort,
            reader: reader,
            writer: writer
        });
    }

    Global.App.business.service = service;

}(window));
