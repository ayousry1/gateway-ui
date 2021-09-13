import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GatewayListComponent} from './gateway-list/gateway-list.component';

const routes: Routes = [
  {path: '', component: GatewayListComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
