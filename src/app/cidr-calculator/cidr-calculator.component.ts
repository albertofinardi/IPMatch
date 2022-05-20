import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var require: any;
var IpSubnetCalculator = require( 'ip-subnet-calculator' );

@Component({
  selector: 'app-cidr-calculator',
  templateUrl: './cidr-calculator.component.html',
  styleUrls: ['./cidr-calculator.component.css']
})
export class CidrCalculatorComponent{

  constructor() { }

  form = new FormGroup({
    ip: new FormControl(''),
    mask: new FormControl('')
  })

  range = ''
  mask = ''
  prefix = ''
  ready = false;

  reset(): void {
    this.range = ''
    this.mask = ''
    this.prefix = ''
  }

  onSubmit(){
    this.reset()
    var result = IpSubnetCalculator.calculateSubnetMask(this.form.controls['ip'].value, this.form.controls['mask'].value)
    this.range = result.ipLowStr + ' - ' + result.ipHighStr;
    this.mask = result.prefixMaskStr;
    this.prefix = '/' + result.prefixSize;
    this.ready = true
  }

  validIp(){
    return IpSubnetCalculator.isIp(this.form.controls['ip'].value) && this.form.controls['mask'].value != ""
  }

  

}
