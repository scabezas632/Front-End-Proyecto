<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeachersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('teachers', function(Blueprint $table)
		{
			$table->increments('id');
            $table->string('nombre');
            $table->string('apellido',255);
            $table->string('email')->unique();
            $table->string('rut',255);
            $table->string('departamento',255);
            $table->string('jerarquia',255);
            $table->string('contrato',255);
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
		Schema::drop('teachers');
	}

}
