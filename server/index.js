import RSSParser from "rss-parser";
import express from "express";
import cors from "cors";

const parser = new RSSParser();
let articles = [];

(async () => {
  let feed = await parser.parseURL(
    "https://www.premiumtimesng.com/tag/all-progressives-congress-apc/feed"
  );
  feed.items.forEach((item) => {
    articles.push({ item });
  });
})();

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send(articles);
});

app.listen(4000);

module.exports = app
