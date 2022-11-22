(function(Global){

    Global.App.repositories.todoReposity = Global.App.repositories.baseArrayRepositoryAdapter({
        targetDataset: 'todosCollection',
        dataSource: App.database
    });

}(window));
