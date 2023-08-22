import { Schema, model, models } from "mongoose";

const usersSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  image: {
    type: String,
    required: [true, "Image is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
  },
  role: {
    type: String,
    required: [true, "Role is required."],
  },
});

const usersInfo = models.usersInfo || model("usersInfo", usersSchema);

export default usersInfo;
