<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model {

    protected $table = 'schedules';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['dia', 'bloque','id','course_2_id','class_id'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['created_at','updated_at'];

}
