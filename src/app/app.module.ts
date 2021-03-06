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
import {QuizzesService} from './services/quizzes.service';

import {QuestionsService} from'./services/questions.service';
import { EditQuestionComponent } from './components/questions/edit-question/edit-question.component';
import { AddQuestionComponent } from './components/questions/add-question/add-question.component';
import { DisplayQuestionComponent } from './components/questions/display-question/display-question.component';
//Quiz
import { QuizzesIndexComponent } from './components/quizzes/quizzes-index/quizzes-index.component';
import { DisplayQuizComponent } from './components/quizzes/display-quiz/display-quiz.component';
import { RandomquestionComponent } from './components/questions/randomquestion/randomquestion.component';



//create routes for app
const appRoutes:Routes=[
  /*{path:'',component:WordindexComponent},*/

  {path:'',component:QuestionindexComponent},
  {path:'word-index',component:WordindexComponent},
  {path:'add-word',component:AddWordComponent},
  {path:'edit-word/:id',component:EditwordComponent} ,

  {path:'question-index',component:QuestionindexComponent},
  {path:'edit-question/:id',component:EditQuestionComponent} ,
  {path:'add-question',component:AddQuestionComponent} ,
  {path:'display-question/:id',component:DisplayQuestionComponent} ,
  {path:'random-question',component:RandomquestionComponent} ,

  {path:'quizzes-index',component:QuizzesIndexComponent},
  {path:'display-quiz/:id',component:DisplayQuizComponent} ,
  {path:'**',component:PageNotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    WordindexComponent,
    NavbarComponent,PageNotFoundComponent,
    AddWordComponent,EditwordComponent, 
    QuestionindexComponent, EditQuestionComponent, AddQuestionComponent, DisplayQuestionComponent, QuizzesIndexComponent, DisplayQuizComponent, RandomquestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    
    /*FlashMessagesModule.forRoot()*/
  ],
  providers: [SpeechAppService,QuestionsService,QuizzesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
