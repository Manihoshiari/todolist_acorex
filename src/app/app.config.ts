import { AXConversationModule } from '@acorex/components/conversation';
import { AXDialogModule } from '@acorex/components/dialog';
import { AXMediaViewerModule } from '@acorex/components/media-viewer';
import { AXToastModule } from '@acorex/components/toast';
import { AX_DATETIME_HOLIDAYS_LOADER } from '@acorex/core/date-time';
import { AXFormatModule } from '@acorex/core/format';
import { AX_LOCALE_CONFIG } from '@acorex/core/locale';
import { AXLocalStorageService, AX_LOCALSTORAGE_SECRET_KEY } from '@acorex/core/storage';
import { AX_TRANSLATION_CONFIG, AX_TRANSLATION_LOADER, translationConfig } from '@acorex/core/translation';
import { AXValidationModule } from '@acorex/core/validation';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';

import { provideRouter } from '@angular/router';
import { AppCustomHolidaysLoader, AppTranslationLoader } from './app.loaders';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
  
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      AXValidationModule.forRoot(),
      AXConversationModule.forRoot(),
      AXMediaViewerModule.forRoot(),
      AXFormatModule.forRoot(),
      OverlayModule,
      AXDialogModule,
      AXToastModule,
    ),
    {
      provide: AX_DATETIME_HOLIDAYS_LOADER,
      useClass: AppCustomHolidaysLoader,
    },
    {
      provide: AX_TRANSLATION_LOADER,
      useClass: AppTranslationLoader,
    },
    {
      provide: AX_LOCALE_CONFIG,
      useValue: {
        default: 'en-US',
      },
    },
    {
      provide: AX_TRANSLATION_CONFIG,
      useValue: translationConfig({
        preload: {
          langs: ['en-US'],
          scopes: ['acorex'],
        },
        defaults: {
          lang: 'en-US',
          scope: 'acorex',
        },
      }),
    },
    {
      provide: AXLocalStorageService,
    },
    {
      provide: AX_LOCALSTORAGE_SECRET_KEY,
      useValue: 'secretkey',
    },
  ],
};