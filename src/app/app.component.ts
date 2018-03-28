import { Component, OnInit } from '@angular/core';
//import filestack from 'filestack-js';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    allUrls: String[];
    metadata = [];
    arrayLength: Number = 0;
    refreshUrls: Boolean = true;
    apiKey = 'A9CFNM6bKS2qOfMvu8SSQz';

    constructor(private http: HttpClient) {

    }

    getposts(metadataUrl) {
        return this.http.get(metadataUrl);
    }

    processArray() {
        this.allUrls = localStorage.getItem("masterUrl").split('#');
        this.allUrls.splice(this.allUrls.length - 1, 1);
        if (this.arrayLength != this.allUrls.length) {
            this.arrayLength = this.allUrls.length;
            this.refreshUrls = !this.refreshUrls;
            this.refreshUrls = !this.refreshUrls;
        }
        for (let i = 0; i < this.allUrls.length; i++) {
            let handle = this.allUrls[i].split('/')[4];
            let metadataUrl = "https://www.filestackapi.com/api/file/" + handle + "/metadata";
            this.getposts(metadataUrl).subscribe((meta) => {
                this.metadata.push(meta);
                console.log(meta);
                this.allUrls[i] += "#" + meta['filename'] + "#" + meta['size'];
                console.log(this.allUrls[i]);
            })
        }
    }

    deleteCache() {
        localStorage.setItem("masterUrl", "");
        this.processArray();
    }

    openFilestack() {
        /*
        const client = filestack.init(this.apiKey);
        client.pick({
            accept: ['.pdf', '.tiff'],
            maxFiles: 30
        }).then(function (result) {
            const fileUrl = result.filesUploaded[0].url;
            let urlAry = fileUrl.split('/');
            let handle = urlAry[urlAry.length - 1];
            let transformUrl = "https://process.filestackapi.com/output=format:png/" + handle;
            let masterUrl = localStorage.getItem("masterUrl") + transformUrl + '#';
            localStorage.setItem("masterUrl", masterUrl);
        }).then(() => {
            this.processArray();
        });
        */
    }

    ngOnInit() {
        if (localStorage.getItem("masterUrl") == undefined) {
            localStorage.setItem("masterUrl", "");
        }
        else {
            //this.processArray();
        }
    }
}
