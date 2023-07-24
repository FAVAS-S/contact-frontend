import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcontactComponent } from './allcontact/allcontact.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';

const routes: Routes = [
  {path:'',component:AllcontactComponent},


  {
    path:'addcontact',component:AddcontactComponent
  },
  {
    path:'viewcontact/:id',component:ViewcontactComponent
  },
  {
    path:'editcontact/:id',component:EditcontactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
