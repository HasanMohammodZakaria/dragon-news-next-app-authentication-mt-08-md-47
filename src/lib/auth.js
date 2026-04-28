
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.DRAGON_NEWS_AUTH_URI);
const db = client.db("dragon-news");

//console.log("DB connected:", db.databaseName);


export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),

    emailAndPassword: {
        enabled: true,
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
    },
});