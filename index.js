require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");


const recipes = require("./recipe");
console.log(recipes[3].preparationTime);

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fhaekj1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    
    // await client.connect();
    
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );

    const recipeCollection = client.db("recipeDB").collection("recipes");

    const count = await recipeCollection.countDocuments();
    if (count === 0) {
      await recipeCollection.insertMany(recipes);
      console.log("successfully inserted whole recipe");
    }

    app.get("/recipes", async (req, res) => {
      const result = await recipeCollection.find().toArray();
      res.send(result);
    });
    
    app.get("/recipes/liked", async (req, res) => {
      const result = await recipeCollection.find().toArray();
      res.send(result);
    });

    app.get("/all-recipes/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await recipeCollection.findOne(query);
      res.send(result);
    });

    app.get("/recipes/:email", async (req, res) => {
      const email = req.params.email;
      const result = await recipeCollection
        .find({ userEmail: email })
        .toArray();
      res.send(result);
    });

    app.post("/recipes", async (req, res) => {
      const recipe = req.body;
      const result = await recipeCollection.insertOne(recipe);
      res.send(result);
    });

    app.put("/recipes/:id", async (req, res) => {
      const id = req.params.id;
      const updatedRecipe = req.body;
      const query = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: updatedRecipe,
      };

      const result = await recipeCollection.updateOne(query, updatedDoc);
      res.send(result);
    });

    app.put("/recipes/:id/like", async (req, res) => {
      const id = req.params.id;
      const { likedBy } = req.body;

      const query = { _id: new ObjectId(id) };

      const recipe = await recipeCollection.findOne(query);

      const updatedDoc = {
        $addToSet: { likedBy: likedBy },
        $inc: { likeCount: 1 },
      };

      if (recipe.likedBy.includes(likedBy)) {
        return res.send({ modifiedCount: 0, likes: recipe.likeCount });
      } else {
        const result = await recipeCollection.updateOne(query, updatedDoc);
        const updatedRecipe = await recipeCollection.findOne(query)

        res.send({ modifiedCount: 1, likes: updatedRecipe.likeCount });
      }
    });

    app.delete("/recipes/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await recipeCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
