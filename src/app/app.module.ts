import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'
import { HighlightModule } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { NestedComponent } from './forms/nested/nested.component';
import { ZipValidatorDirective } from './forms/zip-validator.directive';

const routes: Routes = [
  { path: '', redirectTo: 'template', pathMatch: 'full' },
  { path: 'template', component: TemplateComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'nested', component: NestedComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FormsComponent,
    TemplateComponent,
    ReactiveComponent,
    NestedComponent,
    ZipValidatorDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HighlightModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
