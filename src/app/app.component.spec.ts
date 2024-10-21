import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

// COMPONENTS
import { AppComponent } from './app.component';

// SERVICES
import { CountriesService } from './services/countries.service';
import { of } from 'rxjs';
import { ICountry } from './interfaces/country.model';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: CountriesService;

  const mockUsers: ICountry[] = [
    {
      name: {
        common: 'string',
        official: 'string',
        nativeName: {},
      },
      cca2: 'string',
      capital: [''],
      latlng: [0],
      flag: 'string',
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
      spyOn(service, 'getCountries').and.returnValue(of(mockUsers));
      spyOn(app, 'capitalFilter').and.returnValue(mockUsers);
      app.generateQuiz();
      expect(app.capitalFilter).toHaveBeenCalled();
    });

    it('should call "imageFilter"', () => {
      spyOn(service, 'getCountries').and.returnValue(of(mockUsers));
      spyOn(app, 'imageFilter').and.returnValue(mockUsers);
      app.generateQuiz();
      expect(app.imageFilter).toHaveBeenCalled();
    });

    it('should call "imageFilter"', () => {
      spyOn(service, 'getCountries').and.returnValue(of(mockUsers));
      spyOn(app, 'imageFilter').and.returnValue(mockUsers);
      app.generateQuiz();
      expect(app.imageFilter).toHaveBeenCalled();
    });

    it('should call "randomize"', () => {
      spyOn(service, 'getCountries').and.returnValue(of(mockUsers));
      spyOn(app, 'randomize').and.returnValue(mockUsers);
      app.generateQuiz();
      expect(app.randomize).toHaveBeenCalled();
    });

    it('should call "group10"', () => {
      spyOn(service, 'getCountries').and.returnValue(of(mockUsers));
      spyOn(app, 'group10').and.returnValue(mockUsers);
      app.generateQuiz();
      expect(app.group10).toHaveBeenCalled();
    });

    it('should call "sort"', () => {
      spyOn(service, 'getCountries').and.returnValue(of(mockUsers));
      spyOn(app, 'sort').and.returnValue(mockUsers);
      app.generateQuiz();
      expect(app.sort).toHaveBeenCalled();
    });
  });
});
