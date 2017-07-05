<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDisponibilitiesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('disponibilities', function(Blueprint $table)
		{
			$table->increments('id');

			//dia
			$table->tinyInteger('dia');
			//periodos
			$table->tinyInteger('periodo_1')->nullable();
            $table->tinyInteger('periodo_2')->nullable();
            $table->tinyInteger('periodo_3')->nullable();
            $table->tinyInteger('periodo_4')->nullable();
            $table->tinyInteger('periodo_5')->nullable();
            $table->tinyInteger('periodo_6')->nullable();
            $table->tinyInteger('periodo_7')->nullable();
            $table->tinyInteger('periodo_8')->nullable();

            $table->integer('teacher_id')->unsigned();
            $table->foreign('teacher_id')->references('id')->on('teachers');


            $table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('disponibilities');
	}

}
