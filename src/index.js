(function(Global){

    console.log(Global.App);

    const todoRepository = Global.App.repositories.todoReposity;
    const service = Global.App.business.service;
    //console.log(todoRepository);
    //console.log(service(todoRepository));

    const todoService = service(todoRepository);
    console.log(todoService);

    const todos = todoService.getAll();
    console.log(todos);

}(window));
