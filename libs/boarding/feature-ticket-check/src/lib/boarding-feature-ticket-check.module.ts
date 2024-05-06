import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardingDomainModule } from '@flight-demo/boarding/domain';
import { TicketCheckComponent } from './ticket-check.component';

@NgModule({
  imports: [CommonModule, BoardingDomainModule],
  declarations: [TicketCheckComponent],
  exports: [TicketCheckComponent],
})
export class BoardingFeatureTicketCheckModule {}
