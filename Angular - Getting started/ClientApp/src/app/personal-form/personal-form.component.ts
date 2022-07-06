import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent {

  private _firstName: string = "";
  get firstName(): string {
    return this._firstName;
  }
  set firstName(newFirstName: string) {
    this._firstName = newFirstName;
  }

  private _lastName: string = "";
  get lastName(): string {
    return this._lastName;
  }
  set lastName(newLastName: string) {
    this._lastName = newLastName;
  }

  finalName: string = null;

  setNewName(): void {
    this.finalName = this.firstName.split("").reverse().join("") + " " + this.lastName.split("").reverse().join("");
    this.firstName = "";
    this.lastName = "";
  }

  resetValues(): void {
    this.firstName = "";
    this.lastName = "";
    this.finalName = null;
  }
}
