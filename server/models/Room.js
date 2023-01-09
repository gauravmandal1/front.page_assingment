const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Can't be blank"],
    },
  },

  { timestamps: true }
);

const Room = mongoose.model("RoomSchema",RoomSchema);

module.exports = Room;
