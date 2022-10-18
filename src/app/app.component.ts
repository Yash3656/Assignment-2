import { CrudserviceService } from './crudservice.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projects: any;
  projectDetail!: FormGroup ;
  project: any;
  title: any;

  constructor(private router : Router ,private formBuilder : FormBuilder, private crudService : CrudserviceService){

  }
  ngOninit():void{

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
};

btnClick_add(){
  this.router.navigateByUrl('/crud');
  window.location.href="/crud";
}

btnClick_see(){
  this.router.navigateByUrl('/see-crud');
  window.location.href="/see-crud";
}

getAllProject(){
    this.crudService.getProjects().subscribe(res=>{
      this.projects = res;
  },err=>{
    console.log("error while fetching data.")
  });
  //this.getAllProject();
  }


  viewproject(){
    this.getAllProject();
  }


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

  changeproject(projectDetail:any){
  
    this.project.id = this.projectDetail.value.id;
    this.project.description = this.projectDetail.value.desc;
    this.project.name = this.projectDetail.value.name;
    this.project.age = this.projectDetail.value.age;
    this.crudService.updateProjects(this.project).subscribe((response:any) => {
      console.log(response);
      this.crudService.getProjects();
    });
       window.location.href = "/";
  }

}
