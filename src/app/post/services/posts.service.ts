import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../types/post.type';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    posts = httpResource<Post[]>(() => BASE_URL, {
        defaultValue: [] as Post[]
    });
}