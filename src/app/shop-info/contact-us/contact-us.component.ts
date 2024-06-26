import { Component,OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductListService } from '../../services/product-list.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  constructor( 
    private httpClient: HttpClient,
    private productListService :ProductListService,
    private router: Router
  ){
    window.scroll(0,0)
  }
  contactInfo = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email:new FormControl("",[ Validators.email, Validators.required]),
    subject: new FormControl("", Validators.required),
    massege: new FormControl("", Validators.required),
  })
  submited:boolean = false
  subjects:string[] = ["Product", "Job", "Partnership"];
  ngOnInit(): void {
  
}
  sendMessage(){
    this.submited = true
    if(this.contactInfo.status === 'INVALID') return;
    else{
    let data = this.contactInfo.value
    //this.httpClient.post(this.productListService.address,data)
    this.router.navigateByUrl("/home")
    this.contactInfo.reset()
  }
}
}