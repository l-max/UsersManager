<?php

use yii\db\Migration;

/**
 * Handles the creation of table `users`.
 */
class m170419_072921_create_users_table extends Migration
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
		
		$this->createTable('{{spr_users}}', [
            'id' 	=> $this->primaryKey()->unique(),
			'login' => $this->string(40),
			'password' => $this->string(40),
			'name' => $this->string(40),
			'last_name' => $this->string(40),
			'date_reg' => $this->date(),
			'id_status' => $this->integer()->notNull(),
			'descript' => $this->text(),
			
        ], $tableOptions);
		
		 // creates index for column `id_status`
        $this->createIndex(
            'idx-users-id_status',
            'spr_users',
            'id_status'
        );
        // add foreign key for table `spr_status`
        $this->addForeignKey(
            'fk-users-id_status',
            'spr_users',
            'id_status',
            'spr_status',
            'id',
            'CASCADE'
        );
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropTable('{{spr_users}}');
    }
}
