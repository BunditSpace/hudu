// */app/routes/_conversation.router.js*

// # Recipe API object

// HTTP Verb  Route                   Description

// GET        /api/conversation                     Get all of the conversations
// GET        /api/conversation/:conversation_id    Get a single conversation by recipe id
// POST       /api/conversation                     Create a single conversation
// DELETE     /api/conversation/:conversation_id    Delete a single conversation
// PUT        /api/conversation/:conversation_id    Update a conversation with new info

// Load the `recipe` model
import Conversation from '../models/conversation.model'

export default (app, router) => {

  // ## Conversation API Routes

  // Define routes for the `conversation` API

  router.route('/conversation')

    // ### Create a `conversation`

    // Accessed at POST http://localhost:8080/api/conversation

    // Create a `conversation`
    .post((req, res) => {

      Conversation.create({

        creator : req.body.creator,

        talkwith : req.body.talkwith,

        relationship : req.body.relationship,

        topic : req.body.topic,

        question : req.body.question,

        answer : req.body.answer,

        conversationtype : req.body.conversationtype,

        rating : req.body.rating,

        feeling : req.body.feeling,

      }, (err, conversation) => {

        if (err)
          res.send(err);

        // DEBUG
        console.log(`Conversation created: ${conversation}`);

        // return the new `conversation` to our front-end
        res.json(conversation);
      });
    })

    // ### Get all of the `recipes`

    // Accessed at GET http://localhost:8080/api/conversation
    .get((req, res) => {

      // Use mongoose to get all recipes in the database
      Conversation.find((err, conversation) => {

        if(err)
          res.send(err);

        else
          res.json(conversation);
      });
    });

  router.route('/conversation/:conversation_id')

    // ### Get a `conversation` by ID

    // Accessed at GET http://localhost:8080/api/conversation/:conversation_id
    .get((req, res) => {

      // Use mongoose to fetch a single `conversation` by id in the database
      Conversation.findOne(req.params.conversation_id, (err, conversation) => {

        if(err)
          res.send(err);

        else
          res.json(conversation);
      });
    })

    // ### Update a `conversation` by ID

    // Accessed at PUT http://localhost:8080/api/conversation/:conversation_id
    .put((req, res) => {

      // use our `recipe` model to find the `conversation` we want
      Conversation.findOne({

        '_id' : req.params.conversation_id

      }, (err, conversation) => {

        if (err)
          res.send(err);

        // Only update a field if a new value has been passed in
         if (req.body.creator)
          conversation.creator = req.body.creator;

        if (req.body.talkwith)
          conversation.talkwith = req.body.talkwith;

        if (req.body.relationship)
          conversation.relationship = req.body.relationship;

        if (req.body.topic)
          conversation.topic = req.body.topic;

        if (req.body.question)
          conversation.question = req.body.question;

        if (req.body.answer)
          conversation.answer = req.body.answer;

        if (req.body.conversationtype)
          conversation.conversationtype = req.body.conversationtype;

        if (req.body.rating)
          conversation.rating = req.body.rating;

        if (req.body.feeling)
          conversation.feeling = req.body.feeling;

        // save the `conversation`
        return conversation.save((err) => {

          if (err)
            res.send(err);

          return res.send(conversation);

        });
      });
    })

    // ### Delete a `conversation` by ID

    // Accessed at DELETE http://localhost:8080/api/conversation/:conversation_id
    .delete((req, res) => {

      // DEBUG
      console.log(`Attempting to delete conversation with id: ${req.params.conversation_id}`);

      Conversation.remove({

        _id : req.params.conversation_id
      }, (err, conversation) => {

        if(err)
          res.send(err);

        else
          console.log('Conversation successfully deleted!');

        Conversation.find((err, conversations) => {
          if(err)
            res.send(err);

          res.json(conversations);
        });
      });
    });
};
