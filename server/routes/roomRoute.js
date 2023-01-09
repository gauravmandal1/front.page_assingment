const router = require("express").Router();
const Room = require("../models/Room");

async function getAllRoomTitles() {
  try {
    const rooms = await Room.find(); // Room is the model for the rooms collection in the database
    const titles = rooms.map((room) => room.title); // map the rooms to an array of their titles
    return titles;
  } catch (error) {
    console.log(error);
    return []; // return an empty array if there is an error
  }
}

router.get("/", async (req, res) => {
  // let newrooms =["general", "tech", "finance", "front.page"]
  // const temp = await Room.find({}).forEach(function (room) {
  //   if (room.title) {
  //     newrooms.append(room.title);
  //   }

  const titles = await getAllRoomTitles();
  res.status(200).json(titles);
});

router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    console.log(req.body);
    const room = await Room.create({ title });
    res.status(201).json(room);
  } catch (e) {
    let msg;
    msg = e.message;
    console.log(e);
    res.status(400).json(msg);
  }
});

module.exports = router;
