<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVehiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('make_id')->unsigned();
            $table->integer('model_id')->unsigned();
            $table->integer('detail_id')->unsigned();
            $table->timestamps();

            $table->foreign('make_id')->references('id')->on('makes')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('model_id')->references('id')->on('models')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('detail_id')->references('id')->on('details')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vehicles');
    }
}
