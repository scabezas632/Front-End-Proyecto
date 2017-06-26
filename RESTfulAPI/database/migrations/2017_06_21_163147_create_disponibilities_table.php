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
			$table->string('dia');
			$table->tinyInteger('bloque');

            $table->integer('teacher_1_id')->unsigned();
            $table->foreign('teacher_1_id')->references('id')->on('users');

            $table->integer('course_1_id')->unsigned();
            $table->foreign('course_1_id')->references('id')->on('courses');

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
