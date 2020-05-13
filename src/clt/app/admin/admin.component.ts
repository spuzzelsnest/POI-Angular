import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    
    selectedFile: File = null;
    
    constructor(private http: HttpClient) {}
    
    
    onFileSelected(event){
        console.log(event);
        this.selectedFile = <File>event.target.files[0];
    }
    
    onUpload(){
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('assets/images', fd, {
            reportProgress: true,
            observe:'events'
            
        })
            .subscribe(event => {
                if (event.type == HttpEventType.UploadProgress){
                    console.log('upload in progress: ' + event.loaded / event.total);
                }
            
            console.log(event);
        });
    }


  ngOnInit(): void {
  }

}
