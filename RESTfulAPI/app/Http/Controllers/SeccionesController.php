<?php namespace App\Http\Controllers;

use App\Departament;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Section;
use Illuminate\Http\Request;

class SeccionesController extends Controller {
    public function __construct()
    {
        $this->middleware('auth.basic');
    }
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
	    $secciones = Section::all();
        if(!$secciones){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }
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
	public function store(Request $request)
	{

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
	public function update($id)
	{
		//

    }

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
        //
    }

}
