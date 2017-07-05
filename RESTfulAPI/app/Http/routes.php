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

//Profesores (lista)
Route::resource('profesores','TeacherController',['only'=>['index','show']]);

//Cursos (lista)
Route::resource('cursos','CursoController',['only'=>['index','show']]);

//Salas (lista)
Route::resource('salas','SalaController',['only'=>['index','show']]);

//Disponibilidad(lista)
Route::resource('disponibilidades','DispoController',['only'=>['index','show']]);

//profe y disponibilidad (listo)
Route::resource('profesor.disponibilidad','ProfeDispoController',['exept'=>['show']]);

//------------------------------------------------------------------------
//Seccion Mostrar (listo)
Route::resource('secciones','SeccionesController',['only'=>['index']]);

//Secciones prof-curso (listo)
Route::resource('profesores.seccion.cursos','SeccionController',['only'=>['index']]);

//------------------------------------------------------------------

//Horarios mostrar (listo)
Route::resource('horarios','HorariosController',['only'=>['index']]);

//Horario(listo)
Route::resource('cursos.horario.salas','HorarioController',['only'=>['index','update','destroy']]);

//Horarios CREAR(listo)
Route::resource('curso.sala.horario','HorarioController',['only'=>['store']]);



