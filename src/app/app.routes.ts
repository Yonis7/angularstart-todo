import { Routes } from '@angular/router';

// This creates our navigation map (routes)
// Like a GPS system for our app - it tells Angular which page to show based on the URL
export const routes: Routes = [
  {
    // When the URL has '/home' at the end
    // Example: www.ourapp.com/home
    path: 'home',
    // This loads the home page component
    // It's like telling Angular "when someone wants to go home, show them this page"
    // The 'import' means it only loads when needed (lazy loading) to make our app faster
    loadComponent: () => import('./home/home.component').then((m) => m.default),
  },
  {
    // When the URL looks like '/detail/123'
    // The ':id' part means it can be any number or text
    // Example: www.ourapp.com/detail/1 or www.ourapp.com/detail/abc
    path: 'detail/:id',
    // This loads the detail page component
    // It's like saying "when someone wants to see details, show them this page"
    loadComponent: () =>
      import('./detail/detail.component').then((m) => m.default),
  },
  {
    // When there's nothing in the URL (just the base website address)
    // Example: www.ourapp.com
    path: '',
    // This tells Angular to automatically go to the home page
    // Like having a default page when someone visits our website
    redirectTo: 'home',
    // 'full' means the URL must be exactly empty to redirect
    pathMatch: 'full',
  },
];
