<?php

use yii\db\Migration;

/**
 * Handles the creation of table `status`.
 */
class m170419_072845_create_status_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
		$tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }
		
        $this->createTable('{{spr_status}}', [
            'id' 		  => $this->primaryKey()->unique(),
			'status_name' => $this->string(30),
        ], $tableOptions);
		
		$this->insert('{{spr_status}}', [
            'status_name' => 'активный',
        ]);
        $this->insert('{{spr_status}}', [
            'status_name' => 'заблокированный',
        ]);
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropTable('{{spr_status}}');
    }
}
