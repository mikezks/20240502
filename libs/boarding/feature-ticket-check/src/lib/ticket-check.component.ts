import { Component, OnInit } from '@angular/core';
import { TicketCheckFacade } from '@flight-demo/boarding/domain';

@Component({
  selector: 'boarding-ticket-check',
  templateUrl: './ticket-check.component.html',
  styleUrls: ['./ticket-check.component.scss'],
})
export class TicketCheckComponent implements OnInit {
  ticketList$ = this.ticketCheckFacade.ticketList$;

  constructor(private ticketCheckFacade: TicketCheckFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.ticketCheckFacade.load();
  }
}
