import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
})
export class AppComponent {}
