import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ProductsController } from './products/products.controller';
import { productsModule } from './products/products.module';

@Module({
  imports: [productsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
