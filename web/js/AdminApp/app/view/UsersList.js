Ext.define('AdminApp.view.UsersList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userslist',

    title: 'Пользователи',
    store: 'UsersStore',

    initComponent: function() {
        this.columns = [
            {header: 'id', dataIndex: 'id', flex: 1},
            {header: 'Логин', dataIndex: 'login', flex: 1},
            {header: 'Пароль', dataIndex: 'password', flex: 1},
            {header: 'Имя', dataIndex: 'name', flex: 1},
            {header: 'Фамилия', dataIndex: 'last_name', flex: 1},
        ];

        this.callParent(arguments);
    }
});
