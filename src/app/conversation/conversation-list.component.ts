
import {Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import { ConversationService } from './conversation.service';
import { Conversation } from './conversation.store';
import {AppStore} from '../app.store';

import { Rating } from './../recipes/rating.component';

@Component({
  selector: 'conversation-list',
  template: require('./conversation-list.html'),
  directives: [Rating]
})
export class ConversationList {
  // The `recipe` component hands off `recipes` and `selectedrecipe`
  // via property bindings to its child components
  // Here we pick up the `recipes` collection by annotating our local
  // `recipes` property with `@Input()`
  @Input() conversations: Conversation[];
  // Two event outputs for when a recipe is selected or deleted
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
