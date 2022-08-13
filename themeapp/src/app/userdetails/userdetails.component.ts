import { Component, OnInit ,Input} from '@angular/core';
import { User} from "../user";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() user?:User;
}
