import { Component } from '@angular/core';
import { Router } from '@angular/router';
import ReaderModel from 'src/app/models/readerModel';
import { MainService } from 'src/app/services/main-service.service';


@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.scss']
})
export class ReadersComponent {
  public readers: ReaderModel[];
  public displayedColumns: string[] = ["nSocio", "nombreLector", "telefono", "direccion", "nLibrosPrestados"]
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];

  constructor(private service: MainService, private router:Router){
    this.readers = [];
  }

  async ngOnInit(): Promise<void> {
    this.readers = await this.service.reader.GetAllReaders();
  }

  async edit(nSocio: number): Promise<void> {
    this.router.navigate([`/reader/${nSocio}`]);
  }

  async delete(nSocio: number): Promise<void> {
    await this.service.reader.DeleteReader(nSocio);
    await this.reload();
  }

  async reload(): Promise<void> {
    this.readers = await this.service.reader.GetAllReaders();
  }
}
