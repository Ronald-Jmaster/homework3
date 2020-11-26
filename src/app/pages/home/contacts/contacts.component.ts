import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contactList = [{ title: '500 345 242' },
  { title: 'office@kamsolution.pl' },
  { title: 'Twitter', description: 'https://twitter.com/WordPress' },
  { title: 'Facebook', description: 'https://facebook.com/facebook' },
  { title: 'Skype', description: 'kamsolution.pl' },];

  constructor() { }

  ngOnInit(): void {
  }

}
