import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userAutenticadoGuard } from './user-autenticado.guard';

describe('userAutenticadoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userAutenticadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
