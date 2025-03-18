import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class RegisterComponent implements OnInit {
  formularioRegistro: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.formularioRegistro = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {}

  hasError(controlName: string, errorName: string): boolean {
    return this.formularioRegistro.controls[controlName].hasError(errorName);
  }

  registrar(): void {
    if (this.formularioRegistro.valid) {
      this.authService.register(this.formularioRegistro.value).subscribe({
        next: (response) => {
          console.log('Usuario registrado:', response);
          // Lógica adicional después del registro exitoso
        },
        error: (error) => {
          console.error('Error en el registro:', error);
          alert('Error en el registro, por favor intenta de nuevo.');
        }
      });
    }
  }
}