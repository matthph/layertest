import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as python from '@aws-cdk/aws-lambda-python-alpha';
import * as lambda from 'aws-cdk-lib/aws-lambda';
//import * as AWS from ('aws-sdk');
import * as https from 'https';
import * as fs from 'fs';

const AWS = require('aws-sdk');

// import { Bundling } from '../node_modules/@aws-cdk/aws-lambda-python-alpha/lib/bundling';

export class LayertestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  //   AWS.config.update({
  //     httpOptions: {
  //       agent: new https.Agent({
	 // rejectUnauthorized: false, // Don't use this - this is insecure, just like  --no-verify-ssl in AWS cli
	 // ca: fs.readFileSync('./support/InternalCAChain_PROD.pem')
  //       })
  //     }
  // });

   // Layer container Elasticsearch and requests
   const esrequestslayer = new python.PythonLayerVersion(this, 'elasticsearch-requests-layer', {
     entry: 'src/layers/python/elasticrequests', // point this to your library's directory
     layerVersionName: 'elasticrequests-layertest',
     compatibleRuntimes: [
       lambda.Runtime.PYTHON_3_7,
       lambda.Runtime.PYTHON_3_8,
     ],
    //  bundling: {
    //      buildArgs: {
    //          PIP_INDEX_URL: "http://pypi.org/project"
    //      }
    //  }
   });
  }  
}
