import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';


@Controller('cars')
// aprobar validar con dto
// @UsePipes( ValidationPipe )
export class CarsController {

    constructor(
        private readonly carServicex: CarsService
    ){}
    
    @Get()
    getAllCars(){
        return this.carServicex.findAll()
    }

    @Get(':id')
    // ParseUUIDPipe valida que sea de UUID
    getCarById( @Param('id', ParseUUIDPipe ) id:string ){
        console.log({id});
        return this.carServicex.findById(id)
    }

    @Post()
    // CreateCarDto comprueba que el body traiga solo lo que necesita la BD.
    createCar( @Body() createCarDto: CreateCarDto){
        return this.carServicex.create(createCarDto)
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseUUIDPipe ) id: string, 
        @Body() updateCarDto: UpdateCarDto)
    {
        return this.carServicex.update( id, updateCarDto );
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe) id:string){
        return this.carServicex.delete( id )
    }
}
