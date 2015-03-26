#How to configure this switch locale selector base on the excellent pagkage : tap:i18n

# Overview
+ create a folder called tap-i18n under the root of your project
+ add a project-tap.i18n file to this folder and enter following json configuration text to it:
```javascript
{
  "supported_languages": ["fr"], // please note that for english text you can ommit the "en" since it is loaded by default
  "cdn_path": "/tap-i18n"
  // Please see the TAP-i18n documentation for more options and setting in this file >>>> https://github.com/TAPevents/tap-i18n
}
```
+ add your language files and add some json contents
  - en.i18n.json
  - fr.i18n.json
    ```json
    {
      "hello": "Bonjour %s, your last visit was on: %s"
    }
    ```
+ reference your language blocks in your templates
  ```html
   <p>{{_ "hello" "Daniel" "2014-05-22"}} {{counter}} clicks so far.</p>
   ```
(Credits  and thanks to https://github.com/meteorpoly)
