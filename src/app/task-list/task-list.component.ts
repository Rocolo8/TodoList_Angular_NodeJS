import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [
    new Task("Go gym"),
    new Task("Study"),
    new Task("Meditate")
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    var date: Date = new Date(this.route.snapshot.params['date']);
    console.log(date);
  }

  add(newTask: string) {
    this.tasks.push(new Task(newTask))
  }

  remove(existingTask: Task) {
    var userConfirmed = confirm(`Are you sure that you want to remove the following task? \n "${existingTask.title}"`)
    if (userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask)
    }
  }
}

class Task {
  constructor(public title: string) {

  }
  isDone = false

  toggleIsDone() {
    this.isDone = !this.isDone
  }
}

