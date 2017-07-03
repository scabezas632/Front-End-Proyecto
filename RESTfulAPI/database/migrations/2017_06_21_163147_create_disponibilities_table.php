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
<<<<<<< HEAD

			$table->tinyInteger('dia');
			$table->tinyInteger('bloque');

            $table->integer('teacher_1_id')->unsigned();
            $table->foreign('teacher_1_id')->references('id')->on('teachers');
=======
			$table->string('dia');
			$table->tinyInteger('bloque');

            $table->integer('teacher_1_id')->unsigned();
            $table->foreign('teacher_1_id')->references('id')->on('users');
>>>>>>> refs/remotes/scabezas632/master

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
