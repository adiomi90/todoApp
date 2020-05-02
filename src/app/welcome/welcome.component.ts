import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
message:string ="some welcome message";
name:string ="";
  

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('message');
    this.name =this.route.snapshot.params['name'];
  }

}
