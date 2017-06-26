<?php namespace App\Http\Controllers;

use App\Departament;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class DepartamentoController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
        return response()->json(['datos'=>Departament::all()],202);
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
	public function store(Request $request)
	{
        if(!$request->get('edificio'))
        {
            return response()->json(['mensaje'=>'datos invalidos o incompletos','codigo'=>'422'],422);
        }

        Departament::create($request->all());
        return response()->json(['mensaje'=>'edificio ha sido creado'],202);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
        $departamento = Departament::find($id);
        if(!$departamento){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }
        return response()->json(['datos'=>$departamento],202);
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
	public function update(Request $request, $id)
	{
		$metodo = $request->method();
		$departamento = Departament::find($id);

		if ($metodo==="PATCH"){
		   $nombre=$request->get('edificio');
		   if ($nombre!=null && $nombre!=""){
		       $departamento->edificio=$nombre;
           }
           //otro caso if...
            $departamento->save();
            return response()->json(['mensaje'=>'edificio ha sido editado'],202);
		}

		//Con put, toma tados la wea
        $nombre=$request->get('edificio');
        if(!$nombre){
            return response()->json(['mensaje'=>'datos invalidos'],404);
        }
        $departamento->edificio=$nombre;
        $departamento->save();
        return response()->json(['mensaje'=>'edificio ha sido editado'],202);

    }

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{

    }

}
