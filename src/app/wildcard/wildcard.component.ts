import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var require: any;
var IpSubnetCalculator = require( 'ip-subnet-calculator' );

@Component({
  selector: 'app-wildcard',
  templateUrl: './wildcard.component.html',
  styleUrls: ['./wildcard.component.css']
})
export class WildcardComponent {

  ready = false
  mask = ''
  wildcard = ''

  form = new FormGroup({
    netmask : new FormControl('')
  })

  netmaskValid(){
    return IpSubnetCalculator.isIp(this.form.controls['netmask'].value)
  }

  onSubmit(){
    this.ready = false
    var result = IpSubnetCalculator.calculateCIDRPrefix('0.0.0.0', this.form.controls['netmask'].value)
    this.wildcard = result.invertedMaskStr
    this.mask = this.form.controls['netmask'].value
    this.ready = true
  }



}
