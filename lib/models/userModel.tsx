import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  name: {
    type: String,
    required: true,
  },
});

const UserModel = models.User || model("User", UserSchema);

export default UserModel;