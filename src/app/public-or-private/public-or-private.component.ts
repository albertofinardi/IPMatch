import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var require: any;
const is_ip_private = require('private-ip')
var IpSubnetCalculator = require( 'ip-subnet-calculator' );

@Component({
  selector: 'app-public-or-private',
  templateUrl: './public-or-private.component.html',
  styleUrls: ['./public-or-private.component.css']
})
export class PublicOrPrivateComponent {

  response = ''
  form = new FormGroup({
    ip: new FormControl('', Validators.required)
  }) 

  validIp(){
    return IpSubnetCalculator.isIp(this.form.controls['ip'].value)
  }

  onSubmit(){
    this.response = ''
    var res = is_ip_private(this.form.controls['ip'].value)
    if(res != undefined){
      this.response = res ? 'Private' : 'Public'
    }else{
      this.response = 'IP not valid'
    }
  }

}
