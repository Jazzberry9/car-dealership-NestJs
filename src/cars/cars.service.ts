import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'

import { CreateCarDto, UpdateCarDto } from './dto';
import { Car } from './interfaces/car.interface';


@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla'
        // },
    ];

    findAll(){
        return this.cars;
    }

    findById(id:string){
        const car = this.cars.find(carros => carros.id === id)
        if (!car) throw new NotFoundException(`Car with the id '${id}' not found.`);
        return  car 
    }

    create( createCarDto: CreateCarDto){
        
        const vehiculos: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(vehiculos);

        return { vehiculos }
    }

    update( id: string, updateCarDto: UpdateCarDto){

        let carDB = this.findById( id );

        if( updateCarDto.id && updateCarDto.id !== id){
            throw new BadRequestException()
        }

        this.cars = this.cars.map( carr => {

            // actualizar solo si el car.id es igual al argumento
            if( carr.id === id ){
                // copia el car encontrado, lo sobreescribe con el updatecardto y el id
                carDB = { ...carDB,...updateCarDto, id } 
                // si todo sale bien, retorna el objeto actualizado
                return carDB;
            }
            
            return carr;
        })

        return carDB;
    }

    delete( id: string ){

        const car = this.findById(id);
        if( car.id !== id )
            throw new BadRequestException()
        this.cars = this.cars.filter( carss => carss.id !== id);
    }

    FillCarsWithSeedData( cars: Car[]){
        this.cars = cars;
    }
}
