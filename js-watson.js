/*
 * JS-Watson
 *
 * Copyright 2012, Shyam Habarakada
 * Licensed under MIT.
 *
 */
(function(global) {

  var _i = this;
  
  // Try to initialize with the default google analytics async queue
  var _gaq = window._gaq;

  // Based on http://bit.ly/ILq9ak
  var _pathExtractRegEx = /^[a-z]+:\/\/\/?[^\/]+(\/[^?]*)/i; 
  
  // default path under which errors page-views will be reported
  var _pathPrefix = "/javascript_error";

  // Override the google analytics async queue object used for reporting
  _i.setGaq = function(gaQueue) {
    _gaq = gaQueue;
  }

  // Override the path under which error page-views are reported
  _i.setBasePath = function(path) {
    _pathPrefix = path;
  }
  
  // Function to register as a callback for window.onerror (or invoke from
  // within a window.onerror handler.
  _i.trackUnhandledError = function(message, url, linenumber) {
    try {
      if(_gaq && _gaq.push && typeof(_gaq.push) == "function") {
        var url = _pathPrefix + (_pathExtractRegEx.exec(url))[1] + "?line=" + linenumber + "&message=" + encodeURIComponent(message);
        _gaq.push(['_trackPageview',url]);
      }
    } catch(e) {};
  };
  
  global["JsWatson"] = _i;
  
})(this);
