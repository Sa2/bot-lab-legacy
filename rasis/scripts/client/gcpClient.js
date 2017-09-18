// Imports the Google Cloud client library
const Storage = require('@google-cloud/storage');
// Your Google Cloud Platform project ID
const projectId = process.env.gcp_project_id;
// Instantiates a client
const storage = Storage({
  projectId: projectId
});
module.export = {
    fetchFileList: (bucketName, path) => {

    }
}