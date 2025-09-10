import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from './types/post.type';

@Component({
  selector: 'app-postcard',
  imports: [RouterLink],
  styles: `
    @reference "../../styles.css";

    :host {
      @apply flex m-2  gap-2 items-center w-1/4 shadow-md flex-grow rounded overflow-hidden
    }
  `,
  template: `
  <div class="flex items-center flex-grow" style="border: 1px solid #eee">
    <img src="https://placehold.co/150" style="background: #cccccc" width="150" height="150" />
    <a [routerLink]="['/post', post().id]">
      {{ post().title }}
    </a>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostcardComponent {
  post = input.required<Post>();
}
