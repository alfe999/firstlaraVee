<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pensioners', function (Blueprint $table) {
            $table->id();
            $table->string('serial_number', 10)->unique();
            $table->string('control_number', 20)->unique();
            $table->string('last_name',60);
            $table->string('first_name',60);
            $table->string('middle_name',60);
            $table->string('pension_account',60);
            $table->string('rank',20);
            $table->string('bank_name',100);
            $table->decimal('monthly_pension',10,2);
            $table->bigInteger('amount_centavos')->default(0);            
            $table->dateTime('retirement_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pensioners');
    }
};
