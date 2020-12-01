import { Component, Input } from '@angular/core'

import { Mail } from '../../models/mail.interface'

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  template: /*html */ `
    <a
      class="mail-item"
      [routerLink]="['/mail', { outlets: { pane: ['message', message.id] } }]"
      routerLinkActive="active"
    >
      <h3>
        {{ message.from }}
        <span>{{ message.timestamp | date: 'shortTime' }}</span>
      </h3>
      <p>{{ message.summary }}</p>
    </a>
  `,
})
export class MailItemComponent {
  @Input()
  message: Mail
  /*
  ! For use without routerLink- does not provide active classes by default
  constructor(private router: Router) {}
  navigateToMessage() {
    this.router.navigate([
      '',
      { outlets: { pane: ['message', this.message.id] } },
    ])
  }
*/
}
