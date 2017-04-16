<?php

use yii\grid\GridView;

$this->title = 'Пользователи <- Администрирование';
?>
<p>Hello!!!</p>

<?= GridView::widget([
    'dataProvider' => $dataProvider,
    'columns' => [
        'id',
        'name',
        'created_at:datetime',
    ],
]) ?>

