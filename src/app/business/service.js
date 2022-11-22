(function(Global){

    function service (driverPort = null, repository = null) {

        if(!driverPort || !repository) {
            return;
        }

        const writer = Global.App.business.ports.driven.writer(repository);
        const reader = Global.App.business.ports.driven.reader(repository);

        driverPort.getAllTodos = () => {
            return reader.getAll();
        };

        driverPort.getTodoById = (id) => {
            return reader.getById({id: id});
        };

        driverPort.getTodosByPriority = (priority) => {
            throw 'NotImplemented';
        };

        driverPort.saveTodo = (todoDto) => {

            if(!todoDto) {
                return;
            }

            const id = todoDto['id'] || null;

            const todoEntity = Global.App.business.entities.todo({
                title: todoDto['title'],
                description: todoDto['description'],
                priority: todoDto['priority'],
            });

            if(!id) {
                todoEntity.id = customUUID();
                writer.create({
                    entity: todoEntity
                });
                return;
            }

            todoEntity.id = id;

            writer.update({
                id: id,
                entity: todoEntity
            });
        }

        driverPort.removeTodo = (id) => {
            writer.remove({id: id});
        };

        return {
            //writer: Global.App.business.ports.driven.writer(repository),
            //reader: Global.App.business.ports.driven.reader(repository),
            getAllTodos: driverPort.getAllTodos,
            getTodoById: driverPort.getTodoById,
            getTodosByPriority: driverPort.getTodosByPriority,
            saveTodo: driverPort.saveTodo,
            removeTodo: driverPort.removeTodo
        };
    }

    function customUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }

    Global.App.business.service = service;

}(window));
