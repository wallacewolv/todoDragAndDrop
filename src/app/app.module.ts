import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';

@NgModule({
  declarations: [AppComponent, TarefaComponent],
  imports: [BrowserModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
