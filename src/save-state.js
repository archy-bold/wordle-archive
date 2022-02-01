(function() {
    var a = window.open('about:blank').document;
    a.write('<!DOCTYPE html><html><head><title>Wordle Save</title><meta name="viewport" content="width=device-width" /></head><body></body></html>');
    a.close();
    var b = a.body.appendChild(a.createElement('pre'));
    b.style.overflow = 'auto';
    b.style.whiteSpace = 'pre-wrap';
    b.appendChild(a.createTextNode(JSON.stringify({gameState:JSON.parse(window.localStorage.getItem('gameState')),statistics:JSON.parse(window.localStorage.getItem('statistics'))})));
})();
