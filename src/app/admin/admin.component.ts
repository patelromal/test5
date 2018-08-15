import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{

  loadedFeature = 'managecourse';

  onNavigate(feature: string) {
    console.log('feature:::::: ' + feature);
    this.loadedFeature = feature;
  }
  
}
