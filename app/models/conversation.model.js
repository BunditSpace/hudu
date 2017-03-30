import mongoose from 'mongoose';

// Create  a cheman for the 'conversation' object
let conversationSchema = new mongoose.Schema({
    creator: { type: String,  required: true },
    date: { type: Date, default: Date.now },
    talkwith: { type: String,  required: true },
    relationship: { type: String, required: true, enum: ['Co-Worker', 'Friend', 'Brother-Sister', 'Other'] },
    topic: { type: String,  required: true },
    question: { type: String,  required: true },
    answer: { type: String },
    conversationtype:{ type: String, required: true, enum: ['Work', 'General', 'Gossip', 'Other'] },
    rating: { type: Number, required: true},
    feeling: { type: Number, required: true},
    updatedDate: { type: Date, default: Date.now }
});

export default mongoose.model('Conversation', conversationSchema);