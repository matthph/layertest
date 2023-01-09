#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LayertestStack } from '../lib/layertest-stack';


const app = new cdk.App();

//new LayertestStack(app, 'LayertestStack', {
//});

new LayertestStack(app, 'LayertestStack', {
  synthesizer: new cdk.CliCredentialsStackSynthesizer()
});