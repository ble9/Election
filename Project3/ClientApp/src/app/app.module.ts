import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ElectionsComponent } from './elections/elections.component';
import { RepresentativeComponent } from './representative/representative.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepresentativeDetailComponent } from './representative-detail/representative-detail.component';
import { ElectionDetailComponent } from './election-detail/election-detail.component';
import { faFacebook, faYoutube, faTwitter} from "@fortawesome/free-brands-svg-icons";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ElectionsComponent,
    RepresentativeComponent,
    NotFoundComponent,
    RepresentativeDetailComponent,
    ElectionDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'elections', component: ElectionsComponent, pathMatch: 'full' },
      { path: 'election/:electionId/:address', component: ElectionDetailComponent, pathMatch: 'full' },
      { path: 'representatives/:address', component: RepresentativeDetailComponent, pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faFacebook, faYoutube, faTwitter);
  }
}
