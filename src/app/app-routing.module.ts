import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ResultsComponent } from './results/results.component';
import { LoginGuard } from './guards/login.guard';
import { PlaygroundGuard } from './guards/playground.guard';
import { ResultsGuard } from './guards/results.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: RegistrationComponent, canActivate: [LoginGuard]},
  {path: 'playground', component: PlaygroundComponent, canActivate: [PlaygroundGuard] },
  {path: 'results', component: ResultsComponent, canActivate: [ResultsGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
