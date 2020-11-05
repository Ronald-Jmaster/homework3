import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contactList = [{ title: 'Twitter', description: 'https://twitter.com/WordPress' }, { title: 'Facebook', description: 'https://facebook.com/facebook' }];

  constructor() { }

  ngOnInit(): void {
  }

}
