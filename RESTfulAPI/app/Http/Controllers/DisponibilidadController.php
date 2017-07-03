<?php namespace App\Http\Controllers;

use App\Course;
use App\Disponibility;
use App\Http\Requests;
use App\Http\Controllers\Controller;

<<<<<<< HEAD
use App\Teacher;
=======
use App\User;
>>>>>>> refs/remotes/scabezas632/master
use Illuminate\Http\Request;

class DisponibilidadController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index($id)
	{

<<<<<<< HEAD
        $profesores = Teacher::find($id);
=======
        $profesores = User::find($id);
>>>>>>> refs/remotes/scabezas632/master
        if(!$profesores){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }
        $cursos = $profesores->course;


        return response()->json(['datos'=>$cursos],202);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{

	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request,$idProfesor,$idCurso)
	{
        //ver campos
        if(!$request->get('dia'))
        {
            return response()->json(['mensaje'=>'datos invalidos o incompletos','codigo'=>'422'],422);
        }
        if(!$request->get('bloque'))
        {
            return response()->json(['mensaje'=>'datos invalidos o incompletos','codigo'=>'422'],422);
        }

        //BUSCAR

<<<<<<< HEAD
        $profesor = Teacher::find($idProfesor);
=======
        $profesor = User::find($idProfesor);
>>>>>>> refs/remotes/scabezas632/master
        if(!$profesor){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }

        $curso = Course::find($idCurso);
        if(!$curso){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }


        //CREAR
        Disponibility::create([
            'dia'=>$request->get('dia'),
            'bloque'=>$request->get('bloque'),
            'teacher_1_id'=>$idProfesor,
            'course_1_id'=>$idCurso
        ]);

        return response()->json(['mensaje'=>'Disponibilidad ha sido creado','codigo'=>"201"],201);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(Request $request,$idProfesores,$idDispo,$idCurso)
	{
        $metodo = $request->method();

<<<<<<< HEAD
        $profesores = Teacher::find($idProfesores);
=======
        $profesores = User::find($idProfesores);
>>>>>>> refs/remotes/scabezas632/master
        if(!$profesores){
            return response()->json(['mensaje'=>'No se encontro registro'],404);
        }
        $dispo = Disponibility::find($idDispo);
        if(!$dispo){
            return response()->json(['mensaje'=>'No se encontro registro'],404);
        }
        $curso = $profesores->course()->find($idCurso);
        if(!$curso){
            return response()->json(['mensaje'=>'No se encontro registro'],404);
        }

        $dia = $request->get('dia');
        $bloque = $request->get('bloque');

        if ($metodo==="PATCH"){
            if ($dia!=null && $dia!=""){
                $dispo->dia=$dia;
            }
            if (!$bloque=null && $bloque!=""){
                $dispo->bloque=$bloque;
            }
            $dispo->save();
            return response()->json(['mensaje'=>'Disponibilidad ha sido editado'],202);
        }

        //PUT
        if(!$dia){
            return response()->json(['mensaje'=>'datos invalidos '],404);
        }
        if(!$bloque){
            return response()->json(['mensaje'=>'datos invalidos '],404);
        }
        $dispo->dia=$dia;
        $dispo->bloque=$bloque;
        $dispo->save();
        return response()->json(['mensaje'=>'Disponibilidad ha sido editado'],202);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($idProfesor,$idDispo,$idcurso)
	{
<<<<<<< HEAD
        $profesores = Teacher::find($idProfesor);
=======
        $profesores = User::find($idProfesor);
>>>>>>> refs/remotes/scabezas632/master
        if(!$profesores){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }

        $idDispo = Schedule::find($idDispo);
        if(!$idDispo){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }

        //dd($idCurso,$idHorario,$idSala);
        $cursos = $profesores->course()->find($idcurso);
        if(!$cursos){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }

        $profesores->delete();
        return response()->json(['mensaje'=>'Horario ha sido eliminado'],202);
	}

}
