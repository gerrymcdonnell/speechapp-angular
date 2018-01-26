import { Component, OnInit } from '@angular/core';

import {Question} from '../../../models/question';
import {Quiz} from '../../../models/quizzes';

import {QuizzesService} from '../../../services/quizzes.service';

@Component({
  selector: 'app-quizzes-index',
  templateUrl: './quizzes-index.component.html',
  styleUrls: ['./quizzes-index.component.css']
})
export class QuizzesIndexComponent implements OnInit {

  //properties
  quizzes:Quiz[];


  //default constrctor
  //Service must be added to component constructor
  constructor(public dataService:QuizzesService){
      
      //console.log(words);
      
      //use data service
      this.dataService.getQuizzes().subscribe(quizzes=>{
          this.quizzes=quizzes;
          console.log(this.quizzes);
      })

  }//end constructor

  ngOnInit() {
  }



}
