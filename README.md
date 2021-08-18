This is a project written in typescript/react to demonstrate uploading a CSV, saving it to a database, and then loading and displaying the data. Unfortunately I cannot dedicate enough time to see this demo through to the end.

# Prerequsites
- [node.js](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/lang/en)


Run the following:
```bash
yarn
yarn start
```
This will start only the front-end, as the backend is not implemented yet.

# Developer Notes
This project is supposed to include a backend. Dummy CSV files are included in `/data`. Loading 50,000 entries will cause the application to crash, so I recommend only using the 39-length CSV.

The original intent is to upload them to some backend persistence (probably redis for simplicity) then use a REST API to load them paginated.

