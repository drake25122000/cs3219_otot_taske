import mongoose from "mongoose";

var Schema = mongoose.Schema;
let NUSMods = new Schema({
  ay: {
    type: String,
    required: true,
    unique: true,
  },
  modules: {
    type: [{type: Object}],
    required: true,
  }
});

export default mongoose.model("nusmods", NUSMods);