import { Component, OnInit } from '@angular/core';



//clinet model
import { Word } from '../../../models/Word';
import { SpeechAppService } from '../../../services/speechapp.service';
import {Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html'
})
export class AddWordComponent implements OnInit {

  word={
    wordtitle:'',
    word_syllables:''
  }

  id:number;

  words:any[];

  constructor(
    //add as dependancy
    public router:Router,
    public dataService:SpeechAppService,
    public route:ActivatedRoute,
  ) { }

  ngOnInit() {
    //use speechapp data service
    this.dataService.getWords().subscribe(words=>{
        this.words=words;
        console.log(this.words);
    })
  }


  onSubmit({value, valid}:{value:Word, valid:boolean}){
    
    /*if(!valid){      
      this.router.navigate(['add-word']);
    } else {
      // Add new client

      console.log("add new word");


      this.dataService.addWord(value);
      this.router.navigate(['word-list/']);*/


      //its an add user
      this.dataService.addWord(this.word).subscribe(word=>{
        this.words.unshift();
        console.log(word);

        this.router.navigate(['word-index/']);
    })

    
  }

}








