import { Actions } from '@ngrx/effects';
import { AppState } from '@shared/store';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class PublicChangePasswordPageEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>
  ) { }
}