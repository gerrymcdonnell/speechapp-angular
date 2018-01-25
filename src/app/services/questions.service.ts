import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {Question} from '../models/question';
//import obserable
import {Observable} from 'rxjs/Observable';

@Injectable()
export class QuestionsService {

  constructor(public http:Http){        
  }

  //base64 encode
  buildHttpBasicAuthString(username,password){
    return 	 btoa(username + ":" + password);
  }
    
  //build header object
  buildAuthHeader(){
      var headers;        
      var auth = this.buildHttpBasicAuthString("gerry","ted");
      headers = {"Authorization": "Basic " + auth};
      return headers;
  }



  getQuestions(){
    //build auth headers       
    var headers=this.buildAuthHeader();

     return this.http.get('http://localhost/cake3restapi/questions.json',{headers: headers})
     .map(res=>res.json());        
  }


  getQuestion(id:number){
        
    var headers=this.buildAuthHeader();

    return this.http.get('http://localhost/cake3restapi/questions/'+id+'.json',{headers: headers})
    .map(res=>res.json());
  }


  update(question:Question){        

      console.log("doing update via PUT request");
      
      var headers=this.buildAuthHeader();

      return this.http.put('http://localhost:80/cake3restapi/questions/'+question.id+'.json', question,{headers: headers})
          .map(res => console.log("updateWord Result:"+res.json()));
  }
  

}
