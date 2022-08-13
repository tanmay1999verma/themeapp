import { Component, OnInit } from '@angular/core';
import {USERS} from "../mock-users";
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-userlist',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users = USERS;
  selectedUser?: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  this.getUsers();
}

  onSelect(user: User): void {
  this.selectedUser = user;
}
  getUsers(): void {
  this.userService.getUsers()
      .subscribe(users => this.users = users);
}

// delete(user: User): void {
//   this.users = this.users.filter(h => h !== user);
//   this.userService.deleteUser(user).subscribe();
// }

}
