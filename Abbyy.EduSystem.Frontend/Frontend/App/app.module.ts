import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './Components/app.component';
import { ToolbarComponent } from './Components/toolbar.component';
import { HomeComponent } from './Components/home.component';

import { AppRoutingModule } from './appRouting.module';
import { HttpModule, JsonpModule } from '@angular/http';

import { ApiClient } from './apiClient.service';


@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        ToolbarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule
    ],
    providers: [
        ApiClient
    ]
})
export class AppModule {
}