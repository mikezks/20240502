import { provideHttpClient } from '@angular/common/http';
import { NgZone, importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: NgZone,
      useValue: (window as any)['shellNgZone'] || 'zone.js'
    },
    provideHttpClient(),
    provideRouter(
      APP_ROUTES,
      // withPreloading(PreloadAllModules),
    ),
    importProvidersFrom(MatDialogModule),
  ],
}).then(appRef => {
  const ngZone = appRef.injector.get(NgZone);
  (window as any)['shellNgZone'] = ngZone;
});
