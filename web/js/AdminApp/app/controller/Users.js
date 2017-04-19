Ext.define('AdminApp.controller.Users', {
	extend: 'Ext.app.Controller',
 
    views: ['UsersList', 'User'],
    stores: ['UsersStore'],
    models: ['User'],

    init: function() {
        this.control({
            /*'viewport > userslist': {
                itemdblclick: this.editBook
            },
            'userwindow button[action=new]': {
                click: this.createUser
            },
            'userwindow button[action=save]': {
                click: this.updateUser
            },
            'userwindow button[action=delete]': {
                click: this.deleteUser
            },
            'userwindow button[action=clear]': {
                click: this.clearForm
            }*/
        });
    },
    // обновление
    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues(),
            id = form.getRecord().get('id');
            values.id = id;
        Ext.Ajax.request({
            url: 'app/data/update.php',
            params: values,
            success: function(response) {
                var data = Ext.decode(response.responseText);
                if (data.success) {
                    var store = Ext.widget('userslist').getStore();
                    store.load();
                    Ext.Msg.alert('Обновление',data.message);
                }
                else {
                    Ext.Msg.alert('Обновление','Не удалось обновить данные пользователя');
                }
            }
        });
    },
    // создание
    createUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues();
        Ext.Ajax.request({
            url: 'app/data/create.php',
            params: values,
            success: function(response, options) {
                var data = Ext.decode(response.responseText);
                if (data.success) {
                    Ext.Msg.alert('Создание', data.message);
                    var store = Ext.widget('userslist').getStore();
                    store.load();
                }
                else {
                    Ext.Msg.alert('Создание','Не удалось добавить пользователя');
                }
            }
        });
    },
    // удаление
    deleteUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            id = form.getRecord().get('id');
        Ext.Ajax.request({
            url: 'app/data/delete.php',
            params: {id:id},
            success: function(response) {
                var data = Ext.decode(response.responseText);
                if (data.success) {
                    Ext.Msg.alert('Удаление',data.message);
                    var store = Ext.widget('userslist').getStore();
                    var record = store.getById(id);
                    store.remove(record);
                    form.getForm.reset();
                }
                else {
                    Ext.Msg.alert('Удаление','Не удалось удалить пользователя');
                }
            }
        });
    },
    
    clearForm: function(grid, record) {
        var view = Ext.widget('userwindow');
        view.down('form').getForm().reset();
    },
    
    editUser: function(grid, record) {
        var view = Ext.widget('userwindow');
        view.down('form').loadRecord(record);
    }
});
