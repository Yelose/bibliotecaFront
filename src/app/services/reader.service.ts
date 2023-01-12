import { Injectable } from '@angular/core';
import ReaderModel from '../models/readerModel';
import { MainService } from './main-service.service';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  public service: MainService;

  constructor() { }

  public async GetAllReaders(): Promise<ReaderModel[]> {
    return await this.service.HttpGet('/lectores');
  }

  public async GetReader(nSocio: number): Promise<ReaderModel> {
    return await this.service.HttpGet(`/lectores/${nSocio}`);
  }

  public async CreateReader(reader: ReaderModel): Promise<ReaderModel>{
    return await this.service.HttpPost('/lectores', reader);
  }

  public async DeleteReader(nSocio: number): Promise<{message: string}>{
    return await this.service.HttpDelete(`/lectores/${nSocio}`);
  }

  public async UpdateReader(reader: ReaderModel): Promise<ReaderModel> {
    return await this.service.HttpPut(`/lectores/${reader.nSocio}`, reader);
  }
  
}
