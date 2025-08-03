import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller('products')
export class AppController {
  constructor(
    private prisma: PrismaService
  ) {}

  @Post('headphones')
    async addProduct() {
      const product = await this.prisma.products.create({
        data: {
          imgUrl: "/images/tecnology/headphone4",
          title: "soundcore by Anker Q20i Fone de Ouvido Bluetooth",
          description: "Headphone com Cancelamento de Ruído Híbrido, 40H de Reprodução com ANC, Áudio Hi-Res, Graves Potentes, Personalização no App, Modo Transparência, Preto",
          price: 23000,
          category: "tecnology",
          subCategory: "headphones",
          stock: 5
        }
      })
      return product
    }

  @Get('headphones')
    async retrieveAll() {
      const products = await this.prisma.products.findMany({
        where: {
          subCategory: 'headphones'
        }
      })
      return products
    }
}
