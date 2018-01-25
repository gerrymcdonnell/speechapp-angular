//vid 35 simple service

import {Injectable} from '@angular/core';

//import obserable
import {Observable} from 'rxjs/Observable';

//import map
import 'rxjs/add/operator/map';

import {Http} from '@angular/http';

import {Word} from '../models/Word';

@Injectable()
export class SpeechAppService{
    

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

    //http://localhost/cake3restapi/words.json
    //word index
    /*
    help from;
    https://stackoverflow.com/questions/34413732/add-http-basic-authentication-to-this-http-get-in-angularjs
    */
    getWords(){
        //build auth headers       
        var headers=this.buildAuthHeader();

         return this.http.get('http://localhost/cake3restapi/words.json',{headers: headers})
         .map(res=>res.json());        
    }

    getWord(id:number){
        
        var headers=this.buildAuthHeader();

        return this.http.get('http://localhost/cake3restapi/words/'+id+'.json',{headers: headers})
        .map(res=>res.json());
    }


    //use component 3
    //added sJSON.stringify didnt seem to help
    updateWord(word:Word){        

        console.log("doing update via PUT request");
        console.log("edited word is"+word.wordtitle);
        console.log(word);

        return this.http.put('http://localhost:80/cake3restapi/words/'+word.id+'.json', word)
            .map(res => console.log("updateWord Result:"+res.json()));
    }


    //broke
    addWord(word:Word){
        
        console.log("doing Add via POST request");

        console.log(word);
        
        return this.http.post('http://localhost:80/cake3restapi/words.json',word)
        .map(res=>console.log("addword"+res.json()));
    }

    //works
    deleteWord(id){
        return this.http.delete('http://localhost:80/cake3restapi/words/'+id+'.json')
        .map(res=>res.json());
    }




    
    
}