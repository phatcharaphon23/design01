import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../__service/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(
    private httpService: HttpService
  ) {}
  users: any;
  page: number = 1;
  pages: number = 0;
  ifFirst: boolean = false;
  ifEnd: boolean = false;
  showlist: boolean = true;
  addUser: boolean = false;
  editUser: boolean = false;
  changPassword: boolean = false;
  deleteUser: boolean = false;
  user: any;

  form = new FormGroup({
    page: new FormControl('', [Validators.minLength(1)]),
  });

  columnDisplay: string[] = ['id', 'jobspec', 'dpcgroup'];
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    let data = {
      page: this.page
    }
    this.httpService.POST('/api/list', data, 'json')
    .then((Response: any) => {
      this.users = Response.messege.info;
      console.log(Response);
    }).catch((error) => {
      console.log(error);
    });
  }
}
