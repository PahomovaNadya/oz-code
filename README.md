For work it is necessary to install packages:

npm install --save ngx-spinner@1.2.0
npm install --save classlist.js
npm install --save web-animations-js
npm install --save primeng@5.2.6
npm install --save @ng-bootstrap/ng-bootstrap@2.2.2
npm install --save @angular/cdk@5.2.5
npm install --save @angular/material@5.2.0

Add in index.html:
  <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
  <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

For correct work in IE, in the polyfills.ts file open the lines:
	import 'web-animations-js';
	import 'classlist.js';

Both tasks and step-1 and step-2 are presented in one design: desktop and mobile.

To clear memory use the link: 
	http://localhost:4200/?product=112233
