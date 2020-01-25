import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleListComponent } from 'src/app/components/sample/sample-list/sample-list.component';
import { SampleRegComponent } from 'src/app/components/sample/sample-reg/sample-reg.component';

const routes: Routes = [
  //root path
  {
    path: '',
    component: SampleListComponent,
  },
  // 登録画面
  {
    path: 'reg',
    component: SampleRegComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
