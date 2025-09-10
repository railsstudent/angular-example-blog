import { Routes } from '@angular/router';
import { postResolver } from './post/resolvers/post.resolver';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'post/:id',
        loadComponent: () => import('./post/post.component'),
        resolve: {
            post: postResolver
        }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
