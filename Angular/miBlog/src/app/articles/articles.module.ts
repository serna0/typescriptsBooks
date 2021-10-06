import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { ArticlesComponent } from './articles.component';

/* Routes */
import { ArticlesRoutingModule } from './articles-routing.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ { path: '', component: ArticlesComponent} ];

@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    RouterModule.forChild( routes )
  ]
})
export class ArticlesModule { }
