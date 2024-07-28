<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Role;
use App\Models\Card;

class CardController extends Controller
{
    public function index(){
        $roles = Role::all();
        $cards = Card::all();
        return Inertia::render('Card/Dashboard',[
            'roles'=> $roles,
            'cards' => $cards
        ]);
    }

    public function cardApi(){
        $cards = Card::all();
        return response()->json($cards);
    }

    public function showCard(int $id){
        $cards = Card::select('*')->join('roles','roles.id','=','cards.role_id')->where('cards.id','=',$id)->get();
        return Inertia::render('Card/Card',[
            'cards' => $cards
        ]);
    }

    public function add(){
        $roles = Role::all();
        return Inertia::render('Card/Form/CardForm',[
            'roles' => $roles
        ]);

    }

    public function store(Request $request)
{
    try {
        $validatedData = $request->validate([
            'nama' => 'required',
            'role_id' => 'required',
            'profil_pict' => 'required|image|mimes:jpeg,png,jpg',
        ]);

        $image = $request->file('profil_pict');
        $fileName = time() . '.' . $image->getClientOriginalExtension();

        // Image handling and storage
        $imagePath = $this->storeImage($image, $fileName);

        // Create the card record
        $card = Card::create([
            'nama' => $validatedData['nama'],
            'role_id' => $validatedData['role_id'],
            'profil_pict' => $fileName, // Store the image path in the database
        ]);

        return redirect()->route('card.index');
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
}

private function storeImage($image, $fileName)
{
    return $image->storeAs('public/images', $fileName);
}


    public function update(Card $cards,Request $req){
       $cards->update($req->validate([
        'nama' => 'required',
        'role_id' => 'required',
        'profil_pict' => 'required',
    ])); 

       return redirect()->route('card.index');
    }

    public function destroy(Card $cards){
        $cards->delete();
    }

    
}
