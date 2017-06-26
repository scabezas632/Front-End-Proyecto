<?php namespace App\Http\Controllers;


use App\Schedule;
use App\Course;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Classroom;
use Illuminate\Http\Request;

class HorarioController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index($idCurso,$idHorario)
    {

        $cursos = Course::find($idCurso);
        if(!$cursos){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }

        $horario = Schedule::find($idHorario);
        if(!$horario){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }

        //dd($idHorario,$idCurso);

        $horarios = $cursos->classrooms;
        return response()->json(['datos'=>$horario],202);

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
    public function store(Request $request, $idCurso,$idSala)
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
        $curso = Course::find($idCurso);
        if(!$curso){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }

        $sala = Classroom::find($idSala);
        if(!$sala){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }

        //CREAR
        Schedule::create([
            'dia'=>$request->get('dia'),
            'bloque'=>$request->get('bloque'),
            'course_2_id'=>$idCurso,
            'class_id'=>$idSala
        ]);

        return response()->json(['mensaje'=>'Horario ha sido creado','codigo'=>"201"],201);

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
    public function update(Request $request,$idCurso,$idHorario,$idSala)
    {
        $metodo = $request->method();

        $horario = Schedule::find($idHorario);
        if(!$horario){
            return response()->json(['mensaje'=>'No se encontro registro'],404);
        }
        $curso = Course::find($idCurso);
        if(!$curso){
            return response()->json(['mensaje'=>'No se encontro registro'],404);
        }
        $sala = $curso->classrooms()->find($idSala);
        if(!$sala){
            return response()->json(['mensaje'=>'No se encontro registro'],404);
        }

        $dia = $request->get('dia');
        $bloque = $request->get('bloque');

        if ($metodo==="PATCH"){
            if ($dia!=null && $dia!=""){
                $horario->dia=$dia;
            }
            if (!$bloque=null && $bloque!=""){
                $horario->bloque=$bloque;
            }
            $horario->save();
            return response()->json(['mensaje'=>'Horario ha sido editado'],202);
        }

        //PUT
        if(!$dia){
            return response()->json(['mensaje'=>'datos invalidos '],404);
        }
        if(!$bloque){
            return response()->json(['mensaje'=>'datos invalidos '],404);
        }
        $horario->dia=$dia;
        $horario->bloque=$bloque;
        $horario->save();
        return response()->json(['mensaje'=>'Horario ha sido editado'],202);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($idCurso, $idHorario,$idSala)
    {
        $cursos = Course::find($idCurso);
        if(!$cursos){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }

        $horario = Schedule::find($idHorario);
        if(!$horario){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }

        //dd($idCurso,$idHorario,$idSala);
        $salas = $cursos->classrooms()->find($idSala);
        if(!$salas){
            return response()->json(['Mensaje'=>'No se encontro registro','codigo'=> 404],404);
        }

        $horario->delete();
        return response()->json(['mensaje'=>'Horario ha sido eliminado'],202);

    }

}
