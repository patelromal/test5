import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Student } from '../model/student.model'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class StudentService{
    
    constructor(private http: Http){}
    onAddStudent(students: FormControl){
//        console.log('form----- ' + students.)
//        return this.http.post('https://student-http.firebaseapp.com', student)
    }
    
   
    
//    getStudents(){
//        return this.students;
//    }
    
//    addMenu(name: string, level: number){
//        
//    }
//    updateMenu(id: number, name: string, level){
//        
//    }
//    deleteMenu(id: number){
//        
//    }

}
