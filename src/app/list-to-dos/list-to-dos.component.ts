import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {



  constructor() { 

  }
  todos=[
new myTodos(1,"Learn JavaScript",false,new Date()),
new myTodos(2,"Eat the cake",false,new Date()),
new myTodos(3,"Drink beer",false,new Date()),
new myTodos(4,"Seam to do the work",true,new Date())

  ];


  ngOnInit(): void {
  }

}

export class myTodos {

  constructor(
    private id:number,
    private description:string,
     private done:boolean,
     private myTime:Date){

  }
}
