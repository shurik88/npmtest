import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { Headers, Http, RequestOptions } from '@angular/http'
import { LoginService } from '@shurik88/auth';
import { AlertService } from '@shurik88/alert';
import { HelloService } from '@shurik88/hello';
import { ApiClient } from '../apiClient.service'
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'home',
    templateUrl: `../Templates/home.html`,
    providers: [Title, HelloService, AlertService]
})
export class HomeComponent implements OnInit {
    loggedIn: boolean;
    isAdmin: boolean;

    classes: number[] = [];
    surveyId: string;

    disciplineId = 'f1121f02-0856-4f7e-0321-08d51ab200ed';

    isLoading: boolean;


    constructor(private router: Router,
        private titleService: Title,
        private http: Http,
        private loginService: LoginService,
        private helloService: HelloService,
        private alertService: AlertService) {
        this.router = router;
    }

    greeting: string = '';

    ngOnInit() {
        this.isLoading = false;
        this.titleService.setTitle('Главная страница');
    }

    public alertGreeting(): void{
        this.alertService.alert(this.helloService.Greeting('sir'));
    }

    public setGreeting(): void {
        this.greeting = this.helloService.Greeting('sir');
    }

    private getHeaders(): RequestOptions {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({ headers: headers });
        return requestOptions;
    }

}