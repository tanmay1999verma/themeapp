import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { UserComponent } from './user/user.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ListComponent } from './userlist/list.component';
import {MatListModule} from "@angular/material/list";
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ListComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
// )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

