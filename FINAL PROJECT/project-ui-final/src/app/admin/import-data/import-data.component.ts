import { Component, OnInit } from '@angular/core';
import { UploadServiceService } from 'src/app/service/upload-service.service';
import bsCustomFileInput from 'bs-custom-file-input';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {
  file:File;
  isError:boolean=false;
  errorMessage:string="";
  constructor(private uploadService:UploadServiceService) { }

  ngOnInit() {

    bsCustomFileInput.init();
  }
  onFileChange(e){
    this.file=e.target.files[0];
  }

  uploadData(){
    const uploadSheetData=new FormData();
    uploadSheetData.append("stocksSheet",this.file,this.file.name);
    this.uploadService.uploadStocksSheet(uploadSheetData).subscribe(
      data=>{
        console.log("Uploaded");
      }
    );
    
  }

}
