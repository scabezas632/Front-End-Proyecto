<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Departament extends Model {

    protected $table = 'departaments';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['edificio','id'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['created_at','updated_at'];


    public function classrooms()
    {
        return $this->hasMany('App\Classroom','depa_id');
    }


}
