js-watson
=========

A simple library for detecting javascript runtime errors and reporting them via 
google analytics.

Usage
-----

This library assumes that you are using Google Analytics for tracking page views
and other events on your web application. For more information on how to setup 
google analytics, refer to documentation at 
https://developers.google.com/analytics/devguides/collection/gajs/

To setup google analytics tracking for unhandled errors,

- Include the js-watson.js file in your page(s)
- Set `window.onerror = JsWatson.trackUnhandledError`
- That's it.

Now, any unhandled errors on your web pages should get reported to your google
analytics account as a page view, with the script file name and the line number
on which the error occured as part of the page view URL.

Over time, you can see the trends, which browsers are getting the errors, etc.
There is much more to how you can analyze where errors are occuring, using the 
full power of google analytics.

Troubleshooting
---------------

First, ensure you're google analytics setup is otherwise properly configured and is 
already reporting page views and other events to google.

Example
-------

```html
<script src="/javascripts/js-watson.js" type="text/javascript"></script>

<!-- google analytics initialization --> 
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXX-X']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

<script>
  window.onload=function() {
    window.onerror = JsWatson.trackUnhandledError;
    // other stuff ...
  }
</script>
```