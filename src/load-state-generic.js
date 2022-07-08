(function() {
    var div = document.createElement('div');
    div.setAttribute('id', 'inputDiv');
    div.setAttribute('style', 'position:absolute;top:0;right:0;bottom:0;left:0;z-index:10000;background:white;');
    var btnClick = "var str = window.document.getElementById('gameStateInput').value;"
        + "try{"
        + "var json = JSON.parse(unescape(atob(str)));"
        + "Object.keys(json).forEach(function (key) { window.localStorage.setItem(key, json[key]); });"
        + "window.location.reload()"
        + "}catch(err){alert('Can\\\'t read the input.')}";
    div.innerHTML = '<textarea id="gameStateInput" style="width:100%;height:150px;box-sizing:border-box;" placeholder="Paste your save here"></textarea><button onclick="' + btnClick + '">Restore</button>';
    window.document.body.appendChild(div);
})();
