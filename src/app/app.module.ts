import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StringReplacerPipePipe } from './pipes/string-replacer-pipe.pipe';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { MainframeComponent } from './components/mainframe/mainframe.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { ApproachComponent } from './components/approach/approach.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { LeadershipComponent } from './components/leadership/leadership.component';
import { CareerComponent } from './components/career/career.component';
import { NgwWowModule } from 'ngx-wow';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { WhatDoComponent } from './components/what-do/what-do.component';
import { CredibilityComponent } from './components/credibility/credibility.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StringReplacerPipePipe,
    HeaderComponent,
    BannerComponent,
    PortfolioComponent,
    FooterComponent,
    ExpertiseComponent,
    MainframeComponent,
    FeedbackComponent,
    FeedbackListComponent,
    ContactComponent,
    ApproachComponent,
    TestimonialComponent,
    LeadershipComponent,
    CareerComponent,
    AboutComponent,
    WhatDoComponent,
    CredibilityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    NgwWowModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
