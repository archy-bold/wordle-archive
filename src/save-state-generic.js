(function() {
    var a = window.open('about:blank').document;
    a.write('<!DOCTYPE html><html><head><title>Save State</title><meta name="viewport" content="width=device-width" /></head><body></body></html>');
    a.close();
    var b = a.body.appendChild(a.createElement('pre'));
    b.style.overflow = 'auto';
    b.style.whiteSpace = 'pre-wrap';
    b.style.wordBreak = 'break-word';
    var c = '';
    if (window.localStorage.hasOwnProperty('nyt-fontFace')) {
        // Remove the cached fonts on nyt wordle
        var filteredObj = {};
        Object.keys(window.localStorage)
            .filter(function (key) {
                return key.indexOf('nyt-font') !== 0;
            })
            .map(function (key) {
                filteredObj[key] = localStorage.getItem(key);
            });
        c = btoa(escape(JSON.stringify(filteredObj)));
    } else {
        c = btoa(escape(JSON.stringify(window.localStorage)));
    }
    b.appendChild(a.createTextNode(c));
})();
