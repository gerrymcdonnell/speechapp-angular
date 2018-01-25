import { Component, OnInit } from '@angular/core';

import { Question } from '../../../models/question';
import { QuestionsService } from '../../../services/questions.service';
import {Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  question:Question=new Object();
  questions:any[];

  constructor(
    //add as dependancy
    public router:Router,
    public dataService:QuestionsService,
    public route:ActivatedRoute,
  ) { }

  ngOnInit() {
    //use speechapp data service
    this.dataService.getQuestions().subscribe(questions=>{
        this.questions=questions;
        console.log(this.questions);
    })
  }


  onSubmit({value, valid}:{value:Question, valid:boolean}){
    
    /*if(!valid){      
      this.router.navigate(['add-word']);
    } else {
      // Add new client

      console.log("add new word");


      this.dataService.addWord(value);
      this.router.navigate(['word-list/']);*/


      //its an add user
      this.dataService.addQuestion(this.question).subscribe(question=>{
        this.questions.unshift();
        console.log(question);

        this.router.navigate(['question-index/']);
    })

    
  }

}
