(function(Global){

    function adapter({todoService, priorityService}) {

        if(!todoService || !priorityService) {
            return;
        }

        const elements = {
            priorityContainer: null,
            todosContainer: null,
            submitTrigger: null,
            titleContainer: null,
            descriptionContainer: null,
            activePriority: null
        };

        function init({
            priorityContainer = null,
            todosContainer = null,
            submitTrigger = null,
            titleContainer = null,
            descriptionContainer = null

        }) {
            if(!priorityContainer ||
               !todosContainer ||
               !submitTrigger ||
               !titleContainer ||
               !descriptionContainer
            ) {
                throw 'please provide UI containers';
            }

            elements.priorityContainer = priorityContainer;
            elements.todosContainer = todosContainer;
            elements.submitTrigger = submitTrigger;
            elements.titleContainer = titleContainer;
            elements.descriptionContainer = descriptionContainer;

            loadPriorities();
            elements.submitTrigger.addEventListener('click', createUpdateTodo);
        }

        function loadPriorities() {
            updatePrioritiesUI({
                priorities: priorityService.getAllPriorities(),
                container: elements.priorityContainer
            });
        }

        function updatePrioritiesUI({priorities = null, container = null}) {

            if(!priorities || !container) {
                return;
            }

            for (const priority of priorities) {
                const optionItem = document.createElement('option');
                optionItem.setAttribute('id', priority.id);
                optionItem.setAttribute('value', priority.description);
                optionItem.innerText = `${priority.description}`;
                container.appendChild(optionItem);
            }

            elements.activePriority = container.children[0];
            container.addEventListener('change', event =>{
                loadTodosByPriority({
                    selectedOption: event.target[event.target.selectedIndex]
                });
            });
        }

        function loadTodosByPriority({selectedOption}) {
            elements.activePriority = selectedOption;
            const priority = priorityService.getPriorityById(selectedOption['id']);
            updateTodosUI({
                todos: todoService.getTodosByPriority(priority.description),
                container: elements.todosContainer
            });
        }

        function updateTodosUI({todos = null, container = null}) {

            if(!todos || !container) {
                return;
            }

            if(container.children.length > 0){
                container.innerHTML = '';
            }

            for (const todo of todos) {
                const listItem = document.createElement('li');
                listItem.setAttribute('id', todo.id);
                listItem.setAttribute('class', 'u-margin-bottom-20px');
                listItem.innerText = `(${todo.priority})\n${todo.title}\n${todo.description}`;
                //add edit and delete options

                container.appendChild(listItem);
            }
        }

        function createUpdateTodo(event) {

            todoService.saveTodo({
                title: elements.titleContainer.value,
                description: elements.descriptionContainer.value,
                priority: elements.activePriority.value
            });

            loadTodosByPriority({
                selectedOption: elements.activePriority
            });
            clearInputElements();
        }

        function loadAllTodos() {
            updateTodosUI({
                todos: todoService.getAllTodos(),
                container: elements.todosContainer
            });
        }

        function clearInputElements() {
           elements.titleContainer.value = '';
           elements.descriptionContainer.value = '';
        }

        return {
            init
        };
    }

    Global.App.client.adapter = adapter;

}(window));
