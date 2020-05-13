import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makePicPopup(pic: any): string {
    
    if (pic.typeId < 3){ 
        return `` +
          `<div><h1><u>Place: ${pic.place} (${pic.country}) - ${pic.date }</h1></u></div>` +
          `<div><img src="/assets/pictures/${pic.name}.jpg"> </div>`+
          `<br><div>${pic.info} </div>`
    }else{
          return `` +
          `<div>Place: ${pic.place} (${pic.country}) - ${pic.date }</div><br>` +
          `<p><center><video  poster="/assets/media/${pic.name}/${pic.name}.jpg" width="480" height="360" controls="autoplay"><source src="/assets/media/${pic.name}/${pic.name}.mp4" type="video/mp4"><source src="/assets/media/${pic.name}/${pic.name}.ogg" type="video/ogg"></center>`+
          `<br><div>${pic.info} </div>`
    }
  }
}