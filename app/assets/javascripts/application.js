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

// カウントダウン数を保持する変数
let countdown = 0;

(function() {
    document.addEventListener('DOMContentLoaded', function(e) {
        let date, hour, label, minutes, seconds;

        date = new Date();
        
        hour = date.getHours();
        
        minutes = date.getMinutes();
        
        seconds = date.getSeconds();
        
        label = document.querySelector('#test');
        
        label.innerHTML = hour + "時" + minutes + "分" + seconds + "秒" + 'こんにちはああああ';

        // ポモロード数の表示（初回の0のみ）
        pomonum = document.querySelector('#pomonum');

        pomonum.innerHTML = countdown; 

        
    });
})();

// setIntervalは指定の時間に指定の関数を実行することができる。
function showClock1() {
    let date, hour, label, minutes, seconds;

    date = new Date();

    hour = date.getHours();

    minutes = date.getMinutes();

    seconds = date.getSeconds();

    label = document.querySelector('#test');

    label.innerHTML = hour + "時" + minutes + "分" + seconds + "秒" + 'こんにちはああああ';
}
setInterval('showClock1()',1000);




// ボタンが押されたら、カウントダウンする処理
function OnButtonClick() {

    // 
    // カウントダウン処理
    //
    const totalTime = 10000;
    const oldTime = Date.now();

    // アロー関数を使用
    const timerId = setInterval( () => {
        const currentTime = Date.now();
        // 差分を求める
        const diff = currentTime - oldTime;

        // 残りミリ秒を計算する
        const remainMSec = totalTime - diff;
        // ミリ秒を整数の秒数に変換する
        const remainSec = Math.ceil(remainMSec / 1000);

        let label =  "残り" + remainSec + "秒";


        // 0秒以下になったら
        if(remainSec <= 0){
            // タイマーの終了の文言を表示
            // letがスコープ外になっちゃってる。見れてない
            label = "終了";

            // 画面に表示する
            document.querySelector('#timer').innerHTML = label;

            // カウントダウン数を加算
            countdown++;

            // ポモロード数の更新
            pomonum = document.querySelector('#pomonum');

            pomonum.innerHTML = countdown;

            // タイマーを終了する
            clearInterval(timerId);

            
        }else{
            // 画面に表示する
            document.querySelector('#timer').innerHTML = label;
        }

        

    }, 1000);
}

