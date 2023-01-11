import { Component } from '@angular/core';
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
  constructor(private service: MainService){
    this.readers = [];
  }

  async ngOnInit(): Promise<void> {
    this.readers = await this.service.reader.GetAllReaders();
  }
}
