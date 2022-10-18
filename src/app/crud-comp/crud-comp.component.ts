import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-crud-comp',
  templateUrl: './crud-comp.component.html',
  styleUrls: ['./crud-comp.component.css']
})
export class CrudCompComponent implements OnInit {
  projectDetail!: FormGroup;
  project: any;
  projects: any;

  constructor(private formBuilder : FormBuilder, private crudService : CrudserviceService) { }

  ngOnInit(): void {
    this.projectDetail = this.formBuilder.group({
      id:[''],
      name : [''],
      desc : [''],
      age : ['']
    });
    
    this.project = {
      id : [''],
      name : [''],
      description : [''],
      age: [''],
    };
  }

  getAllProject(){
    this.crudService.getProjects().subscribe(res=>{
      this.projects = res;
  },err=>{
    console.log("error while fetching data.")
  });
  //this.getAllProject();
  }

  // viewproject(){
  //   this.getAllProject();
  // }


  addproject() {
    console.log(this.project);
    this.project.id = this.projectDetail.value.id;
    this.project.name = this.projectDetail.value.name;
    this.project.description = this.projectDetail.value.desc;
    this.project.age = this.projectDetail.value.age;
    
  
    this.crudService.addProject(this.project).subscribe(res=>{
        this.getAllProject();
    },err=>{
        console.log(err);
    });
    window.location.href = "/addproject";
  
  }
  closeproject(){
    window.location.href = "/";
  }
  // changeproject(projectDetail:any){
  
  //   this.project.id = this.projectDetail.value.id;
  //   this.project.description = this.projectDetail.value.desc;
  //   this.project.name = this.projectDetail.value.name;
  //   this.project.age = this.projectDetail.value.age;
  //   this.crudService.updateProjects(this.project).subscribe((response:any) => {
  //     console.log(response);
  //     this.crudService.getProjects();
  //   });
  //      window.location.href = "/";
  // }

}

