import { Component } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../shared/note.model';
import { Router } from '@angular/router';

@Component({
  selector: 'note-king-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {

  notes: Note[] =[];

  constructor(private noteService: NotesService, private routerService: Router){
    
    this.noteService.getNotes().subscribe((notes: Note[]) => {
      this.notes = notes;
    })
  }

  selectNote(note: Note){
    return this.noteService.noteSelected.next(note)
  }

  noteEdit(note: Note){
    this.routerService.navigate(['/edit', note.id])
  }

  noteDelete(note: Note) {
    this.noteService.deleteNote(note);
  }

}
