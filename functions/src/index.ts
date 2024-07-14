import * as admin from "firebase-admin";
import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as cors from "cors";

admin.initializeApp();
const db = admin.firestore();
const corsHandler = cors({ origin: true });

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });

  corsHandler(request, response, () => {
    response.json({ data: { message: "Hello from Firebaseeeee!!!!!!" } });
  });
});

export const getDocument = onRequest(async (request, response) => {
  logger.info("Get document request received", { structuredData: true });

  corsHandler(request, response, async () => {
    try {
      const docId = request.query.id as string;
      const docRef = db.collection("your-collection-name").doc(docId);
      const doc = await docRef.get();

      if (!doc.exists) {
        response.status(404).json({ error: "Document not found" });
      } else {
        response.json({ data: doc.data() });
      }
    } catch (error) {
      logger.error("Error getting document", error);
      response.status(500).json({ error: "Internal Server Error" });
    }
  });
});
