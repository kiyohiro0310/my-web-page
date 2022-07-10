import { NextApiRequest, NextApiResponse } from "next";
import { addToDatabase, connectToDatabase } from "../../lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST") {
        const newMessage = req.body;

        const client = await connectToDatabase();
        const result = await addToDatabase(client, "ContactMessage", newMessage);

        client.close();
        res.status(200).json(result);
    }
}

export default handler;