import RSSParser from "rss-parser";
import cors from "cors";
import express from "express";

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
app.use(cors());

app.get("/", (req, res) => {
  res.send(articles);
});

const port = 4000;
const server = app.listen(port);

export default server;
