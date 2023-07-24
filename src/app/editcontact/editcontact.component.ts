import { Component, OnInit } from '@angular/core';
import { ContactSchema } from 'src/model/contact-schema';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {
  contact: ContactSchema = {}

     
  allGroups:any=[]

 


  constructor(private api:ApiService,private editroute:ActivatedRoute,private navigate:Router){}

  ngOnInit(): void {
    this.editroute.params.subscribe({
      next:(parameter:any)=>{
        const {id}=parameter
        console.log(id);
        this.api.viewcontact(id).subscribe({
          next:(res:any)=>{
            console.log(res);
            this.contact=res
            
          }
        })

        // this.api.getGroup().subscribe({
        //   next:(res:any)=>{
        //     console.log(res);
        //     this.allGroups=res
            

        //   }
        // })
        
        

      }
    })
      
  }
  updatecontact(id:any,contact:any){
    this.api.editContact(id,contact).subscribe({
      next:(res:any)=>{
        this.navigate.navigateByUrl

      }
    })
  }
}
