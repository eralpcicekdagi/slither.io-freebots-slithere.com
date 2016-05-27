// ==UserScript==
// @name         Slithere.com Free Bot
// @namespace    Slithere.com Free Bot
// @version      1.0
// @description  Slither.io Free Bots by Slithere.com
// @author       Slithere.com
// @match        http://slither.io/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.5/socket.io.min.js
// @grant        none
// ==/UserScript==

// Bot Name:
var bname = "Slithere.com < FREE BOT";

// Server Ip Address:
var socket = io.connect('ws://127.0.0.1:3000');






// Dont touch :/
var s = document.createElement('script');
s.src = 'https://code.jquery.com/jquery-1.12.3.min.js';
s.onload = function() {
	document.head.innerHTML += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">';
	var s = document.createElement('script');
};

var _0xb3e7=["hide","iframe :first",'<div style="position: absolute; top: 160px; left: 10px; padding: 0px 8px; font-family: Tahoma; color: rgb(255, 255, 255); z-index: 9999; border-radius: 5px; height: 155px; min-width: 200px; background-color: rgba(0, 0, 0, 0.6);"><hr><center> <b>Bots:</b> <a id="count" style="color:red"><b>Offline</a><br> <b> X - Snake Boost<a id="isspeed" style="color:lightgreen"> Off</a>         <br>   <button id="start" style="width: 150px; height: 25px; background:#ff3333; border: 0px; border-radius: 5px;">Connect</button> <br></br> <b><a href="http://slithere.com" target="_blank" style="width: 185px; height: 35px; background:#ffffff; border: 0px;">Slithere.com [CLICK]</a><br><a href="http://diepiomods.com" target="_blank" style="width: 185px; height: 35px; background:#ffffff; border: 0px;">Diepiomods.com [CLICK]</a></center><hr></div></b></div>',"after","canvas:eq(1)","src","http://slither.io/s/bg45.jpg","textContent","Leaderboard","onmousewheel","body","wheelDelta","detail","pow","snake","xx","yy","pos","emit","onkeydown","keyCode","cmd"," On","text","#isspeed","onkeyup"," Off","bcount","#count","on","background","#4dff4d","css","#start","Stop Connection","bso","","ip",":","po","server","Try refresh page : /","log","#ff3333","Connect","click","bname"]
var updatespeed=100;
var ii=[];
var lbh=[];
$(_0xb3e7[1])[_0xb3e7[0]]();
$(_0xb3e7[4])[_0xb3e7[3]](_0xb3e7[2]);
ii[_0xb3e7[5]]=_0xb3e7[6];
lbh[_0xb3e7[7]]=_0xb3e7[8];
document[_0xb3e7[10]][_0xb3e7[9]]=zoom;
function zoom(_0xaea2x5)
{
	gsc*=Math[_0xb3e7[13]](0.9,_0xaea2x5[_0xb3e7[11]]/-120||_0xaea2x5[_0xb3e7[12]]||0)
}
setInterval(function()
{
	if(window[_0xb3e7[14]]!==undefined)
	{
		var _0xaea2x6=snake[_0xb3e7[15]];
		var _0xaea2x7=snake[_0xb3e7[16]];
		socket[_0xb3e7[18]](_0xb3e7[17],_0xaea2x6,_0xaea2x7)
	}
}
,updatespeed);
window[_0xb3e7[19]]=function(_0xaea2x5)
{
	if(_0xaea2x5[_0xb3e7[20]]===88)
	{
		socket[_0xb3e7[18]](_0xb3e7[21],1);
		$(_0xb3e7[24])[_0xb3e7[23]](_0xb3e7[22])
	}
}
;
window[_0xb3e7[25]]=function(_0xaea2x5)
{
	if(_0xaea2x5[_0xb3e7[20]]===88)
	{
		socket[_0xb3e7[18]](_0xb3e7[21],0);
		$(_0xb3e7[24])[_0xb3e7[23]](_0xb3e7[26])
	}
}
;
socket[_0xb3e7[29]](_0xb3e7[27],function(_0xaea2x8)
{
	$(_0xb3e7[28])[_0xb3e7[23]](_0xaea2x8)
}
);
var st_click=0;
$(_0xb3e7[33])[_0xb3e7[45]](function()
{
	if(st_click==0)
	{
		st_click=1;
		$(_0xb3e7[33])[_0xb3e7[32]](_0xb3e7[30],_0xb3e7[31]);
		$(_0xb3e7[33])[_0xb3e7[23]](_0xb3e7[34]);
		if(window[_0xb3e7[35]]!==undefined)
		{
			var _0xaea2xa=_0xb3e7[36]+bso[_0xb3e7[37]]+_0xb3e7[38]+bso[_0xb3e7[39]];
			socket[_0xb3e7[18]](_0xb3e7[40],_0xaea2xa)
		}
		else 
		{
			console[_0xb3e7[42]](_0xb3e7[41])
		}
	}
	else 
	{
		st_click=0;
		$(_0xb3e7[33])[_0xb3e7[32]](_0xb3e7[30],_0xb3e7[43]);
		$(_0xb3e7[33])[_0xb3e7[23]](_0xb3e7[44])
	}
}
);
socket[_0xb3e7[18]](_0xb3e7[46],bname)
