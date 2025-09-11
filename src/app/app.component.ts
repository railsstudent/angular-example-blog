import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="p-5 bg-green-400 text-white mb-10">
      <a [routerLink]="['/']">
        <span class="text-2xl">Snazzy Fake Blog</span>
      </a>
    </nav>
    <div class="container">
      <router-outlet />
    </div>
  `,
  styles: `
    .container {
      max-width: 960px;
      margin: 0 auto;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
