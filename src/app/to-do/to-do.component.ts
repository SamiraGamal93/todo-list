import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
Title:string= "TO Do List Appliaction";
imageLink:string="https://cdn-icons-png.flaticon.com/512/6999/6999609.png";
tasks:string[]=[];
newTask:string="";
addTask ()
  {
  if (this.newTask.trim() !==null)
    {
      this.tasks.push (this.newTask);
      this.newTask="";
    }
    console.log(this.newTask);

  }
}
