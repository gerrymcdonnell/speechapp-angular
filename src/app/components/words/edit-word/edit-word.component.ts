import { Component, OnInit } from '@angular/core';

//import word
import {Word} from '../../../models/word';
import {SpeechAppService} from '../../../services/speechapp.service';

import {Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editword',
  templateUrl: './edit-word.component.html'
})
export class EditwordComponent implements OnInit {

  //works
  id:number;
  word:Word=new Object;
  words:any[];

  constructor(
    public dataService:SpeechAppService,
    public router:Router,
    public route:ActivatedRoute

  ) {
        //cross origin problem may occur due to backend i.e cakephp config
        
        //load all the words into an array
        this.dataService.getWords().subscribe(words=>{
            this.words=words;
            console.log(words);
        })
   }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];
    
    // Get word with the id we pulled rom url 
    this.dataService.getWord(this.id).subscribe(w => {
      
      console.log("edit word "+w.wordtitle);      
      
      this.word = w;     
      
    });
  }

  onSubmit(isEdit){
        
    console.log("isEdit=" +isEdit);

    if(isEdit){
        //edit user      

        this.dataService.updateWord(this.word).subscribe(user=>{
            
            console.log("calling updateUser()");

            //look for the one we edited and add new one back
            for(let i=0;i<this.words.length;i++){
                if(this.words[i].id==this.word.id){
                    //splice removes elements from an array
                    this.words.splice(i,1);
                    console.log("doing splice");
                }
            }

            this.words.unshift(this.word);
            
            //doest work
            //this.flashMessagesService.show('Client updated', {cssClass:'alert-success', timeout: 4000});
  
            this.router.navigate(['/word-index/']);

            
        })
    }
    else{
        //its an add user
    }  
}

}
