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
import { MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SampleRegComponent } from './components/sample/sample-reg/sample-reg.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    SampleListComponent,
    SampleRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,

    // Angular Material
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,

    HttpClientModule,

  ],
  providers: [
    SampleService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
