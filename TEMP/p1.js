const { MongoClient } = require('mongodb');

// MongoDB Atlas connection string
const uri = "your_mongodb_atlas_connection_string"; // Replace with your connection string

// Database and collection names
const dbName = "testDB"; // Replace with your database name
const collectionName = "testCollection"; // Replace with your collection name

// Function to connect and insert a document
async function main() {
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected to MongoDB Atlas!");

        // Access the database and collection
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Document to insert
        const document = {
            name: "Jainil Prajapati",
            email: "jainil@example.com",
            age: 25,
            createdAt: new Date()
        };

        // Insert the document
        const result = await collection.insertOne(document);

        console.log(Document inserted with _id: ${result.insertedId});
    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        // Close the connection
        await client.close();
        console.log("Connection closed.");
    }
}

// Run the main function
main().catch(console.error);