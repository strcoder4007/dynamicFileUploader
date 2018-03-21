import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FileUploadModule } from 'angular-file-uploader';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
