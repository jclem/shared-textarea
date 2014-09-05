# shared-textarea

This barely works, and is tied to a specific Heroku app. Documents will
disappear periodically.

Demo:

```sh
bower install Polymer/platform --save

bower install shared-textarea --save

cat <<EOF > index.html
<!doctype html>

<html>
  <head>
    <title>shared-textarea demo</title>
    <script src='/bower_components/platform/platform.js'></script>
    <link rel='import' href='/bower_components/shared-textarea/shared-textarea.html'>
  </head>

  <body unresolved>
    <shared-textarea
      rows=10
      cols=80
      collection='public'
      document='test'></shared-textarea>
  </body>
</html>
EOF

ruby -run -e httpd . -p 8080
```
