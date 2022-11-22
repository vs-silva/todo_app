(function(Global){

    function adapter({ui, todoService, priorityService}) {

        if(!ui || !todoService || !priorityService) {
            return;
        }

        console.log(ui);
        console.log(todoService);
        console.log(priorityService);




        function updatePrioritiesUI({priorities = null}) {

            if(!priorities) {
                return;
            }

            const prioritySelector = ui.form.category;

            for (const priority of priorities) {
                const optionItem = document.createElement('option');
                optionItem.setAttribute('id', priority.id);
                optionItem.setAttribute('value', priority.type);
                optionItem.innerText = `${priority.description}`;
                prioritySelector.appendChild(optionItem);
            }

            prioritySelector.addEventListener('change', loadTodosByPriority);
        }

        function updateTodosUI({todos = null}) {

            if(!todos) {
                return;
            }

            const todosListSelector = ui.list;

            for (const todo of todos) {
                const listItem = document.createElement('li');
                listItem.setAttribute('id', todo.id);
                listItem.setAttribute('class', 'u-margin-bottom-20px');
                listItem.innerText = `${todo.title}\n${todo.description}\n(${todo.priority})\n`;
                //add edit and delete options

                todosListSelector.appendChild(listItem);
            }
        }

        function loadTodosByPriority(event) {
            const selectedOptionId = event.target[event.target.selectedIndex]['id'];
            const priority = priorityService.getPriorityById(selectedOptionId);
            updateTodosUI({
                todos: todoService.getTodosByPriority(priority.description)
            });
        }

        function loadPriorities() {
            updatePrioritiesUI({
                priorities: priorityService.getAllPriorities()
            });
        }

        loadPriorities();
    }

    Global.App.client.adapter = adapter;

}(window));
