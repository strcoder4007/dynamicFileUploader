import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  afuConfig = {
    multiple: true,
    formatsAllowed: ".jpg,.png,.pdf",
    maxSize: "5",
    uploadAPI:  {
      url:"https://example-file-upload-api"
    },
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false
};

}
