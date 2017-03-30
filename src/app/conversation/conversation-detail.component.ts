import { Component, Input, Output, EventEmitter } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import { ConversationService } from './conversation.service';
import { Conversation } from './conversation.store';
import {AppStore} from '../app.store';

import { Rating } from './../recipes/rating.component';


@Component({
    selector: 'conversation-detail',
    template: require('./conversation-detail.html'),
    directives: [Rating]
})

export class ConversationDetail {
  originalTitle: string;
  selectedConversation: Conversation;

  relationships = [{"name" : "Co-Worker" }, {"name" : "Friend" },{"name" : "Brother-Sister" },{"name" : "Other" }]
  conversationtypes = [{"name" : "Work" }, {"name" : "General" },{"name" : "Gossip" },{"name" : "Other" }]
  // Assign our `recipe` to a locally scoped property
  // Perform additional logic on every update via ES6 setter
  // Create a copy of `_recipe` and assign it to `this.selectedRecipe`
  // which we will use to bind our form to
  @Input('conversation') set _conversation(value: Conversation) {

    if (value) this.originalTitle = value.topic;
    this.selectedConversation = Object.assign({}, value);

    // DEBUG
    console.log('this.selectedConversation: ');
    console.log(this.selectedConversation);
  }

  // Allow the user to save/delete a `recipe or cancel the
  // operation. Flow events up from here.
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor() {

  }
  onUpdateRating(value) {

    // Set the value of the selected recipe's rating to the
    // value passed up from the `rating` component
    this.selectedConversation.rating = value;
  }

  onUpdateFeeling(value){
    this.selectedConversation.feeling = value;
  }

}
