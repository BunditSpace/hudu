

// # Conversation Service

import {Http, Headers} from '@angular/http';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Conversation } from './conversation.store';
import {AppStore} from '../app.store';

const HEADER = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ConversationService {

  conversations: Observable<Array<Conversation>>;

  // Inject the `AppStore` into the constructor with a type of `AppStore`
  constructor(private http: Http, private store: Store<AppStore>) {

    // Bind an observable of our `recipes` to `RecipeService`
    // Since this is essentially a `key, value` system, we can
    // set our `recipes` by calling `store.select('recipes')`
    this.conversations = store.select('conversations');
  }

  loadConversations() {

        this.http.get('/api/conversation')
            // map the `HTTP` response from `raw` to `JSON` format
            // using `RxJs`
            // Reference: https://github.com/Reactive-Extensions/RxJS
            .map(res => res.json())
            // call `map` again to create the object we want to dispatch
            // to our reducer
            // This combo of `map` method calls is an observable sequence
            // in that every result gets passed through this sequence of
            // operations
            .map(payload => ({ type: 'ADD_CONVERSATIONS', payload }))
            // Subscribe to this sequence and hand off control to the
            // reducer by dispatching the transformed results
            .subscribe(action => this.store.dispatch(action));
    }

    saveConversation(conversation: Conversation) {

        (conversation._id) ? this.updateConversation(conversation) : this.createConversation(conversation);
    }

    createConversation(conversation: Conversation) {

        this.http.post('/api/conversation', JSON.stringify(conversation), HEADER)
            .map(res => res.json())
            .map(payload => ({ type: 'CREATE_CONVERSATION', payload }))
            .subscribe(action => this.store.dispatch(action));
    }

    updateConversation(conversation: Conversation) {

        this.http.put(`/api/conversation/${conversation._id}`, JSON.stringify(conversation), HEADER)
          // Dispatch action to reducer in subscribe block here
          .subscribe(action => this.store.dispatch({ type: 'UPDATE_CONVERSATION', payload: conversation }));
    }

    deleteConversation(conversation: Conversation) {

        this.http.delete(`/api/conversation/${conversation._id}`)
          .subscribe(action => this.store.dispatch({ type: 'DELETE_CONVERSATION', payload: conversation }));
    }
}
