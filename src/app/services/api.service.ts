import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ContactSchema } from 'src/model/contact-schema';

// 28-7-23---30 api call

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // getgroups() {
  //   throw new Error('Method not implemented.');

  // }
 
   
   
  BASE_URL='http://localhost:3000'
  getgroups: any;

  
  // service constructor

  constructor(private http:HttpClient) {

    // api call

    // create a function in api.service.ts

   
   }
   handleError(error:HttpErrorResponse){

    let errorMsg:string=''
    if(error.error){
      // client error
      errorMsg=`Error:${error.error.message}`
    }else{
      errormsg:`status:${error.status}\n
      Error:${error.message}`
    }
    return throwError(()=>errorMsg)

   }
   getAllcontact(){
    //url: http://localhost:3000/contacts
      
    // this.http.get('http://localhost:3000/contacts')

   return this.http.get(`${this.BASE_URL}/contacts`).pipe(catchError(this.handleError))

  }

  // view component

  viewcontact(id:any){
    // api call  url: http://localhost:3000/contacts/id   req:get
    return this.http.get(`${this.BASE_URL}/contacts/${id}`)

  }
  addContact(contact:ContactSchema){
  
   return this.http.post(`${this.BASE_URL}/contacts`,contact)

  }
  // getGroup(){
  //   return this.http.get(`${this.BASE_URL}/groups/`)
  // }

  getgroup(id:any){
    return this.http.get(`${this.BASE_URL}/groups/${id}`)
    

  }

  deletecontact(id:any){
   return this.http.delete(`${this.BASE_URL}/contacts/${id}`);
  }

  editContact(id:any,body:ContactSchema){
    return this.http.put(`${this.BASE_URL}/contacts/${id}`,body);


  }
}

