import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-see-crud',
  templateUrl: './see-crud.component.html',
  styleUrls: ['./see-crud.component.css']
})
export class SeeCrudComponent implements OnInit {
  // projects: any;
  id:any;
  project:any;

  constructor(private crudService : CrudserviceService) { }

  ngOnInit(): void {
  }

  getProject(){
    this.id = prompt("enter the id of project");
    this.crudService.getProject_id(this.id).subscribe(res=>{
      this.project = res;
  },err=>{
    console.log("error while fetching data.")
  });
  }

  viewproject(){
    this.getProject();
  }
  
  closeproject(){
    window.location.href = "/";
  }
}
