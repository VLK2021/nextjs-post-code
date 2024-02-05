import {MongoClient} from "mongodb";


export async function connectDatabase() {
    console.log('start');
    const client = await MongoClient.connect('mongodb+srv://skypevf:next-next@cluster0.mynbdk1.mongodb.net/events?retryWrites=true&w=majority');
    // const client = await MongoClient.connect('mongodb+srv://skypevf:next-next@cluster12.khwujlg.mongodb.net/?retryWrites=true&w=majority');
    console.log('finish');
    return client;
}

export async function insertDocument(client, collection, document) {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);
    return result;
}

export async function getAllDocuments(client, collection, sort) {
    const db = client.db();

    const documents = await db
        .collection(collection)
        .find()
        .sort(sort)
        .toArray();

    return documents;
}