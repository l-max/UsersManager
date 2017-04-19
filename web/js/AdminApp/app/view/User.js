Ext.define('AdminApp.view.User', {
    extend: 'Ext.window.Window',
    alias: 'widget.userwindow',

    title: 'Пользователь',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            items: [
            {
                xtype: 'textfield',
                name : 'login',
                fieldLabel: 'Логин'
            },{
                xtype: 'textfield',
                name : 'password',
                fieldLabel: 'Пароль'
            },{
                xtype: 'textfield',
                name : 'name',
                fieldLabel: 'Имя'
            },{
                xtype: 'textfield',
                name : 'last_name',
                fieldLabel: 'Фамилия'
            },{
                xtype: 'datefield',
				anchor: '100%',
				maxValue: new Date(),
                name : 'date_reg',
                fieldLabel: 'Дата регистрации'
            },{
                xtype: 'combobox',
                valueField: 'id',
                displayField: 'status_name',
                autoSelect: true,
                name : 'id_status',
                fieldLabel: 'Статус'
            },{
                xtype: 'textfield',
                name : 'descript',
                fieldLabel: 'Комментарии'
            }]
        }];
        
        this.dockedItems=[{
            xtype:'toolbar',
            docked: 'top',
            items: [{
                text:'Создать',
                iconCls:'new-icon',
                action: 'new'
            },{
                text:'Сохранить',
                iconCls:'save-icon',
                action: 'save'
            },{
                text:'Удалить',
                iconCls:'delete-icon',
                action: 'delete'
            }]
        }];
        
        this.buttons = [{
                text: 'Очистить',
                scope: this,
                action: 'clear'
        }];
 
        this.callParent(arguments);
    }

});
