import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

import { TopComponent } from './landing/top/top.component';
import { BottomComponent } from './landing/bottom/bottom.component';
import { NamesComponent } from './landing/names/names.component';
import { OptionsComponent } from './landing/options/options.component';
import { GameComponent } from './game/game.component';
import { NavbarComponent } from './game/navbar/navbar.component';
import { GuessesComponent } from './game/guesses/guesses.component';
import { ActionComponent } from './game/action/action.component';
import { KeyGridComponent } from './game/key-grid/key-grid.component';
import { LeaderboardComponent } from './game/leaderboard/leaderboard.component';
import { ScoreCardComponent } from './game/score-card/score-card.component';
import { HighlightDirective } from './highlight.directive';
import { OptionsOptionComponent } from './landing/options/options-option/options-option.component';
import { RoundEndComponent } from './game/round-end/round-end.component';
import { RoundCardComponent } from './game/round-card/round-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TopComponent,
    BottomComponent,
    NamesComponent,
    OptionsComponent,
    GameComponent,
    NavbarComponent,
    GuessesComponent,
    ActionComponent,
    KeyGridComponent,
    LeaderboardComponent,
    ScoreCardComponent,
    HighlightDirective,
    OptionsOptionComponent,
    RoundEndComponent,
    RoundCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
