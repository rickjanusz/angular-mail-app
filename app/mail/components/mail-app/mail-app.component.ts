import { Component } from '@angular/core'

@Component({
  selector: 'mail-app',
  styleUrls: ['mail-app.component.scss'],
  template: /*html */ `
    <div class="mail">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class MailAppComponent {
  onActivate(event) {
    console.log('Activate:', event)
  }
  onDeactivate(event) {
    console.log('Deactivate:', event)
  }
}
