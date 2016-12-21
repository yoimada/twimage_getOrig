(function ()
 {
  t=window.location.href;
  t=t.replace(":large",":orig");
  if ( t.indexOf(":orig") == -1 ) t=t+":orig";
  window.location.href=t;
})();

//javascript:(function (){ t=window.location.href; t=t.replace(":large",":orig"); if ( t.indexOf(":orig") == -1 ) t=t+":orig"; window.location.href=t;})();
