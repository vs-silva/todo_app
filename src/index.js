(function(Global){

    console.log(Global.App);

    const todoService = Global.App.business.service({
        driverPort: Global.App.business.ports.driver,
        repository: Global.App.repositories.todoReposity,
        serviceName: 'todoService'
    });

    const priorityService = Global.App.business.service({
        driverPort: Global.App.business.ports.driver,
        repository: Global.App.repositories.priorityRepository,
        serviceName: 'priorityService'
    });

    console.log(todoService);
    console.log(priorityService);

/*
    //const priorityRepository = Global.App.repositories.priorityRepository;
    const todoService = Global.App.business.service({
        driverPort: Global.App.business.ports.driver,
        repository: Global.App.repositories.todoReposity,
        serviceName: 'todoService'
    });

    //console.log(todoService.reader.getAll());

    todoService.saveTodo({
        title: 'sample title 1',
        description: 'sample description 1',
        priority: 'High priority'
    });

    todoService.saveTodo({
        title: 'sample title 2',
        description: 'sample description 1',
        priority: 'High priority'
    });

    todoService.saveTodo({
        title: 'sample title 3',
        description: 'sample description 3',
        priority: 'Low priority'
    });

    console.log(todoService.getAllTodos());

    const todoId = todoService.getAllTodos()[0].id;
    console.log(todoId);

    const byPriority = todoService.getTodosByPriority('High priority');
    console.log(byPriority); */

    //todoService.removeTodo(todoId);

    //console.log(todoService.getAllTodos());




    //const priorityService = service(controller, priorityRepository);
    //console.log(priorityService.reader.getAll());

}(window));
