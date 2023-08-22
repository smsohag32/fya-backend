import { Schema, model, models } from "mongoose";

const expertSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  specialty: {
    type: String,
    required: [true, "Specialty is required."],
  },
});

const experts = models.experts || model("experts", expertSchema);

export default experts;
