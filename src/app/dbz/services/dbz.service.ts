import { Injectable } from '@angular/core';

import { v4 as uuid} from "uuid";
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: "krilin",
      power: 1000,
    },
    {
      id: uuid(),
      name: "goku",
      power: 10000,
    },
    {
      id: uuid(),
      name: "vegeta",
      power: 7500
    }
  ];

  addCharacter( character: Character): void{
    const newCharacter = {...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index :number): void{
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(char => char.id !== id);
  }
}
