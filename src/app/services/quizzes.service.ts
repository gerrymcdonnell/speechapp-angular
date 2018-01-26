import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {Question} from '../models/question';
//import obserable
import {Observable} from 'rxjs/Observable';

@Injectable()
export class QuizzesService {

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



  getQuizzes(){
    //build auth headers       
    var headers=this.buildAuthHeader();

     return this.http.get('http://localhost/cake3restapi/quizzes.json',{headers: headers})
     .map(res=>res.json());        
  }


  getQuiz(id:number){        
    var headers=this.buildAuthHeader();

    return this.http.get('http://localhost/cake3restapi/quizzes/'+id+'.json',{headers: headers})
    .map(res=>res.json());
  }


  

}
