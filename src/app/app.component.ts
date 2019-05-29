import {Component, OnInit} from '@angular/core';
import {routeAnimation} from './animations/route-animation';
import {store} from './store';
import {MatSnackBar} from '@angular/material';
import {eventRepo} from './event-repo';

interface NavItem {
  name: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimation]
})
export class AppComponent implements OnInit {
  title = 'বেফাকুল মাদারিসিল আরাবিয়া বাংলাদেশ';
  state = {
    isDrawer: window.innerWidth > 992,
    isMobile: window.innerWidth <= 992,
    loading: false
  };
  navItems: NavItem[] = [
    {
      name: 'ব্যক্তিগত ফলাফল',
      path: '/'
    },
    {
      name: 'মাদরাসাওয়ারী ফলাফল',
      path: '/madrasas'
    },
    {
      name: 'মেধা তালিকা',
      path: '/medha-talika'
    }
  ];

  constructor(private snackBar: MatSnackBar) {
  }

  hideDrawer() {
    if (this.state.isMobile) {
      this.state.isDrawer = false;
    }
  }

  openDrawer() {
    this.state.isDrawer = true;
  }

  ngOnInit(): void {
    const localState = this.state;

    store.subscribe((state) => {
      localState.isDrawer = state.isMobile ? false : state.isDrawer;
      localState.isMobile = state.isMobile;
      localState.loading = state.loading;
    });

    eventRepo.on('no-result', () => {
      this.snackBar.open('দুঃখিত, কোন তথ্য পাওয়া যায়নি!', 'Close');
    });
  }
}
