const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const axios = require('axios');
const Header = require('../src/Server/Header/Header').default;
const Footer = require('../src/Server/Footer/Footer').default;
const DetailPage = require('../src/Server/DetailPage/DetailPage').default;

const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = 'AIzaSyB6UduF6FxK9AFsNoOtqkNHGPPvBMzEKdI'; // Replace with your API key

app.get('/', (req, res) => {
  const headercontent = ReactDOMServer.renderToString(<Header />);
  const footercontent = ReactDOMServer.renderToString(<Footer />); const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Motel</title>
      </head>
      <body>
        <div id="root">${headercontent}</div>
        <div id="csr-container" style="height: 85vh"></div> 
        <div id="root1">${footercontent}</div>
        <script type="module" src="/client.js"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.get('/details', async (req, res) => {
  const requestedUrl = decodeURIComponent(req.query.value);
  const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${requestedUrl}&key=${apiKey}`;
  let result;
  try {
    const apiResponse = await axios.get(apiUrl);
    result = apiResponse.data.result;
  } catch (error) {
    console.error('API request failed:', error);
  }

  const detail = ReactDOMServer.renderToString(
    <>
      <Header />
      <DetailPage placeDetails={result} />
      <Footer />
    </>
  );
  const styles = `
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #f1f3f9;
        }
      `;
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Motel</title>
      </head>
      <body>
         <style>
            ${styles}
          </style>
        <div id="root">${detail}</div>
      </body>
    </html>
  `;
  res.send(html);
});

app.use(express.static(path.resolve(__dirname, '../build')));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});