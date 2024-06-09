import { Module } from "@nestjs/common";
import { ClientController } from "src/controllers/client.controller";
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { ClientService } from "src/services/client.service";

@Module({
    controllers: [ClientController],
    providers: [ClientService, PrismaService]
})
export class ClientModule {}