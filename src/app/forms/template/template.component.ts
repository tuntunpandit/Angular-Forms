import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  states: Array<String> = ['AR', 'AL', 'CA', 'DC'];
  user = {
    'fname': 'Bob',
    'lname': 'Marley'
  }
  constructor() { }

  ngOnInit(): void {
  }


  submitForm(submittedForm) {
    console.log("submittedForm", submittedForm);

    console.log('Form', submittedForm.form.value);
  }
}
