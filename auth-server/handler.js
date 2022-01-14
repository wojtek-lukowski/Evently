const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");

const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

const credentials = {
  client_id: process.env.CLIENT_ID,
  project_id: process.env.PROJECT_ID,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  redirect_uris: ["https://wojtek-lukowski.github.io/evently/"],
  javascript_origins: ["https://wojtek-lukowski.github.io", "https://localhost:3000", "https://localhost:8080"],
}; 
const { client_secret, client_id, redirect_uris, calendar_id } = credentials;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

//get auth URL
module.exports.getAuthURL = async () => {
  console.log('getting url');
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      authUrl: authUrl,
    }),
  };
};

// get token
module.exports.getAccessToken = async (event) => {
  console.log('getting token');
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  const code = decodeURIComponent(`${event.pathParameters.code}`);

  return new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        return reject(err);
      }
      console.log('token', token);
      return resolve(token);
    });
  })
    .then((token) => {
      // Respond with OAuth token 
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(token),
      };
    })
    .catch((err) => {
      // Handle error
      console.error(err);
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(err),
      };
    });
};

//get events
module.exports.getCalendarEvents = async (event) => {
  console.log('getting events');
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  const access_token = decodeURIComponent(`${event.pathParameters.access_token}`);
  console.log('token', access_token);
  console.log('object', event);
  oAuth2Client.setCredentials({ access_token });

  return new Promise((resolve, reject) => {
    calendar.events.list(
    {
      calendarId: calendar_id,
      auth: oAuth2Client,
      timeMin: new Date().toISOString,
      singleEvents: true,
      orderBy: "startTime",
    },
    (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    }
  );
  })
  .then((results) => {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ events: results.data.items }),
    };
  })
  .catch((err) => {
    console.error(err);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(err),
    };
  })
  };
  