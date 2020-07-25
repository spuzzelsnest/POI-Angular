import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makePicPopup(pic: any): string {
      
    const style = `<style>`+
          `.leaflet-popup-tip, .leaflet-popup-tip-container{display: none !important;}`+
          `.leaflet-popup{display:block !important;}`+
          `.leaflet-popup, .leaflet-zoom-animated, .leaflet-popup-content{ width:600px;height:500px;}`+
          `.leaflet-popup-content{ width:auto !important;padding:5px;border:1px solid grey;}`+
          `#featureInfo{overflow: auto;}`+
          `#title, #photo, #video{text-align:center;}`+
          `</style>`;
      
    
    if (pic.typeId < 3){ 
        return `` +
          style +
          `<div id="featureInfo"`+
          `<div id="title">${pic.title}</div>` +
          `<div id="photo"><img src="/assets/pictures/${pic.name}.jpg"><br>Place: ${pic.place} (${pic.country}) - ${pic.date }</div>`+
          `<div id="info"><hr><p>${pic.info}</p></div></div>`
    }else{
        return `` +
          style +
          `<div id="featureInfo"`+
          `<div id="title">${pic.title}</div>` +
          `<div id="video"><video poster="/assets/media/${pic.name}/${pic.name}.jpg" width="480" height="360" controls="autoplay"><source src="/assets/media/${pic.name}/${pic.name}.mp4" type="video/mp4"><source src="/assets/media/${pic.name}/${pic.name}.ogg" type="video/ogg"></video><br>Place: ${pic.place} (${pic.country}) - ${pic.date}</div>`+
          `<div id="info"><hr><p>${pic.info}</p></div></div>`
    }
  }
}