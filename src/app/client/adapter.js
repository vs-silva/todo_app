(function(Global){

    function adapter({todoService, priorityService}) {

        if(!todoService || !priorityService) {
            return;
        }

        function loadPriorities() {
            return priorityService.getAllPriorities();
        }

        function loadTodosByPriority({priority}) {
            return todoService.getTodosByPriority(priority);
        }

        function saveTodo({id = null, title = null, description = null, priority = null}) {
            if(!title || !priority) {
              return;
            }

            todoService.saveTodo({
                id: id,
                title: title,
                description: description,
                priority: priority
            });
        }

        function removeTodo({id}) {
            todoService.removeTodo({
                id: id
            });
        }

        return {
            loadPriorities,
            loadTodosByPriority,
            saveTodo,
            removeTodo
        };
    }

    Global.App.client.adapter = adapter;

}(window));
