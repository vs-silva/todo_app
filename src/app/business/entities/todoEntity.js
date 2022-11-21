(function(Global){

    function todoEntity ({id, title, description, priority} = {}) {

        return {
            id: id,
            title: title || '',
            description: description || '',
            priority: priority || ''
        };
    }

    Global.App.business.entities.todo = todoEntity;

}(window));
