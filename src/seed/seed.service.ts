import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { Brands_Seed } from './data/brand.seed';
import { Cars_Seed } from './data/cars.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService
  ){}

  populateDB(){

    this.carsService.FillCarsWithSeedData( Cars_Seed )
    this.brandService.FillBrandsWithSeedData( Brands_Seed )

    return `Seeds executed`;
  }
}
