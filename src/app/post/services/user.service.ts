import { httpResource } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { Post } from '../types/post.type';
import { User, userSchema } from '../types/user.type';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  createUserResource(post: Signal<Post | undefined>) {
    return httpResource<User>(
      () => {
        const result = post();
        return result ? `${BASE_URL}/${result.userId}` : undefined;
      },
      {
        defaultValue: undefined,
        equal: (a, b) => a?.id === b?.id,
        parse: userSchema.parse,
      },
    ).asReadonly();
  }
}
