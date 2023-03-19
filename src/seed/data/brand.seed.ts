import { Brand } from "src/brands/entities/brand.entity"
import { v4 as uuid } from "uuid"

export const Brands_Seed: Brand[] = [
    {
        id: uuid(),
        name: 'Tesla',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Lexus',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Nissan',
        createdAt: new Date().getTime(),
    },
]