
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://nextJSPractice:63UkjGJYACKoXRJc@cluster0.j4x9j8z.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const newCollection = await client.db("news_portal").collection("news");
if(req.method === "GET"){
    const news  = await newCollection.find({}).toArray();
    res.send({
        message: "Success",
        data: news,
        statusCode :200
    })
}

if(req.method === "POST"){
    const news  = await newCollection.insertOne(req.body);
    res.send({
        message: "Success",
        data: news,
        statusCode :200
    })
}

} finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
