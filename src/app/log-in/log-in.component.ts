import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Ilogin } from '../login';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  public loginInfo: Ilogin[] = [];

  constructor(private apiS: ApiService){}

  ngOnInit(): void{
    this.apiS.getData().subscribe(data => this.loginInfo = data);
  }
  
}
