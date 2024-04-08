import { Component } from '@angular/core';
import { Note } from './shared/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes-king';
  note !: Note;
}
