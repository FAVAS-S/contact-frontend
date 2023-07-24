import { Component ,OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-allcontact',
  templateUrl: './allcontact.component.html',
  styleUrls: ['./allcontact.component.css']
})
export class AllcontactComponent implements OnInit {
  allcontact:any=[]
  searchkey:string=''

  isLoading:boolean=true
  errorMsg: any;

  constructor(private api :ApiService){
    
   

  }
  ngOnInit():void{
    this.api.getAllcontact().subscribe({
    // console.log(result);
    
    next:(response:any)=>{
    setTimeout(() => {
      console.log(response);
      this.allcontact=response
      this.isLoading=false
      
      
    },2000);
    },
    error:(err:any)=>{
      console.log(err.message);
      this.errorMsg=err.message
      this.isLoading=false
      
    }
     } )
      
  }
  deletecontact(id:any){
    this.api.deletecontact(id).subscribe({
      next:(response:any)=>{
       console.log(response);
       
        

      }

    })
  }
  

  

  

}
