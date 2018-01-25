import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//words
import { WordindexComponent } from './components/words/wordindex/wordindex.component';
import{AddWordComponent} from './components/words/add-word/add-word.component';
import{EditwordComponent} from './components/words/edit-word/edit-word.component';

import{NavbarComponent} from './components/navbar/navbar.component';
import{PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

//questions
import{QuestionindexComponent} from './components/questions/questionindex/questionindex.component';


import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';

//main service to get data via REST
import { SpeechAppService } from './services/speechapp.service';

import {QuestionsService} from'./services/questions.service';
import { EditQuestionComponent } from './components/questions/edit-question/edit-question.component';


//create routes for app
const appRoutes:Routes=[
  {path:'',component:WordindexComponent},
  {path:'word-index',component:WordindexComponent},
  {path:'add-word',component:AddWordComponent},
  {path:'edit-word/:id',component:EditwordComponent} ,

  {path:'question-index',component:QuestionindexComponent},
  {path:'edit-question/:id',component:EditQuestionComponent} ,

  {path:'**',component:PageNotFoundComponent}
  /*{path:'',component:SandboxComponent2}*/
  /*{path:'about',component:AboutComponent}*/
]

@NgModule({
  declarations: [
    AppComponent,
    WordindexComponent,
    NavbarComponent,PageNotFoundComponent,
    AddWordComponent,EditwordComponent, QuestionindexComponent, EditQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    
    /*FlashMessagesModule.forRoot()*/
  ],
  providers: [SpeechAppService,QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
