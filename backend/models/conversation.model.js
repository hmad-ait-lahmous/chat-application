import mongoose from "mongoose";

const conversationShema = mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [],
        }
    ]
}, { timestamps: true });

const Conversation = mongoose.model("Conversation", conversationShema);

export default Conversation;