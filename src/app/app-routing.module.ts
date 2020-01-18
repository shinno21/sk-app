import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleListComponent } from 'src/app/components/sample/sample-list/sample-list.component';


const routes: Routes = [
  {
    path: '',
    component: SampleListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
