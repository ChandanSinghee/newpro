import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  logInForm = new FormGroup({
    user: new FormControl(''),
    password : new FormControl('')
    
    
  })
  logInUser (){
    console.log(this.logInForm.value);
  }
      
  constructor() { }

  ngOnInit(): void {
  }

}
