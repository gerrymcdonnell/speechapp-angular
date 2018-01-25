import { Component, OnInit } from '@angular/core';

import {Question} from '../../../models/question';

import {QuestionsService} from '../../../services/questions.service';
import {Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  //works
  id:number;
  question:Question=new Object;
  questions:any[];

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
    // Get ID
    this.id = this.route.snapshot.params['id'];
    
    // Get word with the id we pulled rom url 
    this.dataService.getQuestion(this.id).subscribe(q => {
      
      console.log("edit word "+q.question);      
      
      this.question = q;     
      
    });
  }

  onSubmit(isEdit){
        
    console.log("isEdit=" +isEdit);

    if(isEdit){
        //edit user      

        this.dataService.update(this.question).subscribe(question=>{
            
            console.log("calling updateQuestion()");

            //look for the one we edited and add new one back
            for(let i=0;i<this.questions.length;i++){
                if(this.questions[i].id==this.question.id){
                    //splice removes elements from an array
                    this.questions.splice(i,1);
                    console.log("doing splice");
                }
            }

            this.questions.unshift(this.question);
            
            //doest work
            //this.flashMessagesService.show('Client updated', {cssClass:'alert-success', timeout: 4000});
  
            this.router.navigate(['/question-index/']);

            
        })
    }
    else{
        //its an add user
    }  
}




}
