import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Basic
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components
import { SampleListComponent } from './components/sample/sample-list/sample-list.component';

// Services
import { SampleService } from 'src/app/services/sample/sample.service';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    SampleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,

    // Angular Material
    MatButtonModule,
    MatInputModule,

    HttpClientModule,

  ],
  providers: [
    SampleService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
