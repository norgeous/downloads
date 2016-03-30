var linux32 = ['i386','i486','i586','i686','armv7','armv6'];
var linux64 = ['x86_64','amd64','armv8'];
var windo64 = ['WOW64','Win64','x64'];

function c(needles,haystack){
	var f=false;
	for(var i=0; i<needles.length; i++)	if(haystack.indexOf(needles[i]) > -1) f=true;
	return f;
};

function ua2dl(ua){
	var out = [];
	if(c(['DragonFly'],ua)	&& !c(linux32,ua))
	out.push('Dragonfly BSD (64 bit)');

	if(c(['FreeBSD'],ua)	&& c(linux32,ua))
	out.push('FreeBSD (32 bit)');

	if(c(['FreeBSD'],ua)	&& c(linux64,ua))
	out.push('FreeBSD (64 bit)');

	if(c(['Linux'],ua)		&& c(linux32,ua)		&& !c(['Linux arm','Android'],ua))
	out.push('Linux (32 bit)');

	if(c(['Linux'],ua)		&& c(linux64,ua)		&& !c(['Linux arm','Android'],ua))
	out.push('Linux (64 bit)');

	if(c(['Linux arm'],ua)	&& c(linux32,ua)		&& !c(['Android'],ua))
	out.push('Linux (ARM 32-bit)');

	if(c(['Linux arm'],ua)	&& c(linux64,ua)		&& !c(['Android'],ua))
	out.push('Linux (ARM 64-bit)');

	if(c(['Linux'],ua)		&& c(['ppc64'],ua))
	out.push('Linux (ppc64)');

	//Linux (ppc64le)
	//help needed

	if(c(['Mac OS X'],ua)	&& !c(['PPC','iPod','iPhone','iPad','10_6_7','10_6_6','10_6_5','10_6_4','10_6_3','10_6_2','10_6_1','10_6_0','10_5'],ua))
	out.push('Mac OS X (64 bit)');

	if(c(['NetBSD'],ua)		&& c(linux32,ua))
	out.push('NetBSD (32 bit)');

	if(c(['NetBSD'],ua)		&& c(linux64,ua))
	out.push('NetBSD (64 bit)');

	if(c(['OpenBSD'],ua)	&& c(linux32,ua))
	out.push('OpenBSD (32 bit)');

	if(c(['OpenBSD'],ua)	&& c(linux64,ua))
	out.push('OpenBSD (64 bit)');

	if(c(['SunOS'],ua))
	out.push('Solaris/Illumos/SmartOS (64 bit)');

	if(c(['Win'],ua)		&& !c(windo64,ua))
	out.push('Windows (32 bit)');

	if(c(['Win'],ua)		&& c(windo64,ua))
	out.push('Windows (64 bit)');

	if(c(['Android'],ua))
	out.push('Android App google play or fdroid');

	return out;
};


$(function() {

	var res = ua2dl(navigator.userAgent);
	for(var i=0; i<res.length; i++)	$('a:contains('+res[i]+')').addClass('highlight');

});