import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit{
@Output() featureSelected = new EventEmitter<string>();

    constructor(private router: Router,
            private route: ActivatedRoute) {
    }
    
    ngOnInit() {
//        this.recipes = this.recipeService.getRecipes();
      }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  
  onManageCourse() {
      this.router.navigate(['managecourse'], {relativeTo: this.route});
  }
  onManageStudent() {
      this.router.navigate(['managestudent'], {relativeTo: this.route});
  }

}
