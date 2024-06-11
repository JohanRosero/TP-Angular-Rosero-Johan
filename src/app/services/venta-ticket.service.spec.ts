import { TestBed } from '@angular/core/testing';

import { VentaTicketService } from './venta-ticket.service';

describe('VentaTicketService', () => {
  let service: VentaTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
