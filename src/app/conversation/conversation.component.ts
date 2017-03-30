
import {Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AppStore} from '../app.store';

import { Conversation } from './conversation.store';
import { ConversationService } from './conversation.service';
import { ConversationDetail } from './conversation-detail.component';
import { ConversationList } from './conversation-list.component';


@Component({
    selector: 'conversation',
    providers: [],
    template: require('./Conversation.html'),
    directives: [ConversationList, ConversationDetail],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class Conversations {

  conversations: Observable<Array<Conversation>>;

  selectedConversation: Observable<Conversation>;

  constructor(private conversationService: ConversationService,
              private store: Store<AppStore>) {

    // Bind to the `recipes` observable on `RecipeService`
    this.conversations = conversationService.conversations;

    // Bind the `selectedRecipe` observable from the store
    this.selectedConversation = store.select('selectedConversation');

    // DEBUG
    this.selectedConversation.subscribe(v => console.log(v));

    // `recipeService.loadRecipes` dispatches the `ADD_RECIPES` event
    // to our store which in turn updates the `recipes` collection
    conversationService.loadConversations();
  }

  selectConversation(conversation: Conversation) {

    this.store.dispatch({

      type: 'SELECT_CONVERSATION',
      payload: conversation
    });
  }

  deleteConversation(conversation: Conversation) {

    this.conversationService.deleteConversation(conversation);
  }

  resetConversation() {

    let emptyConversation: Conversation = {
      _id: null,
      creator: '',
      date: '',
      talkwith: '',
      relationship: '',
      topic: '',
      question: '',
      answer: '',
      conversationtype: '',
      rating: null,
      feeling: null
    };

    this.store.dispatch({

      type: 'SELECT_CONVERSATION',
      payload: emptyConversation
    });
  }

  saveConversation(conversation: Conversation) {

    this.conversationService.saveConversation(conversation);
    this.resetConversation();
  }
}
