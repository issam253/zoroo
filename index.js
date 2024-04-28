const express = require("express");
const app = express();

const texts = [
  "نص الصورة الأولى",
  "نص الصورة الثانية",
  "نص الصورة الثالثة"
];

const imgUrls = [
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg"
];

app.get("/iqtbas", (req, res) => {
  const randomIndex = Math.floor(Math.random() * texts.length);
  const data = {
    text: texts[randomIndex],
    imgUrl: imgUrls[randomIndex]
  };
  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
