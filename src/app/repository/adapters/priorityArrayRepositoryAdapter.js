(function(Global){

    Global.App.repositories.priorityRepository = Global.App.repositories.baseArrayRepositoryAdapter({
        targetDataset: 'prioritiesCollection',
        dataSource: App.database
    });

}(window));
