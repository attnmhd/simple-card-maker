<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;
    protected $fillable =['nama','role_id','profil_pict'];
    public function role(){
        return $this->belongsTo(Role::class);
        }
}
