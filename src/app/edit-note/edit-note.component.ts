import { Component } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../shared/note.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent {

notes!: Note[];
note$: Observable<Note | undefined>; 
noteTitle: string | undefined;
noteContent: string | undefined;
noteID: string | undefined;

 constructor(private noteService: NotesService,
  private router: Router){
    this.noteService.getNotes().subscribe((notes: Note[]) => {
      this.notes = notes;
    })
  this.note$ = noteService.noteSelected;
  this.note$.subscribe(noteSelected => {
    if(noteSelected){
      this.noteTitle = noteSelected.title;
      this.noteContent = noteSelected.content;
      this.noteID = noteSelected.id;
    }
  })
 }

 updateNote(): void {
  if(this.noteTitle && this.noteContent && this.noteID){
    const updatedNote = new Note(this.noteID, this.noteTitle, this.noteContent);
    this.noteService.updateNote(updatedNote);
    this.router.navigate(['/home'])
  }
 }

}
