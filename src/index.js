(function(Global){

    console.log(Global.App);

    const todoRepository = Global.App.repositories.todoReposity;
    //const priorityRepository = Global.App.repositories.priorityRepository;
    const service = Global.App.business.service;
    const controller = Global.App.business.ports.driver;


    const todoService = service(controller, todoRepository);
    //console.log(todoService.reader.getAll());

    console.log(todoService.saveTodo({
        title: 'sample title 1',
        description: 'sample description 1',
        priority: 'High priority'
    }));

    console.log(todoService.getAllTodos());

    const todoId = todoService.getAllTodos()[0].id;
    console.log(todoId);

    //todoService.removeTodo(todoId);

    //console.log(todoService.getAllTodos());




    //const priorityService = service(controller, priorityRepository);
    //console.log(priorityService.reader.getAll());

}(window));
