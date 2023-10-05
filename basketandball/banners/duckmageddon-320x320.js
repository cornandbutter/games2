﻿(function()
{

var isAndroid = window[ "eso_platform_type_" ] == "android";
var isIOS = window[ "eso_platform_type_" ] == "ios";

var a = document.createElement( 'a' );

if( isAndroid )
	a.href = 'https://goo.gl/Gxsafs';
else
if( isIOS )
	a.href = 'https://goo.gl/qQf0Hp';
else
	a.href = 'https://chrome.google.com/webstore/detail/duckmageddon/fmgadobccheichaidnapnfcoblogfkhp';

a.style.position = 'absolute';
a.style.padding = 0;
a.style.margin = 0;
a.style.display = 'inline-block';
a.style.overflow = 'hidden';
a.target = '_blank';

var im = new Image();
im.src = 'banners/duckmageddon-320x320.jpg';
im.style['border-style'] = 'none';
im.style.padding = 0;
im.style.margin = 0;
im.style.display = 'inline-block';
im.style.float = 'left';
im.style.height = 'auto';

a.appendChild(im);

function update_F( s, dt )
{
	im.style.width = 320 * s + 'px';
}

function IsImageOk(img) {
    // During the onload event, IE correctly identifies any images that
    // weren’t downloaded as not complete. Others should too. Gecko-based
    // browsers act like NS4 in that they report this incorrectly.
    if (!img.complete) {
        return false;
    }

    // However, they do have two very useful properties: naturalWidth and
    // naturalHeight. These give the true size of the image. If it failed
    // to load, either of these should be zero.

    if (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0) {
        return false;
    }

    // No other way of checking: assume it’s ok.
    return true;
}

function isLoaded_F()
{
	return IsImageOk( im );
}

window['eso_interstitial_objects_'].push( 
{
	elem : a,
	width : 320,
	height : 320,
	platform : 'any',
	update : update_F,
	isLoaded : isLoaded_F
})

})();