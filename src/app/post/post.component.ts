import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Post } from './types/post.type';
import { User } from './types/user.type';

@Component({
  selector: 'app-post',
  styles: `
    @reference "../../styles.css";

    :host {
      @apply flex m-2  gap-2 items-center w-1/4 flex-grow rounded overflow-hidden
      @apply w-full
    }
  `,
  template: `
    @let myUser = user();
    @let myPost = post();
    @if (myPost && myUser) {
      <div class="mb-10">
        <h1 class="text-3xl">{{ myPost.title }}</h1>
        <div class="text-gray-500 mb-10">by {{ myUser.name }}</div>
        <div class="mb-10">{{ myPost.body }}</div>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PostComponent {
  post = input<Post>();

  user = signal<User>({
    id: 1,
    name: 'Connie',
  });
}
