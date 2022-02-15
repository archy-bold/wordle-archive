(function() {
    var div = document.createElement('div');
    div.setAttribute('id', 'inputDiv');
    div.setAttribute('style', 'position:absolute;top:0;right:0;bottom:0;left:0;z-index:10000;background:white;');
    var isNyt = document.location.href.indexOf('nytimes.com') > -1;
    var stateKey = isNyt ? 'nyt-wordle-state' : 'gameState';
    var statsKey = isNyt ? 'nyt-wordle-statistics' : 'statistics';
    var btnClick = "var str = window.document.getElementById('gameStateInput').value;"
        + "try{"
        + "var json = JSON.parse(atob(str));"
        + "if (json.gameState == null || json.statistics == null) throw 'err';"
        + "window.localStorage.setItem('" + stateKey + "', JSON.stringify(json.gameState));"
        + "window.localStorage.setItem('" + statsKey + "', JSON.stringify(json.statistics));"
        + "window.location.reload()"
        + "}catch(err){alert('Can\\\'t read the input.')}";
    div.innerHTML = '<textarea id="gameStateInput" style="width:100%;height:150px;box-sizing:border-box;" placeholder="Paste your save here"></textarea><button onclick="' + btnClick + '">Restore</button>';
    window.document.body.appendChild(div);
})();
