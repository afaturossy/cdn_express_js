import express from "express";
import https from "https";

const app = express();

app.get("/", (req, res) => {
  const { url } = req.query;

  const request = https.get(url, function (response) {
    const contentType = response.headers["content-type"];

    console.log(contentType);

    res.setHeader("Content-Type", contentType);

    response.pipe(res);
  });

  request.on("error", function (e) {
    console.error(e);
  });
});

app.listen(5000, () => {
  console.log("runing");
});
