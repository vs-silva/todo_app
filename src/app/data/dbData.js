(function(Global){

    Global.App.database = {
        todosCollection: [],
        prioritiesCollection: [
            {
                id: 1,
                type: 'A',
                description: 'High Priority'
            },
            {
                id: 2,
                type: 'B',
                description: 'Medium Priority'
            },
            {
                id: 3,
                type: 'C',
                description: 'Low Priority'
            }
        ]
    };

}(window));
