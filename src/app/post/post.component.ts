import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { UserService } from './services/user.service';
import { Post } from './types/post.type';

@Component({
  selector: 'app-post',
  styles: `
    @reference "../../styles.css";

    :host {
      @apply flex m-2  gap-2 items-center w-1/4 flex-grow rounded overflow-hidden w-full;
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
  readonly userService = inject(UserService);

  post = input<Post>();

  userRef = this.userService.createUserResource(this.post);

  user = computed(() => (this.userRef.hasValue() ? this.userRef.value() : undefined));
}
