<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Role;

class RoleController extends Controller
{

    public function addAndEdit(Role $roles){
        return Inertia::render('Card/Form/RoleForm',[
            'roles' => $roles
        ]);
    }

    public function store(Request $req){
        $validateData = $req->validate(['role_name' => 'required']);

        Role::create($validateData);
       return redirect()->route('card.index');
    }

    public function update(Role $roles,Request $req){
       $roles->update($req->validate(['role_name' => 'required'])); 

       return redirect()->route('card.index');
    }

    public function destroy(Role $roles){
        $roles->delete();
    }
}
