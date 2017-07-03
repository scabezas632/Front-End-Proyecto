<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

<<<<<<< HEAD

use App\Teacher;
=======
use App\User;
>>>>>>> refs/remotes/scabezas632/master
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Null_;

class TeacherController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */

	public function index()
	{
<<<<<<< HEAD
		return response()->json(['datos'=>Teacher::all()],202);
=======
		return response()->json(['datos'=>User::all()],202);
>>>>>>> refs/remotes/scabezas632/master
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
	public function store(Request $request)
	{
        if(!$request->get('name'))
        {
            return response()->json(['mensaje'=>'datos invalidos o incompletos','codigo'=>'422'],422);
        }
        if(!$request->get('apellido'))
        {
            return response()->json(['mensaje'=>'datos invalidos o incompletos','codigo'=>'422'],422);
        }
        if(!$request->get('email'))
        {
            return response()->json(['mensaje'=>'datos invalidos o incompletos','codigo'=>'422'],422);
        }
        if(!$request->get('password'))
        {
            return response()->json(['mensaje'=>'datos invalidos o incompletos','codigo'=>'422'],422);
        }
        if(!$request->get('rut'))
        {
            return response()->json(['mensaje'=>'datos invalidos o incompletos','codigo'=>'422'],422);
        }
        if(!$request->get('departamento'))
        {
            return response()->json(['mensaje'=>'datos invalidos o incompletos','codigo'=>'422'],422);
        }
        if(!$request->get('jerarquia'))
        {
            return response()->json(['mensaje'=>'datos invalidos o incompletos','codigo'=>'422'],422);
        }
        if(!$request->get('contrato'))
        {
            return response()->json(['mensaje'=>'datos invalidos o incompletos','codigo'=>'422'],422);
        }


        User::create($request->all());
        return response()->json(['mensaje'=>'usuario ha sido creado'],202);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
<<<<<<< HEAD
		$profesor = Teacher::find($id);
=======
		$profesor = User::find($id);
>>>>>>> refs/remotes/scabezas632/master
		if(!$profesor){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }
		return response()->json(['datos'=>$profesor],202);
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
        $profesor = User::find($id);

        if ($metodo==="PATCH"){

            //Por cada atributo:
            //1
            $nombre=$request->get('name');
            if ($nombre!=null && $nombre!=""){
                $profesor->name=$nombre;
            }
            //2
            $apellido=$request->get('apellido');
            if ($apellido!=null && $apellido!=""){
                $profesor->apellido=$apellido;
            }
            //3
<<<<<<< HEAD
            //5
            $rut=$request->get('rut');
            if ($rut!=null && $rut!=""){
                $profesor->rut=$rut;
            }
            /*
=======
>>>>>>> refs/remotes/scabezas632/master
            $email=$request->get('email');
            if ($email!=null && $email!=""){
                $profesor->email=$email;
            }
            //4
            $password=$request->get('password');
            if ($password!=null && $password!=""){
                $profesor->password=$password;
            }
<<<<<<< HEAD
=======
            //5
            $rut=$request->get('rut');
            if ($rut!=null && $rut!=""){
                $profesor->rut=$rut;
            }
>>>>>>> refs/remotes/scabezas632/master
            //6
            $departamento=$request->get('departamento');
            if ($departamento!=null && $departamento!=""){
                $profesor->departamento=$departamento;
            }
            //7
            $jerarquia=$request->get('jerarquia');
            if ($jerarquia!=null && $jerarquia!=""){
                $profesor->jerarquia=$jerarquia;
            }
            //8
            $contrato=$request->get('contrato');
            if ($contrato!=null && $contrato!=""){
<<<<<<< HEAD
               $profesor->contrato=$contrato;
            }*/
=======
                $profesor->contrato=$contrato;
            }
>>>>>>> refs/remotes/scabezas632/master
            $profesor->save();
            return response()->json(['mensaje'=>'profesor ha sido editado'],202);
        }


        //Con put, toma tados la wea
        $nombre=$request->get('name');
        if (!$nombre){
            return response()->json(['mensaje'=>'datos invalidos'],404);

        }
        //2
        $apellido=$request->get('apellido');
        if (!$apellido){
            return response()->json(['mensaje'=>'datos invalidos'],404);

        }
        //3
<<<<<<< HEAD
/*
=======
>>>>>>> refs/remotes/scabezas632/master
        $email=$request->get('email');
        if (!$email){
            return response()->json(['mensaje'=>'datos invalidos'],404);

        }
        //4
        $password=$request->get('password');
        if (!$password){
            return response()->json(['mensaje'=>'datos invalidos'],404);

        }
        //5
<<<<<<< HEAD
*/
=======
>>>>>>> refs/remotes/scabezas632/master
        $rut=$request->get('rut');
        if (!$rut){
            return response()->json(['mensaje'=>'datos invalidos'],404);

        }
<<<<<<< HEAD
/*
=======
>>>>>>> refs/remotes/scabezas632/master
        //6
        $departamento=$request->get('departamento');
        if (!$departamento){
            return response()->json(['mensaje'=>'datos invalidos'],404);

        }
        //7
        $jerarquia=$request->get('jerarquia');
        if (!$jerarquia){
            return response()->json(['mensaje'=>'datos invalidos'],404);

        }
        //8
        $contrato=$request->get('contrato');
        if (!$contrato){
            return response()->json(['mensaje'=>'datos invalidos'],404);

        }
<<<<<<< HEAD
*/
        //Paso la prueba:
        $profesor->name=$nombre;
        $profesor->apellido=$apellido;
        $profesor->rut=$rut;
/*
        $profesor->email=$email;
        $profesor->password=$password;
        $profesor->departamento=$departamento;
        $profesor->jerarquia=$jerarquia;
        $profesor->contrato=$contrato;
*/
=======
        //Paso la prueba:
        $profesor->name=$nombre;
        $profesor->apellido=$apellido;
        $profesor->email=$email;
        $profesor->password=$password;
        $profesor->rut=$rut;
        $profesor->departamento=$departamento;
        $profesor->jerarquia=$jerarquia;
        $profesor->contrato=$contrato;
>>>>>>> refs/remotes/scabezas632/master
        //Guardar
        $profesor->save();
        return response()->json(['mensaje'=>'Profesor ha sido editado'],202);

	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
<<<<<<< HEAD
	    $profesor = Teacher::find($id);
=======
	    $profesor = User::find($id);
>>>>>>> refs/remotes/scabezas632/master
        if (!$profesor){
            return response()->json(['mensaje'=>'datos invalidos'],404);
        }

        $rela = $profesor->course;
        //return $rela;

        //BORRAR PROFESOR
        if($rela=="[]"){
            $profesor->delete();
            //$profesor->cursos;
            return response()->json(['mensaje'=>'Profesor ha sido borrado'],202);
        }

        //BORRAR PIVOTE ANTES!!!
        return response()->json(['mensaje'=>'Borrar registro en tabla relacionada antes','datos'=>$rela],404);

	}

}
