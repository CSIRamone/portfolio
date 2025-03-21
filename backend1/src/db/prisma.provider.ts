//criado apartir do comando: nest g prisma.provider --no-spec --flat
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaProvider extends PrismaClient{}
