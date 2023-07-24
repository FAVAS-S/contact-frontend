import { Component, OnInit } from '@angular/core';
import { ContactSchema } from 'src/model/contact-schema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  // implements OnInit



  contact: ContactSchema = {}

  groups: any = []
  constructor(private api: ApiService,private addContactRouter :Router) {

  }
  ngOnInit(): void {
    this.api.getgroups().subscribe({
      next: (response: any) => {
        console.log(response);
        this.groups = response

      },
      error: (err: any) => {
        console.log(err.message);

      }
      


    })

  }
  addContact(contact: ContactSchema) {
    this.api.addContact(contact).subscribe({
      next: (response: any) => {
        
        console.log(response);
        // navigate to all contact page
         this.addContactRouter.navigateByUrl('')
      },
      error: (err: any) => {
        console.log(err.message);

      }

    })
  }





}
