import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {
  DataStateChangeEventArgs,
  PageSettingsModel,
} from '@syncfusion/ej2-angular-grids';
import { BasePageComponent } from '../../base-page';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../interfaces/app-state';
import { HttpService } from '../../../services/http/http.service';
import { Observable } from 'rxjs';
import { ProductStoreService } from './product-store.service';

@Component({
  selector: 'app-inline-edit',

  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss'],
})
export class InlineEditComponent
  extends BasePageComponent
  implements OnInit, OnDestroy {
  public pageSettings: PageSettingsModel = { pageSize: 4 };
  public products: Observable<DataStateChangeEventArgs>;

  // ---------------------------- PAGE ROUTING SERVICES ------------------------------------------------
  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    public productservice: ProductStoreService
  ) {
    super(store, httpSv);
    this.products = productservice;
    this.pageData = {
      title: 'Inline Edit',
      loaded: true,
      breadcrumbs: [
        {
          title: 'COCIS',
          route: 'default-dashboard',
        },

        {
          title: 'Inline-Edit',
        },
      ],
    };
  }
  // ------------------------- END -------------------------------------------------------------->
  ngOnInit(): void {
    const state: any = { skip: 0, take: 5 };
    this.productservice.execute(state);
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
