const admin = require("firebase-admin");
const updateProfile = require("./src/updateProfile");
const executeJupyterSolution = require("./src/executeJupyterSolution");
const analyseJupyterSolution = require("./src/analyseJupyterSolution");
const outgoingRequests = require("./src/outgoingRequest");
const fetchGithubFiles = require("./src/fetchGithubFiles");
const fetchUserJSON = require("./src/fetchUserJSON");
const cohortsAnalytics = require("./src/cohortAnalytics");
const fetchNotebookFromGit = require("./src/fetchNotebookFromGit");

const serviceAccount = require("./config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nus-discovery-dev.firebaseio.com"
});
admin.firestore().settings({ timestampsInSnapshots: true });

updateProfile.queueHandler();
executeJupyterSolution.queueHandler();
outgoingRequests.queueHandler();
analyseJupyterSolution.queueHandler();
fetchGithubFiles.queueHandler();
fetchUserJSON.queueHandler();
cohortsAnalytics.queueHandler();
outgoingRequests.queueHandler();
fetchNotebookFromGit.queueHandler();
