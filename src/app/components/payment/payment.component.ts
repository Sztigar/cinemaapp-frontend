import {AfterViewInit, Component, NgZone, OnInit} from '@angular/core';
import {TicketService} from '../../services/ticket.service';
import {Router} from '@angular/router';
import {Ticket} from '../../interfaces/interfaces';

declare let paypal: any;


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, AfterViewInit {


  price: number;

  constructor(private ticketService: TicketService, private router: Router, private ngZone: NgZone) {
  }

  ngOnInit() {
    this.price = this.ticketService.price;
    console.log(this.price);
  }

  ngAfterViewInit(): void {
    let ticketService = this.ticketService;
    let router = this.router;
    let ngZone = this.ngZone;
    let cost = this.price;

    console.log(cost);

    let ticket: Ticket = {
      price: cost,
      idSeat: ticketService.seat.idSeat,
      idScreening: ticketService.screening.idScreening,
      idTicketStatus: 1,
      idTicketType: 1,
    };

    this.loadExternalScript('https://www.paypalobjects.com/api/checkout.js').then(() => {
      paypal.Button.render({
        env: 'sandbox',
        client: {
          sandbox: 'Aac5MDrbnJtg0eLagGBEE3d6gGnckrPgiPKgARYZHnRBZd03c8KKjs6xRK9w4eEajyAVj9-QM5g6mF0e'
        },
        commit: true,
        payment: function(data, actions) {
          return actions.payment.create({
            payment: {
              transactions: [
                {
                  amount: {total: cost, currency: 'PLN'}
                }
              ]
            }
          });
        },
        onAuthorize: function(data, actions) {
          return actions.payment.execute().then(function(payment) {
            ticketService.buyTicket(ticket).subscribe();
            ngZone.run(() => router.navigate(['/'])).then();
          });
        }
      }, '#paypal-button');
    });
  }

  private loadExternalScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

}
