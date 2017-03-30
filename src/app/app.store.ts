
// Import our `Recipe` store
import {Recipe} from './recipes/recipe.store';
import { Conversation } from './conversation/conversation.store';

// We are dealing with a single object that has:
//   * An `recipes` collection
//   * A `selectedRecipe` property holding a single `Recipe`
export interface AppStore {

    recipes: Recipe[];
    selectedRecipe: Recipe;
    conversations: Conversation[];
    selectedConversation: Conversation;

    // If ever you were to desire more functionality, you
    // could expand the `store` with new `key, value` pairs
    // to accomodate the updated model
    //
    // . . .
    //
};
