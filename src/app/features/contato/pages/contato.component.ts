import {Component, inject} from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {ContatoService} from '../services/contato.service';
import {Contato} from '../../../shared/models/contato.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contato',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
})
export class ContatoComponent {
  submitted = false;
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/)
    ]),
    mensagem: new FormControl('', [Validators.required]),
  });
  private contatoService = inject(ContatoService);

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get telefone() {
    return this.contactForm.get('telefone');
  }

  get mensagem() {
    return this.contactForm.get('mensagem');
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const payload: Contato = {
      nome: this.contactForm.value.name ?? '',
      email: this.contactForm.value.email ?? '',
      telefone: this.contactForm.value.telefone ?? '',
      mensagem: this.contactForm.value.mensagem ?? ''
    };

    this.contatoService.sendEmail(payload)
      .subscribe({
        next: (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Mensagem enviada',
            text: response.message
          });

          this.contactForm.reset();
          this.submitted = false;
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: err?.error?.message ?? 'Não foi possível enviar a mensagem.'
          });
        }
      });
  }
}
