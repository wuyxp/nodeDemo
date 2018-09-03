let urls = {
  "404.css": "404-14da10dce0.css",
  "404.png": "404-a31dd3528b.png",
  "animate.min.css": "animate-475e5361d5.min.css",
  "blue-mountain.jpg": "blue-mountain-7002311cd5.jpg",
  "bootstrap.min.css": "bootstrap-067e0c80c0.min.css",
  "common.css": "common-123f1ce26b.css",
  "dialog.css": "dialog-f5449f0c3f.css",
  "dialog.js": "dialog-cbf81b4bce.js",
  "index.css": "index-11f72c19cf.css",
  "index.js": "index-531dd9dd5f.js",
  "loading.gif": "loading-b098f3722a.gif",
  "login.css": "login-c9467e8f72.css",
  "login.js": "login-e8efe1f99d.js",
  "logo.png": "logo-2f1e1ecc97.png",
  "zepto.min.js": "zepto-0e4740df75.min.js"
}
for( i in urls){
  let url = urls[i];

  let src = url.replace(/(?:-([^-]*?))((?:\.min)?\..*$)/, '$2?v=$1')
  console.log(url+'--------->'+src)
}