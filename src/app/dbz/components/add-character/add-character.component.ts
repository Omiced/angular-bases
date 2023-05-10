import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  // creando un emisor para que el padre pueda obtener la data
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: "",
    name: "",
    power: 0
  };

  emitCharacter(  ):void{
    if(!this.character.name) return;
    //emitiendo el objeto
    this.onNewCharacter.emit(this.character);
    this.character = {id: "" ,name: "", power : 0};

  }
}
