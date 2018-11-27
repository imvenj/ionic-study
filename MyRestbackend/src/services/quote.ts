import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable() 

export class QuoteService {
    private http
    public data

    constructor(http: HttpClient) {
        this.http = http
    }
    getQuotes() {
        this.http
            .get("http://127.0.0.1:8080/test.json")
            .subscribe(res => {
                this.data = res;
                console.log(this.data, this.http)
            }, error => {
                console.log(error)
            })
    }
}
