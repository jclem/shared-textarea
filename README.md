# shared-textarea

This barely works, and is tied to a specific Heroku app. Documents will
disappear periodically.

Usage:

- bower install Polymer/platform --save
- bower install shared-textarea --save

index.html:

```html
<!doctype html>

<html>
  <head>
    <title>shared-textarea demo</title>
    <script src='/bower_components/platform/platform.js'></script>
    <link rel='import' href='/bower_components/shared-textarea/shared-textarea.html'>
  </head>

  <body unresolved>
    <shared-textarea collection='public' document='test-document'></shared>
  </body>
</html>
```
