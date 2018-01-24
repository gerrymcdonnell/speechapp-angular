import { Component, OnInit } from '@angular/core';

//import speech app service
import {SpeechAppService} from '../../../services/speechapp.service';
//import word
import {Word} from '../../../models/word'

@Component({
  selector: 'app-wordindex',
  templateUrl: './wordindex.component.html',
  styleUrls: ['./wordindex.component.css']
})
export class WordindexComponent implements OnInit {

  //properties
  words:any[];

  //empty array
  //data:any[]=[];


  //default constrctor
  //Service must be added to component constructor
  constructor(public dataService:SpeechAppService){
      
      //ex1
      //console.log(words);
      
      //use speechapp data service
      this.dataService.getWords().subscribe(words=>{
          this.words=words;
          console.log(this.words);
      })

  }//end constructor



  ngOnInit() {
  }


  //delete button click to remove word
  onDeleteClick(id){
      this.dataService.deleteWord(id).subscribe(res=>{
          console.log(res);
          
          //loop all users and find the one we just deleted
          for(let i=0;i<this.words.length;i++){
              if(this.words[i].id==id){
                  //splice removes elements from an array
                  this.words.splice(i,1);
              }
          }
      })
  }//



}



