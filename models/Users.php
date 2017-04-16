<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "spr_users".
 *
 * @property integer $id
 * @property string $login
 * @property string $password
 * @property string $name
 * @property string $last_name
 * @property string $date_reg
 * @property integer $id_status
 * @property string $descript
 */
class Users extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'spr_users';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['login', 'password', 'name', 'last_name', 'date_reg', 'id_status', 'descript'], 'required'],
            [['date_reg'], 'safe'],
            [['id_status'], 'integer'],
            [['descript'], 'string'],
            [['login', 'password', 'name', 'last_name'], 'string', 'max' => 40],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id'        => 'ID',
            'login'     => 'Логин',
            'password'  => 'Пароль',
            'name'      => 'Имя',
            'last_name' => 'Фамилия',
            'date_reg'  => 'Дата регистрации',
            'id_status' => 'Статус',
            'descript'  => 'Комментарий',
        ];
    }

    public function getStatus()
    {
        return $this->hasOne(Status::className(), ['id' => 'id_status']);
    }
}
