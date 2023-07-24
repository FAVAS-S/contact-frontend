import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent {

  contact:any=[]
  errorMsg:string=''
  group:string=''

  constructor(private api:ApiService,private viewRouter:ActivatedRoute){

  }
  ngOnInit():void{

    // get contact id from its url
    this.viewRouter.params.subscribe((data:any)=>{
      console.log(data);
      const {id}=data

      // api call to get particular contact detail

      this.api.viewcontact(id).subscribe({
        next:(response:any)=>{
          console.log(response);
          const {groupId}=response
          console.log(groupId);
          this.api.getgroup(groupId).subscribe((data:any)=>{
            console.log(data);
           const {name}=data
           this.group=name
            
          })
          
          this.contact=response
          
        },
        error:(err:any)=>{
          console.log(err);
          this.errorMsg=err.message
         
          
        }
        
        
          

      })
      
    })

  }

}
