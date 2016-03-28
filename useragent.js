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
	WOW64 is Windows 32-bit (process) on Windows 64-bit (OS)


*/


$(function() {

	var bits32 = ['i386', 'i486', 'i586', 'i686', 'armv7', 'armv6'];
	var bits64 = ['x86_64', 'amd64', 'WOW64', 'Win64', 'x64', 'armv8'];
	var ua;// = navigator.userAgent;

	function c(needle){
		switch(typeof needle){
			case 'string':
				return ua.indexOf(needle) > -1;
				break;
			case 'object':
				var f=false;
				for(var i=0; i<needle.length; i++){
					if(ua.indexOf(needle[i]) > -1) f=true;
				}
				return f;
				break;
		}
	};

	function ua2dl(testme){
		ua = testme;
		var out = '';

		if(c('DragonFly') && !c(bits32)) {
			out+='<div>Syncthing for Dragonfly BSD (64 bit)</div>';
		}

		if(c('FreeBSD') && c(bits32)) {
			out+='<div>Syncthing for FreeBSD (32 bit)</div>';
		}

		if(c('FreeBSD') && c(bits64)) {
			out+='<div>Syncthing for FreeBSD (64 bit)</div>';
		}

		if(c('Linux') && !c('Linux arm') && !c('Android') && c(bits32)) {
			out+='<div>Syncthing for Linux (32 bit)</div>';
		}

		if(c('Linux') && !c('Linux arm') && !c('Android') && c(bits64)) {
			out+='<div>Syncthing for Linux (64 bit)</div>';
		}

		if(c('Linux arm') && c(bits32)) {
			out+='<div>Syncthing for Linux (ARM 32-bit)</div>';
		}

		if(c('Linux arm') && c(bits64)) {
			out+='<div>Syncthing for Linux (ARM 64-bit)</div>';
		}

		if(c('Linux') && c('ppc64')) {
			out+='<div>Syncthing for Linux (ppc64)</div>';
		}

		//Syncthing for Linux (ppc64le)

		if(c('Mac OS X') && !c(['iPod','iPhone','iPad'])) {
			out+='<div>Syncthing for Mac OS X (64 bit)</div>';
		}

		if(c('NetBSD') && c(bits32)) {
			out+='<div>Syncthing for NetBSD (32 bit)</div>';
		}

		if(c('NetBSD') && c(bits64)) {
			out+='<div>Syncthing for NetBSD (64 bit)</div>';
		}

		if(c('OpenBSD') && c(bits32)) {
			out+='<div>Syncthing for OpenBSD (32 bit)</div>';
		}

		if(c('OpenBSD') && c(bits64)) {
			out+='<div>Syncthing for OpenBSD (64 bit)</div>';
		}

		if(c('SunOS')) {
			out+='<div>Syncthing for Solaris/Illumos/SmartOS (64 bit)</div>';
		}

		if(c('Win') && !c(bits64)) {
			out+='<div>Syncthing for Windows (32 bit)</div>';
		}

		if(c('Win') && c(bits64)) {
			out+='<div>Syncthing for Windows (64 bit)</div>';
		}

		if(c('Android')) {
			out+='<div>Android App google play or fdroid</div>';
		}

		return out;
	};


	$('#debug-you').append('<tr><td>'+navigator.userAgent+'</td><td>'+ua2dl(navigator.userAgent)+'</td></tr>');


	// test more agents
	$('#debug-more').hide(0);
	for(var i=0; i<test_useragents.length; i++){
		$('#debug-more').append('<tr><td>'+test_useragents[i]+'</td><td>'+ua2dl(test_useragents[i])+'</td></tr>');
	}

	$('#expand-more').click(function(e){
		e.preventDefault();
		$('#debug-more').show(1000);
	});


});