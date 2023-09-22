import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {
    public nameLower:string = 'cristian';
    public nameUpper:string = 'CRISTIAN';
    public fullName :string= 'CrisTiAn SAnchEz';
    public customDate:Date = new Date();
}
