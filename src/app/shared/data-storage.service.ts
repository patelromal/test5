import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Student } from '../model/student.model'
import { StudentService } from '../service/student.service'

@Injectable()
export class DataStorageService{
    
    constructor(private http: Http, private studentService: StudentService) {
	
    }
    
    storeDate(){
//        this.http.put('',this.studentService.);
    }

}
