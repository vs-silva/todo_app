(function(Global){

    function main({adapter}){

        if(!adapter) {
            return;
        }

        const ui = {
            form:{
                element: document.getElementById('todoInputForm'),
                title: document.getElementById('todoTitle'),
                description: document.getElementById('todoDescription'),
                category: document.getElementById('todoCategory'),
                submitButton: document.getElementById('todoFormSubmit')
            },
            list: document.getElementById('todoList'),
        };

        adapter.init({
            priorityContainer: ui.form.category,
            todosContainer: ui.list,
            submitTrigger: ui.form.submitButton,
            titleContainer: ui.form.title,
            descriptionContainer: ui.form.description
        });
    }

    Global.App.client.main = main;
}(window));
