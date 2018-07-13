import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    name: String;
    email: String;
    message: String;
    isSending: Boolean = false;
    msg: String;

  constructor(private _mail: EventsService, private router: Router) { }

  ngOnInit() {
  }

  sendMail () {
    const body = '?name=' + this.name + '&email=' + this.email + '&message=' + this.message;
    this.isSending = true;
    this._mail.sendMail(body)
      .subscribe((res: any) => {
        if (res) {
          alert('Message Sent');
          this.router.navigate(['/home']);
          console.log(res);
        }
      }, (err: any) => {
        alert('Sending Failed');
      });
  }
}
