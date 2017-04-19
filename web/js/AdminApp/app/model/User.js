Ext.define('AdminApp.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        'id',
        'login',
        'password',
        'name',
        'last_name',
        'date_reg',
        'id_status',
        'descript'
    ]
});
