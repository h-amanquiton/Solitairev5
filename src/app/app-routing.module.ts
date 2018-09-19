import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/game', pathMatch: 'full' },
    {path: 'game', component: AppComponent }
];

  

@NgModule({
  
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]

   
})
export class AppRoutingModule { }

// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes', component: HeroesComponent }
// ];