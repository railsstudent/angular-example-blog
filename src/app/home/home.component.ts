import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { PostcardComponent } from '../post/postcard.component';
import { PostsService } from '../post/services/posts.service';

@Component({
  selector: 'app-home',
  imports: [PostcardComponent],
  template: `
    @if (postsRes.isLoading()) {
      <div>Loading...</div>
    } @else if (error()) {
      <div>Error: {{ error() }}</div>
    } 
    @if (posts(); as allPosts) {
    <div class="flex flex-wrap flex-grow">
      <p class="ml-2 w-full">Number of posts: {{ allPosts.length }}</p>
      @for (post of allPosts; track post.id) {
        <app-postcard [post]="post" />
      }
    </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  postService = inject(PostsService);

  postsRes = this.postService.posts;

  posts = computed(() => (this.postsRes.hasValue() ? this.postsRes.value() : []));

  error = computed<string>(() =>
    this.postsRes.status() === 'error' ? 'Error loading the posts.' : '',
  );
}
