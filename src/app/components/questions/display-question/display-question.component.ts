import { Component, OnInit } from '@angular/core';

import {Question} from '../../../models/question';
import {QuestionAnswer} from '../../../models/questionanswer';

import {QuestionsService} from '../../../services/questions.service';
import {Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-display-question',
  templateUrl: './display-question.component.html',
  styleUrls: ['./display-question.component.css']
})
export class DisplayQuestionComponent implements OnInit {

  //works
  id:number;
  question:Question=new Object;
  questions:any[];

  questionAnswer:QuestionAnswer={};

  constructor(
    public dataService:QuestionsService,
    public router:Router,
    public route:ActivatedRoute

  ) {
        //cross origin problem may occur due to backend i.e cakephp config
        
        //load all the questions into an array
        this.dataService.getQuestions().subscribe(questions=>{
            this.questions=questions;
            console.log(questions);
        })
   }

  ngOnInit() {
    // Get ID which is the question id
    this.id = this.route.snapshot.params['id'];
    
    // Get word with the id we pulled rom url 
    this.dataService.getQuestion(this.id).subscribe(q => {
      
      console.log("view question "+q.question);    
      
      this.question = q;     
      
    });
  }


  /*** 
   * TESTING - error not being added to DB
   * answer a question by creating a record for questions-answers
   */
  onAnswerClick(question_id:number,selectedanswer:number){
    
    console.log('selectedanswer= '+selectedanswer);

    
    //test data ignoring form input
    this.questionAnswer.user_id=1;
    this.questionAnswer.question_id=question_id;
    this.questionAnswer.answerindex=selectedanswer;

 

    //console.log("answerquestion: "+this.questionAnswer); 

    this.dataService.addAnswerQuestion(this.questionAnswer).subscribe(q => {
      
      console.log("answerquestion: "+q); 
      
      //this.question = q;     
      
    });

  }

}
