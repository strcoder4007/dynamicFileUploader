import { Component, OnInit } from '@angular/core';
import filestack from 'filestack-js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';

    openFilestack() {
        const apiKey = 'A9CFNM6bKS2qOfMvu8SSQz';
        const client = filestack.init(apiKey);
        client.pick({
            accept: ['.pdf']
        }).then(function (result) {
            const fileUrl = result.filesUploaded[0].url;
            console.log(fileUrl);
        });
    }

    ngOnInit() {
    }
}
