import { Component, OnInit } from '@angular/core';

import {Question} from '../../../models/question';
import {Quiz} from '../../../models/quiz';

import {QuizzesService} from '../../../services/quizzes.service';
import {Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.css']
})
export class DisplayQuizComponent implements OnInit {

    //works
    id:number;
    quiz:Quiz=new Object;
    //words:any[];
  
    constructor(
      public dataService:QuizzesService,
      public router:Router,
      public route:ActivatedRoute
  
    ) {
          //cross origin problem may occur due to backend i.e cakephp config
          
          //load all the words into an array
          /*this.dataService.getQuizzes().subscribe(words=>{
              this.words=words;
              console.log(words);
          })*/
     }
  
    ngOnInit() {
      // Get ID
      this.id = this.route.snapshot.params['id'];
      
      // Get word with the id we pulled rom url 
      this.dataService.getQuiz(this.id).subscribe(quiz => {
        
        console.log("quiz title "+quiz.quiz.title);        
        this.quiz = quiz.quiz;     
        
      });
    }


}
