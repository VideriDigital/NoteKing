import { EventEmitter, Injectable } from '@angular/core';
import { Note } from './shared/note.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  noteSelected = new BehaviorSubject<Note | undefined>(undefined);

  notesUpdated = new BehaviorSubject<Note[] | undefined>(undefined);

  private notes: Note[] = [
    new Note(1, 'First Note', 'This is the content of my first note, how exciting!'),
    new Note(2, 'Second Note', 'This is the content of my second note, how exciting!'),
    new Note(3, 'Last Note', 'This is the content of my third note, how exciting!')
  ];

  constructor() {

   }

   getNotes() {
    return this.notes.slice();
   }

   updateNote(note: Note){
    const index = this.notes.findIndex(n => n.id === note.id);
    if(index !== -1) {

      const updatedNotes = [...this.notes]
      updatedNotes[index] = note;

      this.notes = updatedNotes;
    }
   }

   deleteNote(note: Note) {
    const index = this.notes.findIndex(n => n.id === note.id);
    if(index !== -1){
      this.notes.splice(index, 1);
      this.notesUpdated.next(this.notes)
    }
   }


}
