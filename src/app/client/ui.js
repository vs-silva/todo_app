(function(Global){

    Global.App.client.ui = {
        form:{
            element: document.getElementById('todoInputForm'),
            title: document.getElementById('todoTitle'),
            description: document.getElementById('todoDescription'),
            category: document.getElementById('todoCategory'),
            submitButton: document.getElementById('todoFormSubmit')
        },
        list: document.getElementById('todoList'),
    };

}(window));
