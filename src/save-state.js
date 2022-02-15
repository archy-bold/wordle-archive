(function() {
    var a = window.open('about:blank').document;
    a.write('<!DOCTYPE html><html><head><title>Wordle Save</title><meta name="viewport" content="width=device-width" /></head><body></body></html>');
    a.close();
    var b = a.body.appendChild(a.createElement('pre'));
    b.style.overflow = 'auto';
    b.style.whiteSpace = 'pre-wrap';
    b.style.wordBreak = 'break-word';
    var stateKey = window.localStorage.hasOwnProperty('nyt-wordle-state') ? 'nyt-wordle-state' : 'gameState';
    var statsKey = window.localStorage.hasOwnProperty('nyt-wordle-statistics') ? 'nyt-wordle-statistics' : 'statistics';
    b.appendChild(a.createTextNode(btoa(JSON.stringify({gameState:JSON.parse(window.localStorage.getItem(stateKey)),statistics:JSON.parse(window.localStorage.getItem(statsKey))}))));
})();
