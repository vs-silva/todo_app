(function(Global){

    Global.App.client.adapter({
        ui: Global.App.client.ui,
        todoService: Global.App.business.service({
            driverPort: Global.App.business.ports.driver,
            repository: Global.App.repositories.todoReposity,
            serviceName: 'todoService'
        }),
        priorityService: Global.App.business.service({
            driverPort: Global.App.business.ports.driver,
            repository: Global.App.repositories.priorityRepository,
            serviceName: 'priorityService'
        })
    });

}(window));
