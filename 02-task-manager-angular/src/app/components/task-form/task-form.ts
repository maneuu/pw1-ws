import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
})
export class TaskFormComponent implements OnChanges {
  @Input() isOpen = false;
  @Input() editingTask: Task | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Omit<Task, 'id'>>();

  form = {
    title: '',
    due: '',
    level: 'medium' as 'low' | 'medium' | 'high',
    desc: '',
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editingTask'] && this.editingTask) {
      this.form = {
        title: this.editingTask.title,
        due: this.editingTask.due,
        level: this.editingTask.level,
        desc: this.editingTask.desc,
      };
    } else if (changes['isOpen'] && this.isOpen && !this.editingTask) {
      this.resetForm();
    }
  }

  onSubmit(): void {
    if (!this.form.title.trim() || !this.form.due) return;

    this.save.emit({
      title: this.form.title,
      due: this.form.due,
      level: this.form.level,
      desc: this.form.desc,
      status: this.editingTask?.status || 'todo',
    });

    this.resetForm();
  }

  onClose(): void {
    this.close.emit();
    this.resetForm();
  }

  private resetForm(): void {
    this.form = { title: '', due: '', level: 'medium', desc: '' };
  }
}
