<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pensioner;

class PensionerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
            //parameters: pagination, sorting, filtering
        try {
            $pensioners = Pensioner::all();
            //select * from pensioners;
            $response = [
                'success' => true,
                'data' => $pensioners,
                'message' => 'Pensioners fetched successfully.'
            ];
            return response()->json($response, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while fetching pensioners.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

   
    public function store(Request $request)
    {
        //validation
        try{
            $validatedData = $request->validate([
                'serial_number' => 'required|string|max:50|unique:pensioners',
                'control_number' => 'required|string|max:50|unique:pensioners',
                'last_name' => 'required|string|max:100',
                'first_name' => 'required|string|max:100',
                'middle_name' => 'nullable|string|max:100',
                'pension_account' => 'required|string|max:100',
                'rank' => 'nullable|string|max:50',
                'bank_name' => 'nullable|string|max:100',
                'monthly_pension' => 'nullable|numeric',
                'amount_centavos' => 'nullable|numeric',
                'retirement_date' => 'nullable|date'
            ]);

            $pensioner = Pensioner::create($validatedData);
            //insert into pensioners (serial_number, control_number, last_name, first_name, middle_name, pension_account, rank, bank_name, monthly_pension, amount_centavos, retirement_date) values ('SN123', 'CN456', 'Doe', 'John', null, 'PA789', null, null, null, null, null);

            $response = [
                'success' => true,
                'data' => $pensioner,
                'message' => 'Pensioner created successfully.'
            ];
            return response()->json($response, 201);            
        }
          catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while creating pensioner.',
                'error' => $e->getMessage()
            ], 500);
        }   
    }
      

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $pensioner = Pensioner::findOrFail($id);
            //select * from pensioners where id = $id;
            $response = [
                'success' => true,
                'data' => $pensioner,
                'message' => 'Pensioner fetched successfully.'
            ];
            return response()->json($response, 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while fetching pensioner.',
                'error' => $e->getMessage()
            ], 500);
        }       
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $pensioner = Pensioner::findOrFail($id);
            //validation
            $validatedData = $request->validate([
                'serial_number' => 'required|string|max:50|unique:pensioners,serial_number,' . $id,
                'control_number' => 'required|string|max:50|unique:pensioners,control_number,' . $id,
                'last_name' => 'required|string|max:100',
                'first_name' => 'required|string|max:100',
                'middle_name' => 'nullable|string|max:100',
                'pension_account' => 'required|string|max:100|unique:pensioners,pension_account,' . $id,
                'rank' => 'nullable|string|max:50',
                'bank_name' => 'nullable|string|max:100',
                'monthly_pension' => 'nullable|numeric',
                'amount_centavos' => 'nullable|numeric',
                'retirement_date' => 'nullable|date'
            ]);

            $pensioner->update($validatedData);
            //update pensioners set serial_number = ?, control_number = ?, last_name = ?, first_name = ?, middle_name = ?, pension_account = ?, rank = ?, bank_name = ?, monthly_pension = ?, amount_centavos = ?, retirement_date = ? where id = $id;

            $response = [
                'success' => true,
                'data' => $pensioner,
                'message' => 'Pensioner updated successfully.'
            ];
            return response()->json($response, 200);            
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while updating pensioner.',                         
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $pensioner = Pensioner::findOrFail($id);
            $pensioner->delete();
            //delete from pensioners where id = $id;
            return response()->json([
                'message' => 'Pensioner deleted successfully.',
                'pensioner_id' => $id
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while deleting pensioner.',
                'error' => $e->getMessage()
            ], 500);
        }
    }   
}
