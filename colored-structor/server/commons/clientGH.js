"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function download(e){return new Promise(function(t,s){var o={uri:e,method:"GET",strictSSL:!1,headers:{"User-Agent":"request"},encoding:null};try{(0,_request2.default)(o,function(o,n,r){n?200!==n.statusCode?n.statusCode>=301&&n.statusCode<=302?download(n.headers.location).then(function(e){t(e)}).catch(function(e){s(e)}):s(403===n.statusCode?"User account is not signed in. Requested operation is forbidden.":401===n.statusCode?"User account is not authenticated.":502===n.statusCode?"Connection to the server can not be established. Please try a little bit later.":"Got error code "+n.statusCode+" for "+e+". Error: "+n.statusMessage):o?s("Error connection to "+e+". "+(o.message?o.message:o)):t(r):s("Error connection to "+e)})}catch(e){s(e.message?e.message:e)}})}function get(e){return new Promise(function(t,s){var o={headers:{Accept:"application/json","User-Agent":"request"},uri:e,method:"GET",json:!0,followAllRedirects:!1};try{(0,_request2.default)(o,function(o,n,r){n?200!==n.statusCode?n.statusCode>=301&&n.statusCode<=302?get(n.headers.location).then(function(e){t(e)}).catch(function(e){s(e)}):s(403===n.statusCode?"User account is not signed in. Requested operation is forbidden.":401===n.statusCode?"User account is not authenticated.":502===n.statusCode?"Connection to the server can not be established. Please try a little bit later.":"Got error code "+n.statusCode+" for "+e+". Status: "+n.statusMessage+". Message: "+JSON.stringify(r)):o?s("Error connection to "+e+". "+(o.message?o.message:o)):t(r):s("Error connection to "+e)})}catch(e){s(e.message?e.message:e)}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.download=download,exports.get=get;var _request=require("request"),_request2=_interopRequireDefault(_request);