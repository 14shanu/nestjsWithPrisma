import { Injectable} from "@nestjs/common";
import {PrismaService} from "./prisma.service"
import {product , Prisma} from "@prisma/client"





@Injectable()

export class ProductsService {
    constructor (private prisma : PrismaService) {}


    insertProduct(data ) : Promise<product>{
        
        return  this.prisma.product.create( {
            data ,
        })
        
    }


    getProducts (): Promise<product[]> {
        const allProducts = this.prisma.product.findMany()
        return allProducts
    } 
    

    getSingleProduct(productId) : Promise<product | null>  {
       
        return this.prisma.product.findUnique({
           where : {id : productId} ,
       })

    }

    updateProduct(prodId , updateData ): Promise <product | null>{
        return this.prisma.product.update({
            data : updateData ,
            where : {id : prodId} 
        })   
     
    }

    removeProduct(prodId) :  Promise<product | null>{
        return this.prisma.product.delete({
            where : {id :  prodId} ,
        })

    }

}