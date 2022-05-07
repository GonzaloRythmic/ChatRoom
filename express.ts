import *as express from 'express';
import {json} from 'body-parser';

const appExpress = express()
appExpress.use(json());
const port = 3000

export {appExpress};