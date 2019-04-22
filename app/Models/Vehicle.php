<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    public function make () {
        return $this->belongsTo(Make::class,'make_id','id');
    }

    public function model() {
        return $this->belongsTo(Models::class,'model_id','id');
    }

    public function year () {
        return $this->belongsTo(Year::class,'year_id','id');
    }
}
