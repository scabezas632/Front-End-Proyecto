<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Classroom extends Model {

    protected $table = 'classrooms';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['nombre','depa_id'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['created_at','updated_at'];

    public function course()
    {
        return $this->belongsToMany('App\Course','schedules','course_2_id','class_id');
    }

    public function departaments()
    {
        return $this->belongsTo('App\Departament','depa_id');
    }


}
