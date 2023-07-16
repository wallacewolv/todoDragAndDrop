import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
})
export class TarefaComponent implements OnInit {
  todo: Array<string> = ['Fazer comida', 'Lavar a louça', 'Lavar o carro'];
  progress: Array<string> = [];
  done: Array<string> = [];

  tarefa: string = '';

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  adicionarTarefa() {
    if (!this.tarefa.trim()) {
      return;
    }

    this.todo.push(this.tarefa);
    this.tarefa = '';
  }
}
