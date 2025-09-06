import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://nillmishra09_db_user:5TC4pdgsa4fLUI2j@newcluster.ww0wsln.mongodb.net/?retryWrites=true&w=majority&appName=newCluster";

const client = new MongoClient(URI);

const dbName = "namastenode";

async function main() {
  try {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB server");

    const db = client.db(dbName);
    const collection = db.collection("user");

    // Sample data
    const data = {
      firstname: "Shivam",
      lastname: "Pandey",
      city: "Lucknow",
      phonenumber: "7093104033",
    };

    // Insert a document
    // const insertResult = await collection.insertOne(data);
    // console.log("📌 Inserted document =>", insertResult.insertedId);

    // Find documents
    const findResult = await collection.find({}).toArray();
    console.log("📌 Found documents =>", findResult);

    // Update documents
    const updateResult = await collection.updateMany(
      { firstname: "Shivam" },
      { $set: { lastname: "Kumar" } }
    );
    console.log(
      `📌 Matched ${updateResult.matchedCount}, Modified ${updateResult.modifiedCount}`
    );

    // Delete example (optional)
    // const deleteResult = await collection.deleteOne({ firstname: "Shivam" });
    // console.log("📌 Deleted documents =>", deleteResult.deletedCount);

    return "done ✅";
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

main()
  .then(console.log)
  .catch(console.error);
