// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery.turbolinks
//= require turbolinks
//= require_tree .

//
// アセットパイプラインの仕様で、最初にjavascriptが走ってから、
// HTMLが読まれるようだ。
// なので、HTML操作文をそのまま書くと、javascriptが
// 取得できずに落ちてしまう。
// なので、HTMLが読まれた後に表示するイベントリスナーに
// HTMLの操作コードを記述する必要がある。
// 
(function() {
    document.addEventListener('DOMContentLoaded', function(e) {
        var date, hour, label, minutes, seconds;

        date = new Date();
        
        hour = date.getHours();
        
        minutes = date.getMinutes();
        
        seconds = date.getSeconds();
        
        label = document.querySelector('#test');
        
        label.innerHTML = hour + "時" + minutes + "分" + seconds + "秒" + 'こんにちはああああ';

        
    });
})();

// setIntervalは指定の時間に指定の関数を実行することができる。
function showClock1() {
    var date, hour, label, minutes, seconds;

    date = new Date();

    hour = date.getHours();

    minutes = date.getMinutes();

    seconds = date.getSeconds();

    label = document.querySelector('#test');

    label.innerHTML = hour + "時" + minutes + "分" + seconds + "秒" + 'こんにちはああああ';
}
setInterval('showClock1()',1000);
