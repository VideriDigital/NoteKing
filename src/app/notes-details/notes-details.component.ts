import { Component, Input } from '@angular/core';
import { Note } from '../shared/note.model';
import { NotesService } from '../notes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'note-king-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.css']
})
export class NotesDetailsComponent {

  notes: Note[];
  note$: Observable<Note | undefined>;

  constructor(private noteService: NotesService){
    this.notes = noteService.getNotes();
    this.note$ = noteService.noteSelected;
  }



}
