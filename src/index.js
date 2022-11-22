(function(Global){

    Global.App.client.main({
        adapter: Global.App.client.adapter({
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
        })
    });

}(window));
