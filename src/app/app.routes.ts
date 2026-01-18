import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then(m => m.SettingsPageModule),
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      { path: '', redirectTo: '/tabs/home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () => import('./pages/tabs/home/home.page').then( m => m.HomePage)
      },
      {
        path: 'explore',
        loadComponent: () => import('./pages/tabs/explore/explore.page').then( m => m.ExplorePage)
      },
      {
        path: 'chats',
        loadComponent: () => import('./pages/tabs/chats/chats.page').then( m => m.ChatsPage)
      },
      {
        path: 'account',
        loadComponent: () => import('./pages/tabs/account/account.page').then( m => m.AccountPage)
      } ],
  },


];
