import RSSParser from "rss-parser";
import cors from "cors";
import express from "express";
import serverless from "serverless-http";

const feedURL =
  "https://www.premiumtimesng.com/tag/all-progressives-congress-apc/feed";
const parser = new RSSParser();
let articles = [];

const parse = async (url) => {
  const feed = await parser.parseURL(url);
  feed.items.forEach((item) => {
    articles.push({ item });
  });
};
parse(feedURL);

let app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ path: "HOME" });
  //   router.send(articles);
});

app.use("/.netlify/functions/api", router);
exports.handler = serverless(app);
