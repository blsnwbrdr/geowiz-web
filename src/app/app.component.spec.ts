import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { DebugElement } from '@angular/core';

// COMPONENTS
import { AppComponent } from './app.component';

// SERVICES
import { CountriesService } from './services/countries.service';
import { of } from 'rxjs';
import { ICountry } from './interfaces/country.model';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let service: CountriesService;

  const mockData: ICountry[] = [
    {
      name: {
        common: 'common',
        official: 'official',
        nativeName: {},
      },
      cca2: 'cca2',
      capital: ['capital'],
      latlng: [0],
      flag: 'flag',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        CountriesService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    de = fixture.debugElement;
    el = de.nativeElement;
    app.countries = mockData;
    service = TestBed.inject(CountriesService);

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('OnInit', () => {
    it('should call "generateQuiz"', () => {
      spyOn(app, 'generateQuiz');
      app.ngOnInit();
      expect(app.generateQuiz).toHaveBeenCalled();
    });
  });

  describe('generateQuiz', () => {
    it('should call "countriesService.getCountries"', () => {
      spyOn(app['countriesService'], 'getCountries').and.callThrough();
      app.generateQuiz();
      expect(app['countriesService'].getCountries).toHaveBeenCalled();
    });
  });

  describe('generateQuiz => countriesService', () => {
    it('should call "capitalFilter"', () => {
      spyOn(service, 'getCountries').and.returnValue(of(mockData));
      spyOn(app, 'capitalFilter').and.returnValue(mockData);
      app.generateQuiz();
      expect(app.capitalFilter).toHaveBeenCalled();
    });

    it('should call "imageFilter"', () => {
      spyOn(service, 'getCountries').and.returnValue(of(mockData));
      spyOn(app, 'imageFilter').and.returnValue(mockData);
      app.generateQuiz();
      expect(app.imageFilter).toHaveBeenCalled();
    });

    it('should call "imageFilter"', () => {
      spyOn(service, 'getCountries').and.returnValue(of(mockData));
      spyOn(app, 'imageFilter').and.returnValue(mockData);
      app.generateQuiz();
      expect(app.imageFilter).toHaveBeenCalled();
    });

    it('should call "randomize"', () => {
      spyOn(service, 'getCountries').and.returnValue(of(mockData));
      spyOn(app, 'randomize').and.returnValue(mockData);
      app.generateQuiz();
      expect(app.randomize).toHaveBeenCalled();
    });

    it('should call "group10"', () => {
      spyOn(service, 'getCountries').and.returnValue(of(mockData));
      spyOn(app, 'group10').and.returnValue(mockData);
      app.generateQuiz();
      expect(app.group10).toHaveBeenCalled();
    });

    it('should call "sort"', () => {
      spyOn(service, 'getCountries').and.returnValue(of(mockData));
      spyOn(app, 'sort').and.returnValue(mockData);
      app.generateQuiz();
      expect(app.sort).toHaveBeenCalled();
    });
  });

  describe('radio input', () => {
    it('should call "onChange"', () => {
      const inputEl = el.querySelector('input') as HTMLInputElement;
      spyOn(app, 'onChange');
      inputEl.dispatchEvent(new Event('change'));
      expect(app.onChange).toHaveBeenCalled();
    });
  });

  describe('button', () => {
    it('should call "onToggle"', () => {
      const buttonEl = el.querySelector('button') as HTMLButtonElement;
      spyOn(app, 'onToggle');
      buttonEl.dispatchEvent(new Event('click'));
      expect(app.onToggle).toHaveBeenCalled();
    });
  });

  describe('onToggle', () => {
    it('should call "activeCheck"', () => {
      spyOn(app, 'activeCheck');
      app.onToggle('capital');
      expect(app.activeCheck).toHaveBeenCalled();
    });
  });
});
