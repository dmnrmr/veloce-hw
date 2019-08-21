import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { PlaceholderLabelPipe } from './pipes/placeholder.pipe';
import { TagFormService } from './services/tag-form.service';
import { TagInputComponent } from './components/tag-input/tag-input.component';
import { TagStoreService } from './services/tag-store.service';
import { Task1Component } from './task1.component';
import { Task2Component } from './task2.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderLabelPipe,
    TagInputComponent,
    Task1Component,
    Task2Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    TagFormService,
    TagStoreService
  ]
})
export class AppModule {}
