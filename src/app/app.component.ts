import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pwa';

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    if (window.matchMedia('(display-mode: browser)').matches) {
      // we are in the browser
      if ('standalone' in navigator) {
        // only awailable in Safari
        this.snackBar.open('You can install this app via share button', '',
          { duration: 2000 })
      } else {
        // not Safari
        window.addEventListener('beforeinstallprompt', event => {
          event.preventDefault();
          const sb = this.snackBar.open('You can install the app',
            'Install', { duration: 5000 });
          sb.onAction()
            .subscribe(() => {
              (event as any).prompt();
              (event as any).userChoice.then((res: any) => {
                if (res.outcome === "dismissed") {
                  // TDOD: marketing stuff
                } else {
                  // TDOD: other marketing stuff
                }
              })
            })
        });
      }
    }
  }
}
