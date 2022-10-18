import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudCompComponent } from './crud-comp/crud-comp.component';
import { SeeCrudComponent } from './see-crud/see-crud.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'crud', component: CrudCompComponent },
  { path: 'see-crud', component: SeeCrudComponent },
  // { path: '/main', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
