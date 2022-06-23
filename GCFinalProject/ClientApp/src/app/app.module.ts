import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ShowclassComponent } from './showclass/showclass.component';
import { MainViewComponent } from './main-view/main-view.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { ViewPresetComponent } from './view-preset/view-preset.component';
import { SpellListComponent } from './spell-list/spell-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ShowclassComponent,
    MainViewComponent,
    CreateCharacterComponent,
    ViewPresetComponent,
    SpellListComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainViewComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'showclass', component: ShowclassComponent },
      {path: 'create-character', component: CreateCharacterComponent},
      {path: 'view-preset', component: ViewPresetComponent},
      {path: 'spell-list', component: SpellListComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
