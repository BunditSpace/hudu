



// App
export * from './app.component';
export * from './app.service';

import {AppState} from './app.service';

// Application wide providers
export const APP_PROVIDERS = [
  AppState
];

//# Global Redux Stores
//
//** These `redux` `stores` are available in any template **

// Import module to provide an app `store` for the life-cycle of the app
import {provideStore} from '@ngrx/store';

// Import all of the files necessary for our `recipes` component
import {RecipeService} from './recipes/recipe.service';
import {recipes} from './recipes/recipes.reducer';
import {selectedRecipe} from './recipes/selected-recipe.reducer';
// Import all of the files necessary for our `converstion` component
import { ConversationService } from './conversation/conversation.service';
import { conversations } from './conversation/conversation.reducer';
import { selectedConversation } from './conversation/selected-conversation.reducer';
import { AuthenticationService } from './auth/services/authentication.service';
import { UserService } from './auth/services/user.service';
//# Application Redux Stores
//
//** Redux stores for use with our Angular 2 app **
export const APP_STORES = [
  // These are the primary consumers of our app store
  RecipeService,
  ConversationService,
  AuthenticationService,
  UserService,
  // Inititialize app store available to entire app
  // and pass in our reducers.
  // Notice that we are passing in an object that matches the
  // `AppStore` interface
  provideStore({ recipes, selectedRecipe, conversations, selectedConversation })
];
