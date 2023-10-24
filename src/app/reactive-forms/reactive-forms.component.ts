import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.less']
})
export class ReactiveFormsComponent implements OnInit {

  public cadastroForm : FormGroup = this.formBuilder.group({
    firstName: ['',Validators.required],
    lastName: ['']
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm() {   
    console.log(this.cadastroForm.value.firstName);
    console.log(this.cadastroForm.value.lastName);
  }

}
