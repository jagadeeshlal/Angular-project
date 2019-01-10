import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: string = '';
  email: string = '';
  contactNumber: string = '';
  message: string = '';
  isSending: boolean = false;

  // name_regex = /^\s*[a-zA-Z \s]+\s*$/g/
  // email_regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g
  // number_regex = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/g
  name_regex = "^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$"
  email_regex = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
  number_regex = "^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$"

  contactForm: FormGroup

  error_message: string = null;
  success_message: string = null;


  constructor(
    public service: HomeService,
  ) { }
  ngOnInit() {
    $(function () {
      $(".banner").animate({
        height: "250px"
      });

    })


    this.contactForm = new FormGroup({
      'name': new FormControl("", [Validators.required, Validators.minLength(2)]),
      'email': new FormControl("", [Validators.required, Validators.email]),
      'contactNumber': new FormControl("", [Validators.required, Validators.pattern(this.number_regex)]),
      'message': new FormControl("", [Validators.required, Validators.minLength(2)]),
    })
  }

  // setName(name: string) {
  //   this.name = name;
  // }
  // setEmail(email: string) {
  //   this.email = email
  // }
  // setNumber(number: string) {
  //   this.contactNumber = number;
  // }
  // setMessage(message: string) {
  //   this.message = message;
  // }
  onEmailSend() {
    this.error_message = null;
    // console.log("contactForm", this.contactForm)
    if (this.contactForm.valid) {
      this.isSending = true;
      let payload = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        contactNumber: this.contactForm.value.contactNumber,
        message: this.contactForm.value.message
      }
      this.service.sendEmailService(payload).subscribe((response) => {
        this.isSending = false;
        this.success_message = "Thanks for your interest. We will contact you soon.";
        this.initialiseForm()
      }, (error) => {
        this.isSending = false;
        this.error_message = 'Oops something went wrong. You can reach us at "info@factweavers.com"';
        // console.log("Mail Sending Failed. Response", error)
        this.initialiseForm()
      });
    }
    else {
      this.ValidateInput()
    }
  }

  ValidateInput() {
    if (!this.contactForm.controls.name.valid) {
      this.error_message = "Please Enter a Valid Name";
    } else if (!this.contactForm.controls.email.valid) {
      this.error_message = "Please Enter a Valid Email";
    } else if (!this.contactForm.controls.contactNumber.valid) {
      this.error_message = "Please Enter a Valid Number";
    } else if (!this.contactForm.controls.message.valid) {
      this.error_message = "Please Enter a Valid Message";
    } else {
      this.error_message = null;
    }
  }

  initialiseForm() {
    this.contactForm.patchValue({
      name: "",
      email: "",
      contactNumber: "",
      message: ""
    })
  }
}
