import { Injectable, Component} from '@angular/core';
import {ToastaService, ToastaConfig, ToastOptions, ToastData} from 'ngx-toasta';
 
@Injectable({
  providedIn: 'root'
})
export class Alert1Service {

  constructor(private toastaService:ToastaService) { 

    this.toastaService.default('Hi there');

    var toastOptions:ToastOptions = {
            title: "My title",
            msg: "The message",
            showClose: true,
            timeout: 5000,
            theme: 'default',
            
            onAdd: (toast:ToastData) => {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function(toast:ToastData) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
    };

    // Add see all possible types in one shot
    this.toastaService.info(toastOptions);
    this.toastaService.success(toastOptions);
    this.toastaService.wait(toastOptions);
    this.toastaService.error(toastOptions);
    this.toastaService.warning(toastOptions);
  }


}
