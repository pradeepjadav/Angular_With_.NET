import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isMapIterator } from 'node:util/types';
import { MyFirstComponet } from './my-first-componet/my-first-componet';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyFirstComponet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-angular-app');
}
