import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { MainframeComponent } from '../components/mainframe/mainframe.component';
import { ExpertiseComponent } from '../components/expertise/expertise.component';
import { FeedbackComponent } from '../components/feedback/feedback.component';
import { FeedbackListComponent } from '../components/feedback-list/feedback-list.component';
import { ContactComponent } from '../components/contact/contact.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { LeadershipComponent } from '../components/leadership/leadership.component';
import { CareerComponent } from '../components/career/career.component';
import { ApproachComponent } from '../components/approach/approach.component';
import { Title, Meta } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: "", component: MainframeComponent,
    children: [
      {
        path: "", component: HomeComponent, data: {
          title: 'Big Data App | AWS Solutions | Elastic Search | Factweavers',
          metaDescription: 'Factweavers: Leading Big Data solutions company, our major services are Elastic Search, AWS solutions, Angular, Cloud solutions, Docker, ELK Stack, ETL Systems'
        }
      },
      {
        path: "expertise", component: ExpertiseComponent, data: {
          title: 'Big Data App solutions & technologies | aws solutions | Angular',
          metaDescription: 'We offer big data applications solutions . Contact us to get best big data app. AWS solutions offers reliable. Angular- front-end web application framework.'
        }
      },
      {
        path: "approach", component: ApproachComponent, data: {
          title: 'Best Colud Solutions and Services | cloud technologies',
          metaDescription: 'A cloud solution services is any service made available to users on demand via the Internet from a cloud computing providers servers'
        }
      },
      {
        path: "portfolio", component: PortfolioComponent, data: {
          title: 'Elastic search log stash kibana (ELK) stack management',
          metaDescription: 'We provide Elastic search based arrangement and support .Elastic search -Log stash is one of the most used technology. Safely examine and review your data.'
        }
      },
      {
        path: "leadership", component: LeadershipComponent, data: {
          title: 'Elastic search solution and support | ui design and solutions',
          metaDescription: 'Elastic search based arrangement and support .Elastic search -Log stash is one of the most used technology. Creative team offers responsive ui designs and solutions.'
        }
      },
      {
        path: "career", component: CareerComponent, data: {
          title: 'Natural language processing applications & Technologies | Career',
          metaDescription: 'Natural language processing (NLP) is the capacity of a PC program to comprehend human language as it is talked. NLP-segment of artificial intelligence (AI)'
        }
      },
      {
        path: "contact", component: ContactComponent, data: {
          title: 'Docker management application and technology | contact us',
          metaDescription: 'Docker is an open-source project for robotizing the organization of applications as versatile, independent holders that can run for all intents and purposes anyplace.'
        }
      },

      { path: "**", redirectTo: "" },

    ]
  },
  { path: "feedback", component: FeedbackComponent },
  { path: "show-feedback-list", component: FeedbackListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {
    //Boilerplate code to filter out only important router events and to pull out data object field from each route
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      //Data fields are merged so we can use them directly to take title and metaDescription for each route from them
      .mergeMap(route => route.data)
      //Real action starts there
      .subscribe((event) => {
        //Changing title
        this.titleService.setTitle(event['title']);

        //Changing meta with name="description"
        var tag = { name: 'description', content: event['metaDescription'] };
        let attributeSelector: string = 'name="description"';
        this.metaService.removeTag(attributeSelector);
        this.metaService.addTag(tag, false);
      });
  }
}
