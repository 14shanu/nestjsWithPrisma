import { Body, Controller, Delete, Get, Header, HttpCode, Param, Patch, Post, Redirect } from '@nestjs/common';
import { ProductsService } from './products.service';
import {product as ProductModel} from '@prisma/client'
import { productsModule } from './products.module';


@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) { }
    @Post()

    // addProduct(@Body() prodData : {title : string, description? : string, price : string}) : Promise<ProductModel>{

    //     return this.productsService.insertProduct(prodData)
    //   }

    addProduct(@Body() productData : {title : string , description : string,  price : number}  ,) : Promise<ProductModel> {
        return this.productsService.insertProduct(productData)
    }

    @Get()

    getAllProducts() :Promise<productsModule[] | null>{
        return  this.productsService.getProducts() ;
    }

    @Get(':id')

    getProduct(@Param('id') prodId: string) : productsModule  {
        return this.productsService.getSingleProduct(Number(prodId))
    }

    @Patch(':id')

    updateProduct(@Param('id') prodId: string, @Body() UpdateData : {title : string , desc : string , price : number } ) : Promise <productsModule> 
       {

            return this.productsService.updateProduct(Number( prodId) , UpdateData)
            

    }


    @Delete(':id')
    removeProduct(@Param('id') prodId : string) : productsModule{
        return this.productsService.removeProduct(Number(prodId))
        
    }
}
