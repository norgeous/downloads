/*
BIT NOTES:

linux architectures:
	x86 is 32-bit
	i386, i486, i586, i686 are x86
	x86_64 is 64-bit
	amd64 is 64-bit

arm architectures:
	ARMv7 variants and below are all 32-bit
	ARMv8 introduces the 64-bit

ppc architectures:
	ppc64le is the designation for little-endian POWER8 (and newer) processors
	ppc somehow related to mac os, maybe older macs?

mac architecures:
	Mac OS X 10.6.8 (or greater) is a 64-bit operating system

windows architectures:
	WOW64 is Windows 32-bit (browser process) on Windows 64-bit (OS)


*/


$(function() {

	var linux32 = ['i386','i486','i586','i686','armv7','armv6'];
	var linux64 = ['x86_64','amd64','armv8'];
	var windo64 = ['WOW64','Win64','x64'];

	function c(needles,haystack){
		var f=false;
		for(var i=0; i<needles.length; i++)	if(haystack.indexOf(needles[i]) > -1) f=true;
		return f;
	};

	function ua2dl(ua){
		var out = '';
		if(c(['DragonFly'],ua)	&& !c(linux32,ua))
		out+='<div>Syncthing for Dragonfly BSD (64 bit)</div>';

		if(c(['FreeBSD'],ua)	&& c(linux32,ua))
		out+='<div>Syncthing for FreeBSD (32 bit)</div>';

		if(c(['FreeBSD'],ua)	&& c(linux64,ua))
		out+='<div>Syncthing for FreeBSD (64 bit)</div>';

		if(c(['Linux'],ua)		&& c(linux32,ua)		&& !c(['Linux arm','Android'],ua))
		out+='<div>Syncthing for Linux (32 bit)</div>';

		if(c(['Linux'],ua)		&& c(linux64,ua)		&& !c(['Linux arm','Android'],ua))
		out+='<div>Syncthing for Linux (64 bit)</div>';

		if(c(['Linux arm'],ua)	&& c(linux32,ua)		&& !c(['Android'],ua))
		out+='<div>Syncthing for Linux (ARM 32-bit)</div>';

		if(c(['Linux arm'],ua)	&& c(linux64,ua)		&& !c(['Android'],ua))
		out+='<div>Syncthing for Linux (ARM 64-bit)</div>';

		if(c(['Linux'],ua)		&& c(['ppc64'],ua))
		out+='<div>Syncthing for Linux (ppc64)</div>';

		//Syncthing for Linux (ppc64le)
		//help needed

		if(c(['Mac OS X'],ua)	&& !c(['PPC','iPod','iPhone','iPad','10_6_7','10_6_6','10_6_5','10_6_4','10_6_3','10_6_2','10_6_1','10_6_0','10_5'],ua))
		out+='<div>Syncthing for Mac OS X (64 bit)</div>';

		if(c(['NetBSD'],ua)		&& c(linux32,ua))
		out+='<div>Syncthing for NetBSD (32 bit)</div>';

		if(c(['NetBSD'],ua)		&& c(linux64,ua))
		out+='<div>Syncthing for NetBSD (64 bit)</div>';

		if(c(['OpenBSD'],ua)	&& c(linux32,ua))
		out+='<div>Syncthing for OpenBSD (32 bit)</div>';

		if(c(['OpenBSD'],ua)	&& c(linux64,ua))
		out+='<div>Syncthing for OpenBSD (64 bit)</div>';

		if(c(['SunOS'],ua))
		out+='<div>Syncthing for Solaris/Illumos/SmartOS (64 bit)</div>';

		if(c(['Win'],ua)		&& !c(windo64,ua))
		out+='<div>Syncthing for Windows (32 bit)</div>';

		if(c(['Win'],ua)		&& c(windo64,ua))
		out+='<div>Syncthing for Windows (64 bit)</div>';

		if(c(['Android'],ua))
		out+='<div>Android App google play or fdroid</div>';

		return out;
	};

	$('#debug-you').append('<tr><td>'+navigator.userAgent+'</td><td>'+ua2dl(navigator.userAgent)+'</td></tr>');

	for(var i=0; i<test_useragents.length; i++){
		$('#debug-more').append('<tr><td>'+test_useragents[i]+'</td><td>'+ua2dl(test_useragents[i])+'</td></tr>');
	}

});