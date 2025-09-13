import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { PostsService } from '../services/posts.service';

export const postResolver = (route: ActivatedRouteSnapshot) => {
  const postId = route.paramMap.get('id');

  if (!postId) {
    return of(undefined);
  }

  return inject(PostsService).getPost(+postId);
};
