import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../types/post.type';
import { Observable } from 'rxjs';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    readonly httpService = inject(HttpClient);

    posts = httpResource<Post[]>(() => BASE_URL, {
        defaultValue: [] as Post[]
    });

    getPost(id: number): Observable<Post> {
        return this.httpService.get<Post>(`${BASE_URL}/${id}`);
    }
}