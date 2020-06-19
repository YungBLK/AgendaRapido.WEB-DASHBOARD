import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { iCategory } from "../../interfaces/iCategory";
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  columns:[ 'name', 'description'];
  dataSource: MatTableDataSource<iCategory>

  constructor(private categorySrv:CategoryService) { }

  async ngOnInit(){
    const categories = await this.categorySrv.getAll();

    console.log(categories);

    this.dataSource = categories.data.map((it: iCategory) =>{
      return { name: it.name, description: it.description };
    });
  }




}
