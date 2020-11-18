import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const products: ProductModel[] = [
      {
        OrderID: 10248,
        CustomerID: 'VINET',
        EmployeeID: 5,
        OrderDate: new Date(8364186e5),
        ShipName: 'Vins et alcools Chevalier',
        ShipCity: 'Reims',
        ShipAddress: '59 rue de l Abbaye',
        ShipRegion: 'CJ',
        ShipPostalCode: '51100',
        ShipCountry: 'France',
        Freight: 32.38,
        Verified: !0,
      },
      {
        OrderID: 10249,
        CustomerID: 'TOMSP',
        EmployeeID: 6,
        OrderDate: new Date(836505e6),
        ShipName: 'Toms Spezialitäten',
        ShipCity: 'Münster',
        ShipAddress: 'Luisenstr. 48',
        ShipRegion: 'CJ',
        ShipPostalCode: '44087',
        ShipCountry: 'Germany',
        Freight: 11.61,
        Verified: !1,
      },
    ];
    return { products };
  }
}
