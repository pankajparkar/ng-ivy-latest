import { NgModule, ɵrenderComponent as renderComponent } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  ],
  providers: []
})
export class AppModule { }

renderComponent(AppComponent);
