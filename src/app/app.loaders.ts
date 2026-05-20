import { AXHolidayDate, AXHolidaysLoader, AXHolidaysLoaderOptions } from '@acorex/core/date-time';
import { AXTranslation, AXTranslationLoader, AXTranslationLoaderOptions } from '@acorex/core/translation';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';

@Injectable()
export class AppCustomHolidaysLoader implements AXHolidaysLoader {
  getHolidays(options?: AXHolidaysLoaderOptions): Promise<AXHolidayDate[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            date: new Date(2023, 8, 10),
            title: 'Test 1',
          },
          {
            date: new Date(2023, 8, 20),
            title: 'Test 2',
          },
          {
            date: new Date(2025, 3, 9),
            title: 'ACoreX world day',
          },
        ]);
      }, 500);
    });
  }
}

@Injectable()
export class AppTranslationLoader implements AXTranslationLoader {
  private http = inject(HttpClient);
  load(options: AXTranslationLoaderOptions): Observable<AXTranslation> {
    const httpRequest = this.http.get<AXTranslation>(`/i18n/${options.lang}/${options.scope}.json`).pipe(first());
    return httpRequest;
  }
}