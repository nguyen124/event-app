import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession } from '../shared/event.model';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  newSessionForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });

  }

  private restrictedWords(control: FormControl): { [key: string]: any } {
    console.log("Invalid word: " + control.value);
    return control.value.includes("foo") ? { 'restrictedWords': "foo" } : null;
  }

  saveSession(formValues) {
    let session: ISession = {
      id: undefined,
      voters: [],
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract
    }
  }
}
