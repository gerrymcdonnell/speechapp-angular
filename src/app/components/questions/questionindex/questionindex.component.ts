import { Component, OnInit } from '@angular/core';
import {Question} from '../../../models/question';

import {QuestionsService} from '../../../services/questions.service';

@Component({
  selector: 'app-questionindex',
  templateUrl: './questionindex.component.html',
  styleUrls: ['./questionindex.component.css']
})
export class QuestionindexComponent implements OnInit {

  //properties
  questions:Question[];


  //default constrctor
  //Service must be added to component constructor
  constructor(public dataService:QuestionsService){
      
      //ex1
      //console.log(words);
      
      //use speechapp data service
      this.dataService.getQuestions().subscribe(questions=>{
          this.questions=questions;
          console.log(this.questions);
      })

  }//end constructor

  ngOnInit() {
  }

}
