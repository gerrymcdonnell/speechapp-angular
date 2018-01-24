import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WordindexComponent } from './components/words/wordindex/wordindex.component';


import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';

import { SpeechAppService } from './services/speechapp.service';

//create routes for app
const appRoutes:Routes=[
  {path:'',component:WordindexComponent},
  /*{path:'',component:SandboxComponent2}*/
  /*{path:'about',component:AboutComponent}*/
]

@NgModule({
  declarations: [
    AppComponent,
    WordindexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    /*FlashMessagesModule.forRoot()*/
  ],
  providers: [SpeechAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
