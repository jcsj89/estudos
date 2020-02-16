var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p>';
msg += '<p>heigth: ' + window.innerHeigth + '</p>';
msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';
msg += '<h2>screen</h2><p>width: ' + window.screen.width + '</p>';
msg += '<p>heigth: ' + window.screen.heigth + '</p>';

msg += '<p>document.title' + document.title + '</p>';
msg += '<p>document.lastModified' + document.lastModified + '</p>';
msg += '<p>document.URL' + document.URL + '</p>';
msg += '<p>document.domain' + document.domain + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;

var ramdomNum = Math.floor( ( Math.random() * 10 ) + 1 );
el = document.getElementById('ran');
el.innerHTML = ramdomNum;