import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { PostcardComponent } from '../post/postcard.component';
import { PostsService } from '../post/services/posts.service';

@Component({
  selector: 'app-home',
  imports: [PostcardComponent],
  template: `
    <div class="flex flex-wrap flex-grow">
      @for (post of posts(); track post.id) {
        <app-postcard [post]="post" />
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  postService = inject(PostsService);

  postsRes = this.postService.posts;

  posts = computed(() => (this.postsRes.hasValue() ? this.postsRes.value() : []));
}
