import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),importProvidersFrom(
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'de'
    })
  ),provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"portfolio-14d2c","appId":"1:966344824986:web:f4bb2b5ab4cef7970fa723","storageBucket":"portfolio-14d2c.firebasestorage.app","apiKey":"AIzaSyD0kDUm2C3D3ox3sYmfigDsvf7fITIvAeE","authDomain":"portfolio-14d2c.firebaseapp.com","messagingSenderId":"966344824986"})), provideFirestore(() => getFirestore())]
};
