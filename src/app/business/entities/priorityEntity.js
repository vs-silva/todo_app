(function(Global){

    function priorityEntity ({id, type, description} = {}) {

        return {
            id: id,
            type: type || '',
            description: description || ''
        };
    }

    Global.App.business.entities.priority = priorityEntity;

}(window));
