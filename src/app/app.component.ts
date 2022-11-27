import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationStart, Router } from '@angular/router';
import { filter, map, } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shared-trip';

  constructor(private router: Router, private pageTitle: Title){
    this.router.events.pipe(
      filter((e): e is ActivationStart => e instanceof ActivationStart),
      map( e => e.snapshot.data?.['title']),
      filter((data) => !!data)
    ).subscribe((pageTitle) => {
      this.pageTitle.setTitle(pageTitle);
    });
  }
}

