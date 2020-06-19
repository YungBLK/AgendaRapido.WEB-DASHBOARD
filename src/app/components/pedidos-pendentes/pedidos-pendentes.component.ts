import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { iPedidosPendentes } from "../../interfaces/iPedidosPendentes";

const DATA_MOCK: iPedidosPendentes[] = [
  { uid: 'f295', customerName: 'João da Silva', date:'01/01/2019', category: 'Exames infantis', active: true, deleted: false },
  { uid: 'f295', customerName: 'João da Silva', date:'01/01/2019', category: 'Exames infantis', active: true, deleted: false },
  { uid: 'f295', customerName: 'João da Silva', date:'01/01/2019', category: 'Exames infantis', active: true, deleted: false },
  { uid: 'f295', customerName: 'João da Silva', date:'01/01/2019', category: 'Exames infantis', active: true, deleted: false },
]

@Component({
  selector: 'app-pedidos-pendentes',
  templateUrl: './pedidos-pendentes.component.html',
  styleUrls: ['./pedidos-pendentes.component.scss']
})
export class PedidosPendentesComponent implements OnInit {
  columns: string[] = ['nome', 'data', 'categoria'];
  dataSource: MatTableDataSource<iPedidosPendentes> = new MatTableDataSource<iPedidosPendentes>(DATA_MOCK)


  constructor() { }

  ngOnInit(): void {
  }

}
