<?php

namespace app\modules\admin\models;

use Yii;
use yii\helpers\ArrayHelper;
/**
 * This is the model class for table "spr_status".
 *
 * @property integer $id
 * @property string $status_name
 */
class Status extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{spr_status}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['status_name'], 'required'],
            [['status_name'], 'string', 'max' => 30],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'status_name' => 'Статус',
        ];
    }

    public function getStatusName()
    {
        return $this->status_name;
    }

    public static function getStatusList()
    {
        $statuses = Status::find()->all();
        return ArrayHelper::map($statuses, 'id', 'status_name');
    } 
}
