import { Component, OnInit } from '@angular/core';
import { EventsService} from '../services/events.service';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any;

  constructor( private _service: EventsService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll () {
    this._service.getAll ()
      .subscribe((res:any) => {
        this.events = res;
        console.log(res);
      },
      (error: any) => {
        console.log(error);
      })
  }

}

