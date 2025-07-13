// v.0.2.12
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

  if (/bot\.html|Google-Inspect/.test(navigator.userAgent))
    document.title = "D1R DBV Editor";

  h && h.appendChild(document.createComment(navigator.userAgent +
    JSON.stringify(navigator["userAgent" + "Data"] || {})));
})(document.head);
