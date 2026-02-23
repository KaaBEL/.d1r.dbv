// v.0.2.32
window.onerror = function (m, s, l, c, e) {
  alert(m + " " + s + ":" + (l || "") + ":" + (c || "") + " " +
    (e && typeof e == "object" && e.stack || e));
};

(function (h) {
  h || typeof document.querySelector == "function" &&
    (h = document.querySelector("head") || EL("head"));
  h && h.appendChild(document.createElement("style")).appendChild(
    document.createTextNode(".no-script{display:none;}")
  );
  var parentNode = h.parentNode;
  if (h && /[?&]no=info$|[?&]no=info&/.test(location.href) &&
    parentNode instanceof Object && "className" in parentNode)
    parentNode.className = "no-info";

  if (!/bot\.html|Google-Inspect|bingbot/.test(navigator.userAgent))
    document.title = "D1R DBV +MSSSS Editor";

  h && h.appendChild(document.createComment(navigator.userAgent +
    JSON.stringify(navigator["userAgent" + "Data"] || {})));
})(document.head);
