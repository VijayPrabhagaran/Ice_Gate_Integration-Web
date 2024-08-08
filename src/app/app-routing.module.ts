import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ICeGateListPageComponent } from './ice-gate-list-page/ice-gate-list-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'list', component: ICeGateListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
