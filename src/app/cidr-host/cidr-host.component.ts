import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cidr-host',
  templateUrl: './cidr-host.component.html',
  styleUrls: ['./cidr-host.component.css']
})
export class CidrHostComponent {

  constructor() { }

  ready = false;
  host = ''
  form = new FormGroup({
    host: new FormControl('')
    }
  )

  cidr = ''
  available = 0

  hostValid() {
    return parseInt(this.form.controls['host'].value)
  }

  onSubmit(){
    var number = parseInt(this.form.controls['host'].value) + 2
    var hostID = Math.ceil(Math.log2(number))
    this.cidr = '/' + (32 - hostID).toString()
    this.available = Math.pow(2, hostID)
    this.host = this.form.controls['host'].value
    this.ready = true
  }

}
