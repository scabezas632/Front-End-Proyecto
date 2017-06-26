<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
/* "API"
---------------------------------------
    Profesores = CRUD
---------------------------------------
No se pueden borrar(Por keys):

    Cursos = mostrar,crear y editar
    Salas = mostrar,crear y editar
    departamento = mostrar,crear,editar
---------------------------------------
Pivotes:
    Disponibilidad = CRUD
---------------------------------------
*/

//Index Explicacion de LA RUTA DE LA API:
Route::get('/', [
    'uses'=> 'WelcomeController@index',
    'as' => 'home'
]);

//Profesores
Route::resource('profesores','TeacherController');

//Cursos
Route::resource('cursos','CursoController',['only'=>['index','show','store','update','destroy']]);

//Departamentos
Route::resource('departamentos','DepartamentoController',['only'=>['index','show','store','update']]);

//Salas
Route::resource('salas','SalaController',['only'=>['index','show','store','update']]);

//Departamento&Salas
Route::resource('departamentos.salas','DepartamentoSalaController',['exept'=>['show']]);

//------------------------------------------------------------------------
//Disponibilidad
Route::resource('profesores.disponibilidad.cursos','DisponibilidadController',['exept'=>['show']]);

//Disponibilidad mostrar
Route::resource('disponibilidades','DispoController',['only'=>['index']]);

//Disponibilidad CREAR
Route::resource('profesor.curso.disponible','DisponibilidadController',['only'=>['store']]);
//------------------------------------------------------------------
//Horarios
Route::resource('cursos.horario.salas','HorarioController',['exept'=>['show']]);

//Horarios mostrar
Route::resource('horarios','HorariosController',['only'=>['index']]);

//Horarios CREAR
Route::resource('curso.sala.horario','HorarioController',['only'=>['store']]);



