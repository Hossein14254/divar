import mongoose from 'mongoose';

let CommentsModel;

try {
  CommentsModel = mongoose.model('Comments');
} catch (e) {
  const CommentsSchema = mongoose.Schema({
    comment: {
      type: String,
      required: true
    },
    iduser: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
      },
    idagahi: {
        type: mongoose.Types.ObjectId,
        ref: "atgahi",
        required: true
      }
  },{ timestamps: true });

  CommentsModel = mongoose.model('Comments', CommentsSchema);
}

export default CommentsModel;