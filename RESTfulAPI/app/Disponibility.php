<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Disponibility extends Model {

    protected $table = 'disponibilities';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['dia', 'bloque','teacher_1_id','course_1_id'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['created_at','updated_at'];

}
