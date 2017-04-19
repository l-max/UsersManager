Ext.define('AdminApp.store.UsersStore', {
    extend: 'Ext.data.Store',
    model: 'AdminApp.model.User',
    autoLoad: true,
    storeId: 'UsersStore',
    proxy: {
        type: 'ajax',
        //url: 'js/AdminApp/app/data/users.json',
		url: 'admin/users/index',
        reader: {
            type: 'json',
            //root: 'users',
            successProperty: 'success'
        }
    }

});
