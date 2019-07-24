import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../services';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit,OnDestroy {

  private subscription: Subscription;
  message: any;


  constructor(private alertservice:AlertService) { }

  ngOnInit() {
    this.subscription = this.alertservice.getAlert()
    .subscribe(message => {
        switch (message && message.type) {
            case 'success':
                message.cssClass = 'alert alert-success';
                break;
            case 'error':
                message.cssClass = 'alert alert-danger';
                break;
        }

        this.message = message;
    });


  }

  ngOnDestroy(){

    this.subscription.unsubscribe();
  }

}
