import { NgModule, ɵrenderComponent as renderComponent, createInjector, Type, defineInjector, Injector } from '@angular/core';
import { CommonModule } from '@angular/common'
import { createCustomElement } from '@angular/elements'

import { AppComponent } from './app.component';

(CommonModule as any).ngInjectorDef = defineInjector({factory: () => new CommonModule});
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class AppModule { 
}

renderComponent(AppComponent)
var i =  createInjector(AppModule)
console.log(i.get(Injector))
// var customElement = createCustomElement(AppComponent, {injector: i})
// customElements.define('vote-cmp', customElement)
// createCustomElement()