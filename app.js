const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cloud Run Demo</title>
      <style>
        body {
          font-size: 4em; /* 调整此值以改变文字大小 */
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #f0f0f0;
        }
      </style>
    </head>
    <body>
      Hello from Cloud Run!
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
