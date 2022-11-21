(function(Global){

    const todoRepository = Global.App.repositories.baseArrayRepositoryAdapter({
        targetDataset: 'todosCollection',
        dataSource: App.database
    });

    todoRepository.getByPriority = (dataset, priority) => {
        return todoRepository.getBy( dataset => dataset.filter(x => x['priority'].toString() === priority.toString()));
    };

    Global.App.repositories.todoReposity = todoRepository;

}(window));
