import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  newUserForm: FormGroup;
  newUser!: User

  constructor(private fb: FormBuilder) {
    this.newUserForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      street: ['', Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.newUserForm.valid) {
      this.newUser = {
        username: this.newUserForm.get('username')?.value,
        email: this.newUserForm.get('email')?.value,
        password: this.newUserForm.get('password')?.value,
        address: {
          street: this.newUserForm.get('street')?.value,
          zip: this.newUserForm.get('zip')?.value,
          city: this.newUserForm.get('city')?.value
        }
      }
      console.log(this.newUser);
    }
  }
}
