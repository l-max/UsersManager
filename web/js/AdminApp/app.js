Ext.application({
    name: 'AdminApp',
    appFolder: 'js/AdminApp/app',
    controllers: ['Users'],
    // views: ['UsersList', 'User'],
    // stores: ['UsersStore'],
    // models: ['User'],

    requires: ['Ext.container.Viewport'],
    
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                    xtype: 'userslist',
                }
        });
    }
});
