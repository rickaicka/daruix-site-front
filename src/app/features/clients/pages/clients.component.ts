import {Component, inject, OnInit} from '@angular/core';
import {LucideUsers} from '@lucide/angular';
import {ClienteService} from '../../projects/services/cliente.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-clients',
  imports: [
    LucideUsers,
    DatePipe
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent implements OnInit {

  private clientsService = inject(ClienteService);
  clientsList: any[] = [];

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.clientsService.getClients().subscribe(clients => {
      this.clientsList = clients.results;
      console.log(this.clientsList);
    });
  }
}
