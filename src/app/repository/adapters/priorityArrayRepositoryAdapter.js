(function(Global){

    Global.App.repositories.priorityRepository = Global.App.repositories.baseArrayRepositoryAdapter({
        targetDataset: 'priorityCollection',
        dataSource: App.database
    });

}(window));
