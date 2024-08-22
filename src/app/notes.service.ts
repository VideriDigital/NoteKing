import { EventEmitter, Injectable } from '@angular/core';
import { Note } from './shared/note.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  noteSelected = new BehaviorSubject<Note | undefined>(undefined);

  notesUpdated = new BehaviorSubject<Note[] | undefined>(undefined);

  private collectionName = 'notes'

  private notes: Note[] = [
    new Note(1, 'First Note', 'This is the content of my first note, how exciting!'),
    new Note(2, 'Second Note', 'This is the content of my second note, how exciting!'),
    new Note(3, 'Last Note', 'This is the content of my third note, how exciting!')
  ];

  constructor(private firestore: AngularFirestore) {}

  addNote(note: Note): Promise<any> {
    return this.firestore.collection(this.collectionName).add(note);
  }
  
  getNotes(): Observable<Note[]> {
    
    return this.firestore.collection(this.collectionName).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Note;
        const identity = a.payload.doc.id;
        return {identity, ...data};
      }))
    )
   }

   updateNote(note: Note){
      return this.firestore.collection(this.collectionName).doc(note.id.toString()).update(note)
   }

   deleteNote(note: Note): Promise<void> {
      return this.firestore.collection(this.collectionName).doc(note.id.toString()).delete()
    }


}
