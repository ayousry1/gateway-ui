import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GatewayListComponent} from './gateway-list/gateway-list.component';
import {GatewayDetailsComponent} from './gateway-details/gateway-details.component';

const routes: Routes = [
  {path: 'details', component: GatewayDetailsComponent},
  {path: '', component: GatewayListComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
