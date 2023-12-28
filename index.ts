import * as gcp from "@pulumi/gcp";
import * as pulumi from '@pulumi/pulumi';

const config = new pulumi.Config("gcp");
const project = config.require("project");
const zone = config.require("zone");

const bucket = new gcp.storage.Bucket("my-bucket", {
    location: "US",
});