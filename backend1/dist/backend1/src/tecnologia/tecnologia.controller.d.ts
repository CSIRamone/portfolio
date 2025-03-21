import { Tecnologia } from '@core';
import { TecnologiaProvider } from './tecnologia.provider';
export declare class TecnologiaController {
    private readonly repo;
    constructor(repo: TecnologiaProvider);
    obterTodas(): Promise<Tecnologia[]>;
    obterDestaques(): Promise<Tecnologia[]>;
}
