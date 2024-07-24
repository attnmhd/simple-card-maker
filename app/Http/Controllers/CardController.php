<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Role;
use App\Models\Card;


class CardController extends Controller
{
    
    public function index()
    {
        $role = Role::all();
        $cards = Card::all();

        return Inertia::render('Card/Dashboard',[
            'cards' => $cards,
            'role' => $role
        ]);
        }
    
    public function showCard($id)
    {

        return Inertia::render('Card/Dashboard');
        }


        
}
