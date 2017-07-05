<?php namespace App\Http\Controllers;

use App\Course;
use App\Disponibility;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Teacher;
use Illuminate\Http\Request;

class SeccionController extends Controller {
    public function __construct()
    {
        $this->middleware('auth.basic');
    }
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index($id)
	{

        $profesores = Teacher::find($id);
        if(!$profesores){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }
        $secciones = $profesores->course;


        return response()->json(['datos'=>$secciones],202);
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
       //
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

        $profesores = Teacher::find($idProfesores);
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
        $profesores = Teacher::find($idProfesor);
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
