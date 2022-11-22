(function(Global){

    console.log(Global.App);

    const todoRepository = Global.App.repositories.todoReposity;
    const priorityRepository = Global.App.repositories.priorityRepository;
    const service = Global.App.business.service;


    const todoService = service(todoRepository);
    console.log(todoService.reader.getAll());

    const priorityService = service(priorityRepository);
    console.log(priorityService.reader.getAll());

}(window));
