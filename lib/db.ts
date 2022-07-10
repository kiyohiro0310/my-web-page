import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    const client = await MongoClient.connect("mongodb+srv://Kiyohiro:tdrX9my4ycLZBT0i@cluster0.mvh0o.mongodb.net/KiyoWebApp?retryWrites=true&w=majority")

    return client;
}

export async function addToDatabase(client:MongoClient, collection: string, data: any) {

    const db = client.db();

    const result = await db.collection(collection).insertOne(data);

    return result;
}