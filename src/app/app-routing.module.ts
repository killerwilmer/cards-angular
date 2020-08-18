import { CreateCardComponent } from './create-card/create-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichasListComponent } from './fichas-list/fichas-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'ficha', pathMatch: 'full' },
  { path: 'ficha', component: FichasListComponent },
  { path: 'add', component: CreateCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
