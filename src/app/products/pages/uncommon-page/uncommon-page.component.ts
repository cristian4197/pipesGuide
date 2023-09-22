import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss']
})
export class UncommonPageComponent {
  // i18n Select, trabaja en case a una condicion
  public name:string = 'Cristian';
  public gender:'male' |'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  changeClient(): void {
    this.name = 'Angie',
    this.gender = 'female';
  }

    // i18nPlural
    public clients:string[] = [
      'Maria','Pedro','Angie', 'Cristian','Mariell','Humberto'
    ];
    public clientsMap = {
      '=0': 'no tenemos ningun cliente esperando',
      '=1': 'tenemos 1 cliente esperando',
      '=2': 'tenemos 2 clientes esperando',
      'other': 'tenemos # clientes esperando'
    };

    deleteClient(): void {
      this.clients.shift();
    }

    // KeyValue Pipe
    public person = {
      name: 'Angie',
      age: '19',
      address: 'Psj 1.ro enero 328'
    };

    // Async Pipe
    public myObservableTimer:Observable<number> = interval(2000).pipe(
      tap( value => {
        console.log('tap:', value);
      })
    );

    public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve('Tenemos data en la promesa');
      }, 3500);
    } );
}
