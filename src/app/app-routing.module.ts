import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { HomeComponent } from './pages/home/home.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {path:"",component: HomeComponent,pathMatch: 'full'},
  {path:"sobre",component: SobreComponent, children: [
    {path:"victor",component: SobreComponent},
  ]},
  {path:"dashboard",loadChildren:() => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path:"404",component: PageErrorComponent},
  {path:"**",redirectTo:"404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
