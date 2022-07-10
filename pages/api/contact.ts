import { NextApiRequest, NextApiResponse } from "next";
import { addToDatabase, connectToDatabase } from "../../lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST") {
        const newMessage = req.body;
        let client;

        try {
            client = await connectToDatabase();
            const result = await addToDatabase(client, "ContactMessage", newMessage);
            res.status(200).json(result);
        }
        catch(error) {
            res.status(500).json({message: "Connection failed."});
            return;
        }

    }
}

export default handler;