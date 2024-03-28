import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwPush, SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pwa';

  constructor(
    private snackBar: MatSnackBar,
    private serviceWorkerUpdate: SwUpdate,
    private serviceWorkerPush: SwPush
  ) { }

  registerForPush(){
    if(this.serviceWorkerPush.isEnabled){
      Notification.requestPermission((permission)=>{
        if(permission === "granted"){
          this.serviceWorkerPush.requestSubscription({
            serverPublicKey: "BBk-q6Wp6wnSE72j2jyZZ6_8GPW4htkcs3JfOpNZim5SsmcqogkN_1jZsE0bosU8WknhfYJbhLKLIxChvKnxZY4"
          })
          .then(() => {
            // TODO: send this details to beckend server
          });
        }
      })
    }
  }

  updateNetworkStatusUI(){
    if(navigator.onLine){
      (document.querySelector("body") as any).className = 'online';
    } else {
      (document.querySelector("body") as any).className = 'offline';
    }
  }

  ngOnInit() {

    // checking service worker based updates
    if(this.serviceWorkerUpdate.isEnabled){
      this.serviceWorkerUpdate.checkForUpdate();
      this.serviceWorkerUpdate.versionUpdates
        .subscribe( update => {
          if(update.type === "VERSION_READY"){
            const sb = this.snackBar.open('There is an update available', 
            'Install now', {duration: 3000});
            sb.onAction()
              .subscribe(() => {
                // TODO: ux check before reloading
                location.reload();
              })
          }
        })
    }

    // updating the UI on network changes
    this.updateNetworkStatusUI();

    // inviting the user for installation
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
