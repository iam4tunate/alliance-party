import RSSParser from "rss-parser";
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
app.use(cors(), "/", (req, res) => {
  res.send(articles);
});

app.listen(4000);
