import { Injectable } from '@angular/core';
import ReaderModel from '../models/readerModel';
import { MainService } from './main-service.service';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  public service: MainService;

  public async GetAllReaders(): Promise<ReaderModel[]> {
    return await this.service.HttpGet('/lectores');
  }

  constructor() { }
}
