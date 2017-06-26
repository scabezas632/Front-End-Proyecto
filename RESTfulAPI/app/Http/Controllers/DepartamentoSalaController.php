<?php namespace App\Http\Controllers;


use App\Classroom;
use App\Departament;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Schedule;
use Illuminate\Http\Request;

class DepartamentoSalaController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index($id)
	{
		$departamento = Departament::find($id);
		$salas = $departamento->classrooms;

        if(!$departamento){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }
        return response()->json(['datos'=>$salas],202);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request, $id)
	{
	    //ver campos
        if(!$request->get('nombre'))
        {
            return response()->json(['mensaje'=>'datos invalidos o incompletos','codigo'=>'422'],422);
        }

        //encontrar id
        $departamento = Departament::find($id);
        if(!$departamento){
            return response()->json(['mensaje' => 'datos invalidos o incompletos', 'codigo' => '404'], 404);
        }

        //crear
        Classroom::create([
            'nombre'=>$request->get('nombre'),
            'depa_id'=>$id
        ]);
        return response()->json(['mensaje'=>'la sala ha sido creada','codigo'=>"201"],201);
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
	public function update(Request $request,$idDepartamento,$idSalas)
	{
        $metodo = $request->method();
        $departamento = Departament::find($idDepartamento);
        //El departamento existe?:
        if(!$departamento){
            return response()->json(['mensaje'=>'datos invalidos'],404);
        }
        //encontrar sala
        $sala = $departamento->classrooms()->find($idSalas);
        //existe sala?
        if(!$sala){
            return response()->json(['mensaje'=>'datos invalidos'],404);
        }

        $nombre = $request->get('nombre');

        if ($metodo==="PATCH"){
            if ($nombre!=null && $nombre!=""){
                $sala->nombre=$nombre;
            }
            //otro caso if...
            $sala->save();
            return response()->json(['mensaje'=>'sala ha sido editado'],202);
        }

        //PUT
        if(!$nombre){
            return response()->json(['mensaje'=>'datos invalidos'],404);
        }
        $sala->nombre=$nombre;
        $sala->save();
        return response()->json(['mensaje'=>'sala ha sido editado'],202);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($idDepartamento, $idSala)
	{
/*      NO SE PUEDE BORRAR SALA EN ESTA RUTA!!
        SE DEBE BORRAR HORARIO SOLAMENTE..

        //buscar departamento
        $departamento = Departament::find($idDepartamento);
        if(!$departamento){
            return response()->json(['mensaje'=>'datos invalidos'],404);
        }

        //buscar sala
        $sala = $departamento->classrooms()->find($idSala);
        if(!$sala){
            return response()->json(['mensaje'=>'datos invalidos'],404);
        }


        $sala = $departamento->classrooms()->find($idSala);
        if(!$sala){
            return response()->json(['mensaje'=>'datos invalidos'],404);
        }


        //Eliminar:
        $sala->delete();
        return response()->json(['mensaje'=>'registro eliminado'],200);
*/
    }

}
