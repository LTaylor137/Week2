import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input()
  image: string = "Image";
  @Input()
  title: string = "Title";
  @Input()
  name: string = "Name";
  @Input()
  address: string = "Address";

  constructor() { }

  ngOnInit(): void {
  }

  onComponentClick(){

    
  }


}
