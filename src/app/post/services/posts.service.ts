import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Post, postArraySchema } from '../types/post.type';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  readonly httpService = inject(HttpClient);

  posts = httpResource<Post[]>(() => BASE_URL, {
    defaultValue: [] as Post[],
    parse: (value: unknown) => postArraySchema.parse(value),
  });

  getPost(id: number): Observable<Post | undefined> {
    return this.httpService.get<Post>(`${BASE_URL}/${id}`).pipe(
      catchError((err) => {
        console.error(err);
        return of(undefined);
      }),
    );
  }
}
