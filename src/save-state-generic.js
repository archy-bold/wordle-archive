(function() {
    var a = window.open('about:blank').document;
    a.write('<!DOCTYPE html><html><head><title>Save State</title><meta name="viewport" content="width=device-width" /></head><body></body></html>');
    a.close();
    var b = a.body.appendChild(a.createElement('pre'));
    b.style.overflow = 'auto';
    b.style.whiteSpace = 'pre-wrap';
    b.style.wordBreak = 'break-word';
    // Strip cached fonts, ad plugin caching etc
    var filteredObj = {};
    Object.keys(window.localStorage)
        .filter(function (key) {
            return key.indexOf('nyt-font') !== 0
                && key.indexOf('criteo') !== 0
                && key.indexOf('font_css_cache') !== 0
                && key.indexOf('permutive') !== 0;
        })
        .map(function (key) {
            filteredObj[key] = localStorage.getItem(key);
        });
    var c = btoa(escape(JSON.stringify(filteredObj)));
    b.appendChild(a.createTextNode(c));
})();
