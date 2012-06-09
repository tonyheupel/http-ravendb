http-raven
==========
A client-side JavaScript library for RavenDB access.


Requirements
------------
This requires the use of Cross-Origin Resource Sharing (CORS).  This means that you will likely need to configure RavenDB to be hosted in IIS and add a static HTTP Header to the site/virtual directory.  Something like:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: http://example.com:8080 http://foo.example.com
Access-Control-Allow-Headers: Content-Type
Access-Control-Allow-Methods: PATCH, PUT, POST, GET, OPTIONS, DELETE
```

See (http://enable-cors.org/) for more

Usage
-----
See the index.html file in this project for example usage.