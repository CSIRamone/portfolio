import { PrismaProvider } from 'src/db/prisma.provider';
import { Tecnologia } from '@core';
export declare class TecnologiaProvider {
    private readonly prisma;
    constructor(prisma: PrismaProvider);
    obterTodas(): Promise<Tecnologia[]>;
}
