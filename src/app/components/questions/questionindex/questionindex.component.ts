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
      
      //console.log(words);
      
      //use speechapp data service
      this.dataService.getQuestions().subscribe(questions=>{
          this.questions=questions;
          console.log(this.questions);
      })

  }//end constructor

  ngOnInit() {
  }

  //delete button click to remove word
  onDeleteClick(id){
    this.dataService.deleteQuestion(id).subscribe(res=>{
        console.log(res);
        
        //loop all and find the one we just deleted
        for(let i=0;i<this.questions.length;i++){
            if(this.questions[i].id==id){
                //splice removes elements from an array
                this.questions.splice(i,1);
            }
        }
    })
  }//

}
