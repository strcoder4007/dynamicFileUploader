import { Component, OnInit } from '@angular/core';
import filestack from 'filestack-js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    allUrls: String[];
    arrayLength: Number = 0;
    refreshUrls: Boolean = true;

    openFilestack() {
        const apiKey = 'A9CFNM6bKS2qOfMvu8SSQz';
        const client = filestack.init(apiKey);
        client.pick({
            accept: ['.pdf'],
            maxFiles: 30
        }).then(function (result) {
            const fileUrl = result.filesUploaded[0].url;
            let urlAry = fileUrl.split('/');
            let uploadUrl = urlAry[urlAry.length-1];
            let transformUrl = "https://process.filestackapi.com/output=format:png/" + uploadUrl;
            let masterUrl = localStorage.getItem("masterUrl") + transformUrl + '#';
            localStorage.setItem("masterUrl", masterUrl);
        }).then(() => {
            this.allUrls = localStorage.getItem("masterUrl").split('#');
            this.allUrls.splice(this.allUrls.length-1, 1);
            if(this.arrayLength != this.allUrls.length) {
                this.arrayLength = this.allUrls.length;
                this.refreshUrls = !this.refreshUrls;
                this.refreshUrls = !this.refreshUrls;
            }
            console.log(this.allUrls);
        });
    }

    ngOnInit() {
        if(localStorage.getItem("masterUrl") == undefined) {
            localStorage.setItem("masterUrl", "");
        }
        else {
            this.allUrls = localStorage.getItem("masterUrl").split('#');
            this.allUrls.splice(this.allUrls.length-1, 1);
            if(this.arrayLength != this.allUrls.length) {
                this.arrayLength = this.allUrls.length;
                this.refreshUrls = !this.refreshUrls;
                this.refreshUrls = !this.refreshUrls;
            }
            console.log(localStorage.getItem("masterUrl"));
        }
    }
}
