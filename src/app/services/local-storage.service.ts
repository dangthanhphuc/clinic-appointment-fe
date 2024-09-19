import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  localStorage?: Storage;

  constructor(
    @Inject(DOCUMENT) private document : Document
  ) { 
    this.localStorage = this.document.defaultView?.localStorage;
  }

  saveValueToLocalStorage(key: string, value: any) : void {
    try {
      const valueJSON = JSON.stringify(value);
      this.localStorage?.setItem(key, valueJSON);
    }catch(errors : any){
      console.error(errors);
    }
  }

  getValueFromLocalStorage(key : string) : any | null {
    try {
      const valueJson = this.localStorage?.getItem(key);

      if(valueJson == null || valueJson == undefined){
        return null;
      } 

      // Parse userResponseJSON to object
      const value = JSON.parse(valueJson);
      return value;


    } catch (errors : any){
      console.error('Error retrieving user response from local storage:' + errors);
      return null;
    }
  }

  removeValueFromLocalStorage (key : string) : void{
    try {
      this.localStorage?.removeItem(key);
    }
    catch (errors : any) {
      console.error('Error removing user data from local storage: ' + errors);
    }
  }
}
