<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function(Blueprint $table)
		{
			$table->increments('id');

<<<<<<< HEAD
			$table->string('nombre');
			$table->string('apellido',255);
			$table->string('email')->unique();
			$table->string('password', 60);

=======
			$table->string('name');
			$table->string('apellido',255);
			$table->string('email')->unique();
			$table->string('password', 60);
			$table->string('rut',255);
			$table->string('departamento',255);
			$table->string('jerarquia',255);
			$table->string('contrato',255);
>>>>>>> refs/remotes/scabezas632/master

			$table->rememberToken();
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
		Schema::drop('users');
	}

}
