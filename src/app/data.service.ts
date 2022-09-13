import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData() {
    return [
      {
        "id": 1,
        "name": "Anton",
        "username": "anton_aks",
        "email": "anton_aks@gmail.com",
        "phone": "24241",
        "website": "github.com/AntonAks",
      },
      {
        "id": 2,
        "name": "Veronika",
        "username": "vrnak",
        "email": "vrnak@yandex.ru",
        "phone": "28460",
        "website": "github.com/verinteresting",
      },
      {
        "id": 3,
        "name": "Kirill",
        "username": "kirill_ant",
        "email": "kirill_ant@mail.ru",
        "phone": "28456",
        "website": "github.com/kirill112",
      },
      {
        "id": 4,
        "name": "Alexey",
        "username": "xell",
        "email": "alexell@gmail.com",
        "phone": "28457",
        "website": "github.com/xell",
      },
      {
        "id": 5,
        "name": "Gleb",
        "username": "brensc",
        "email": "brensc@gmail.com",
        "phone": "28458",
        "website": "github.com/brensc",
      },
      {
        "id": 6,
        "name": "Max",
        "username": "vermax",
        "email": "vermax@gmail.com",
        "phone": "28465",
        "website": "github.com/maxon",
      },
      {
        "id": 7,
        "name": "Sergey",
        "username": "pechenka",
        "email": "pechenk@mail.ru",
        "phone": "28463",
        "website": "github.com/pechenk",
      },
      {
        "id": 8,
        "name": "Margarita",
        "username": "margo_geo",
        "email": "shimanskayamargarita@gmail.com",
        "phone": "28463",
        "website": "github.com/margogeo",
      }
    ];
  }
}
