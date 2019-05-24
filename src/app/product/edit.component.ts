import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./product.component.css']
})
export class EditComponent implements OnInit {
  @Input() itemSelect;
  @Input() countArr;
  act: string = "";
  myFirstReactiveForm: FormGroup;
  
  constructor(private fb: FormBuilder, private appPage: AppComponent) { }

  ngOnInit() {
    this.initForm();
  }
  onSubmit() {
    const controls = this.myFirstReactiveForm.controls;

    if (this.myFirstReactiveForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    this.appPage.addEditResult(this.myFirstReactiveForm.value, this.act);
  }
  isControlInvalid(controlName: string): boolean {
    const control = this.myFirstReactiveForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }
  private initForm() {
    switch(this.itemSelect.act) {
      case "add":
        this.act = "add";
        this.myFirstReactiveForm = this.fb.group({
          idProduct: [this.countArr],
          name: ['Product '+(this.countArr+1), Validators.required],
          description: ['', Validators.required],
          imageUrl: ['http://www.naddim.com/nadya/oz-code/images/pr3.jpg'],
          price: [100]
          });
        break;
      case "edit":
        this.act = "edit";
        this.myFirstReactiveForm = this.fb.group({
          idProduct: [this.itemSelect.idProduct],
          name: [this.itemSelect.name, Validators.required],
          description: [this.itemSelect.description, Validators.required],
          imageUrl: [this.itemSelect.imageUrl],
          price: [this.itemSelect.price]
        });
        break;
    }
  }
}