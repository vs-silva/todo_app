(function(Global){

    function main({adapter}){

        if(!adapter) {
            return;
        }

        const ui = {
            form:{
                id: document.getElementsByClassName('c-todo__form')[0],
                title: document.getElementById('todoTitle'),
                description: document.getElementById('todoDescription'),
                category: document.getElementById('todoCategory'),
                submitButton: document.getElementById('todoFormSubmit')
            },
            list: document.getElementById('todoList'),
        };

        let activePriority = null;

        function init() {
            updatePrioritiesUI({
                priorities: adapter.loadPriorities()
            });

            ui.form.submitButton.addEventListener('click', () => {
                createUpdateTodo();
                loadTodosByPriority({
                    priorityValue: activePriority.value
                });
                clearInputElements();
            });

        }

        function updatePrioritiesUI({priorities = null}) {
            if(!priorities) {
                return;
            }

            const container = ui.form.category;

            for (const priority of priorities) {
                const optionItem = document.createElement('option');
                optionItem.setAttribute('id', priority.id);
                optionItem.setAttribute('value', priority.description);
                optionItem.innerText = `${priority.description}`;
                container.appendChild(optionItem);
            }

            activePriority = container.children[0];

            container.addEventListener('change', event => {
                activePriority = event.target[event.target.selectedIndex];

                if(ui.form.title.value && ui.form.description.value) {
                    return;
                }

                loadTodosByPriority({
                    priorityValue: activePriority.value
                });
            });
        }

        function loadTodosByPriority({priorityValue}) {
            updateTodosUI({
                todos: adapter.loadTodosByPriority({
                    priority: priorityValue
                })
            });
        }

        function updateTodosUI({todos}) {
            if(!todos) {
                return;
            }

            const container = ui.list;

            if(container.children.length > 0) {
                container.innerHTML = '';
            }

            for (const todo of todos) {
                const listItem = document.createElement('li');
                listItem.setAttribute('id', todo.id);
                listItem.setAttribute('class', 'u-margin-bottom-20px');
                listItem.innerText = `(${todo.priority})\n${todo.title}\n${todo.description}\n-\n`;
                addEditOption({
                    targetElement: listItem
                });
                addDeleteOption({
                    targetElement: listItem
                });

                container.appendChild(listItem);
            }

        }

        function addEditOption({targetElement}) {
            const editOption = document.createElement('span');
            editOption.setAttribute('class', 'u-padding-right-10px u-cursor-pointer');
            editOption.innerHTML = 'Edit';
            editOption.addEventListener('click', () => {

                const todo = adapter.loadTodoById({
                    id: targetElement.getAttribute('id')
                });

                ui.form.id.setAttribute('id', todo.id);
                ui.form.title.value = todo.title;
                ui.form.description.value = todo.description;

                addEditCancelOption({
                    targetElement: targetElement
                });
            });
            targetElement.appendChild(editOption);
        }

        function addEditCancelOption({targetElement}) {
            const cancelOption = document.createElement('span');
            cancelOption.setAttribute('class', 'u-padding-left-10px u-cursor-pointer');
            cancelOption.innerHTML = 'Cancel';
            cancelOption.addEventListener('click', () => {
                clearInputElements();
                targetElement.removeChild(cancelOption);
            });
            targetElement.appendChild(cancelOption);
        }

        function addDeleteOption({targetElement}) {
            const deleteOption = document.createElement('span');
            deleteOption.setAttribute('class', 'u-padding-left-10px u-cursor-pointer');
            deleteOption.innerHTML = 'Delete';
            deleteOption.addEventListener('click', () => {
                adapter.removeTodo({
                    id: targetElement.getAttribute('id')
                });

                clearInputElements();

                loadTodosByPriority({
                    priorityValue: activePriority.value
                });
            });
            targetElement.appendChild(deleteOption);
        }

        function createUpdateTodo() {
            adapter.saveTodo({
                id: ui.form.id.getAttribute('id'),
                title: ui.form.title.value,
                description: ui.form.description.value,
                priority: activePriority.value
            });
        }

        function clearInputElements() {

            if(ui.form.id.getAttribute('id')) {
                ui.form.id.removeAttribute('id');
            }

            ui.form.title.value = '';
            ui.form.description.value = '';
        }

        init();
    }

    Global.App.client.main = main;
}(window));
