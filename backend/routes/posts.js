const router = require("express").Router();
let Post = require("../models/post.models");

// Random callback code
// WILL HAVE COLLISION AROUND 50K times
function make_code() {
  let code = Math.random().toString(36).substring(7);
  return code;
}

// GET route -> returns all posts
router.route("/all").get((req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json({ error: err.code }));
});

// POST route -> add a post
router.route("/add").post((req, res) => {
  const randomCode = make_code().toUpperCase();
  const text = req.body.text;
  const newPost = new Post({
    text: text,
    callbackCode: randomCode,
    date: Date.now(),
  });
  newPost
    .save()
    .then(() => {
      console.log(`Callback code: ${randomCode}`);
      res.json({ message: "Post added", code: randomCode });
    })
    .catch((err) => res.status(400).json({ error: err.code }));
});

// DELETE route -> remove post using callback code
router.route("/remove/:code").delete((req, res) => {
  Post.findOneAndDelete({ callbackCode: req.params.code.toUpperCase() })
    .then(() => {
      console.log(`Deleted post with code ${req.params.code}`);
      res.status(200).send("OK");
    })
    .catch((err) => res.status(400).json({ error: err.code }));
});

module.exports = router;
