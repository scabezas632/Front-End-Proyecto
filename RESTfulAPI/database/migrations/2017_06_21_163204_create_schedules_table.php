<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSchedulesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('schedules', function(Blueprint $table)
		{
			$table->increments('id');

            $table->tinyInteger('dia');

            $table->tinyInteger('periodo_1')->nullable();
            $table->tinyInteger('periodo_2')->nullable();
            $table->tinyInteger('periodo_3')->nullable();
            $table->tinyInteger('periodo_4')->nullable();
            $table->tinyInteger('periodo_5')->nullable();
            $table->tinyInteger('periodo_6')->nullable();
            $table->tinyInteger('periodo_7')->nullable();
            $table->tinyInteger('periodo_8')->nullable();

            //Relacion curso-salas
            $table->integer('course_2_id')->unsigned();
            $table->foreign('course_2_id')->references('id')->on('courses');

            $table->integer('class_id')->unsigned();
            $table->foreign('class_id')->references('id')->on('classrooms');

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
		Schema::drop('schedules');
	}

}
