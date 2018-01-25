import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

import {Question} from '../models/question';

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

    return this.http.get('http://localhost/cake3restapi/questions/view/'+id+'.json',{headers: headers})
    .map(res=>res.json());
  }
  

}
