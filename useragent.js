
var test_useragents = [

//Dragonfly BSD (64 bit)
	'Mozilla/5.0 (compatible; Konqueror/4.1; DragonFly) KHTML/4.1.4 (like Gecko)',
	'Mozilla/5.0 (compatible; Konqueror/3.5; DragonFly) KHTML/3.5.10 (like Gecko)',
	'Mozilla/5.0 (X11; U; DragonFly i386; de; rv:1.9.1) Gecko/20090720 Firefox/3.5.1',		//32 bit example (anti pattern?)
	'Mozilla/5.0 (X11; U; DragonFly i386; en-US; rv:1.6) Gecko/20040325',					//32 bit example (anti pattern?)
	'Links (2.2; DragonFly 2.0.0-RELEASE i386; x)',											//32 bit example (anti pattern?)
	'mMosaic/3.7.2 (X11;DragonFly 2.0.0-RELEASE i386)',										//32 bit example (anti pattern?)

//FreeBSD (32 bit)
	'Mozilla/5.0 (X11; U; FreeBSD i386; pl; rv:1.8.1.12) Gecko/20080213 Epiphany/2.20 Firefox/2.0.0.12',
	'Mozilla/5.0 (X11; FreeBSD i386; rv:28.0) Gecko/20100101 Firefox/28.0 SeaMonkey/2.25',

//FreeBSD (64 bit)
	'Mozilla/5.0 (X11; U; FreeBSD amd64; en-US; rv:1.8.0.8) Gecko/20061116 Firefox/1.5.0.8',

//Linux (32 bit)
	'Mozilla/5.0 (X11; U; Linux i586; en-US; rv:1.1) Gecko/20020826',
	'Mozilla/5.0 (X11; U; Linux i386; en-US; rv:1.1) Gecko/20020826',
	'Mozilla/5.0 (X11; Linux i686; rv:21.0) Gecko/20100101 Firefox/21.0',
	'Mozilla/5.0 (X11; U; Linux i686; en-gb) AppleWebKit/525.1+ (KHTML, like Gecko, Safari/525.1+) epiphany-webkit',

//Linux (64 bit)
	'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:21.0) Gecko/20130331 Firefox/21.0',
	'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:21.0) Gecko/20100101 Firefox/21.0',
	'Mozilla/5.0 (X11; U; Linux x86_64; en; rv:1.9.0.14) Gecko/20080528 Ubuntu/9.10 (karmic) Epiphany/2.22 Firefox/3.0',
	'Mozilla/5.0 (X11; U; Linux x86_64; zh-TW; rv:1.9.0.8) Gecko/2009032712 Ubuntu/8.04 (hardy) Firefox/3.0.8 GTB5',
	'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:40.0) Gecko/20100101 Firefox/40.0',
	'Mozilla/5.0 (X11; U; Linux amd64; rv:5.0) Gecko/20100101 Firefox/5.0 (Debian)',

//Linux (ARM 32-bit)
	'Mozilla/5.0 (X11; Linux armv6l; rv:10.0.6) Gecko/20100101 Firefox/10.0.6 Iceweasel/10.0.6',

//Linux (ARM 64 bit)
	'Mozilla/5.0 (X11; U; Linux armv7l; en-US) AppleWebKit/5341.6 (KHTML, like Gecko) Chrome/10.0.648.204 Safari/534.16',
	'Mozilla/5.0 (X11; U; OpenBSD arm; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Safari/531.2+ Epiphany/2.30.0',
	'Mozilla/5.0 (X11; Ubuntu; Linux armv7l; rv:17.0) Gecko/20100101 Firefox/17.0',
	'Mozilla/5.0 (X11; U; Linux armv7l; en-US; rv:1.9.2.14) Gecko/20110224 Firefox/3.6.14 MB860/Version.0.43.3.MB860.AmericaMovil.en.MX',
	'Mozilla/5.0 (X11; U; Linux armv7l; en-GB; rv:1.9.2.3pre) Gecko/20100723 Firefox/3.6.11',

//Linux (ppc64)
	'Mozilla/5.0 (X11; Fedora; Linux ppc64; rv:37.0) Gecko/20100101 Firefox/37.0',
	'Mozilla/5.0 (X11; Fedora; Linux ppc64; rv:37.0) Gecko/20100101 Firefox/37.0',

//Linux (ppc64le)
	//needed

//Mac OS X (64 bit)
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en-US; rv:1.5b) Gecko/20030917 Camino/0.7+',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US; rv:1.0.1) Gecko/20021104 Chimera/0.6',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11) AppleWebKit/601.1.27 (KHTML, like Gecko) Version/8.1 Safari/601.1.27',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11) AppleWebKit/601.1.32 (KHTML, like Gecko) Version/8.1 Safari/601.1.32',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10) AppleWebKit/538.34.48 (KHTML, like Gecko) Version/8.0 Safari/538.35.8',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10) AppleWebKit/538.32 (KHTML, like Gecko) Version/7.1 Safari/538.4',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.38 Safari/537.36',

//NetBSD (32 bit)
	'NetSurf/1.2 (NetBSD; i386; NetBSD 4.99.59 i386)',
	'Mozilla/5.0 (X11; NetBSD i386; rv:25.0) Gecko/20100101 Firefox/25.0',

//NetBSD (64 bit)
	'Mozilla/5.0 (X11; U; NetBSD; en-US; rv:1.8.1.6) Gecko/20080115 Firefox/2.0.0.6',
	'Mozilla/5.0 (X11; NetBSD amd64; rv:16.0) Gecko/20121102 Firefox/16.0',

//OpenBSD (32 bit)
	'Mozilla/5.0 (X11; U; OpenBSD i386; en-US; rv:1.7.13) Gecko/20060901',

//OpenBSD (64 bit)
	'Mozilla/5.0 (X11; OpenBSD amd64; rv:28.0) Gecko/20100101 Firefox/28.0',

//Solaris/Illumos/SmartOS (64 bit)
	'Mozilla/4.79 [en] (X11; U; SunOS 5.10 i86pc)',
	'Mozilla/5.0 (X11; U; SunOS sun4u; en-US; rv:1.8.1.11) Gecko/20080118 Firefox/2.0.0.11',
	'Mozilla/5.0 (X11; U; SunOS sun4m; en-US; rv:1.4b) Gecko/20030517 Mozilla Firebird/0.6',

//Windows (32 bit)
	'Mozilla/4.0 (compatible; MSIE 4.01; Windows 95)',
	'Mozilla/4.0 (compatible; MSIE 5.0; Windows 95) Opera 6.02 [en]',
	'Mozilla/4.0 (compatible; MSIE 5.5; AOL 6.0; Windows 95)',
	'Mozilla/4.7 [en] (Win95; I)',
	'Mozilla/5.0 (Windows; U; Win95; en-US; rv:1.5) Gecko/20031007 Firebird/0.7',
	'Mozilla/2.0 (compatible; MSIE 3.0; Windows 95)',
	'Mozilla/5.0 (Windows NT 6.1; rv:21.0) Gecko/20130401 Firefox/21.0',
	'Mozilla/5.0 (Windows NT 6.1; rv:21.0) Gecko/20130328 Firefox/21.0',
	'Mozilla/5.0 (Windows NT 6.1; rv:21.0) Gecko/20100101 Firefox/21.0',
	'Mozilla/5.0 (Windows NT 5.1; rv:21.0) Gecko/20130401 Firefox/21.0',
	'Mozilla/5.0 (Windows NT 5.1; rv:21.0) Gecko/20130331 Firefox/21.0',
	'Mozilla/5.0 (Windows NT 5.1; rv:21.0) Gecko/20100101 Firefox/21.0',
	'Mozilla/5.0 (Windows NT 5.0; rv:21.0) Gecko/20100101 Firefox/21.0',
	'Mozilla/5.0 (Windows NT 6.2; rv:21.0) Gecko/20130326 Firefox/21.0',

//Windows (64 bit)
	'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:21.0) Gecko/20130514 Firefox/21.0',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20130401 Firefox/21.0',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20130331 Firefox/21.0',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20130330 Firefox/21.0',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0',
	'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0',
	'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.108 Safari/537.36',

//Android examples:
	'Mozilla/5.0 (Linux; Android 4.4; Nexus 7 Build/KOT24) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.105 Safari/537.36',
	'Mozilla/5.0 (Linux; Android 4.4; Nexus 4 Build/KRT16E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.105 Mobile Safari',
	'Mozilla/5.0 (Android; Linux armv7l; rv:9.0) Gecko/20111216 Firefox/9.0 Fennec/9.0',
	'Mozilla/5.0 (Android; U; Android; pl; rv:1.9.2.8) Gecko/20100202 Firefox/3.5.8',
	'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
	'Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
	'Mozilla/5.0 (Linux; U; Android 2.3; en-us) AppleWebKit/999+ (KHTML, like Gecko) Safari/999.9',
	'Mozilla/5.0 (Linux; U; Android 2.3.5; zh-cn; HTC_IncredibleS_S710e Build/GRJ90) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.4; fr-fr; HTC Desire Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; T-Mobile myTouch 3G Slide Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.3; zh-tw; HTC_Pyramid Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.3; zh-tw; HTC_Pyramid Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari',
	'Mozilla/5.0 (Linux; U; Android 2.3.3; zh-tw; HTC Pyramid Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.3; ko-kr; LG-LU3000 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; HTC_DesireS_S510e Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; HTC_DesireS_S510e Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile',
	'Mozilla/5.0 (Linux; U; Android 2.3.3; de-de; HTC Desire Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.3; de-ch; HTC Desire Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.2; fr-lu; HTC Legend Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.2; en-sa; HTC_DesireHD_A9191 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.2.1; fr-fr; HTC_DesireZ_A7272 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; HTC_DesireZ_A7272 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; LG-P505R Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',

//Random
	'Science Traveller International 1X/1.0',
	'Mozilla/3.0 (compatible)',
	'amaya/9.52 libwww/5.4.0 ',
	'amaya/9.51 libwww/5.4.0',
	'amaya/9.1 libwww/5.4.0',
	'amaya/6.2 libwww/5.3.1',
	'AmigaVoyager/3.4.4 (MorphOS/PPC native)',
	'Debian APT-HTTP/1.3 (0.9.7.5ubuntu5.1)',
	'Ubuntu APT-HTTP/1.3 (0.7.23.1ubuntu2) ',
	'Ubuntu APT-HTTP/1.3',
	'xChaos_Arachne/5.1.89;GPL,386+',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3)  Arora/0.3 (Change: 287 c9dfb30)',
	'Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3)  Arora/0.2 (Change: 0 )',
	'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322; FDM)',
	'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; Avant Browser [avantbrowser.com]; Hotbar 4.4.5.0)',
	'Amiga-AWeb/3.5.07 beta',
	'Mozilla/6.0; (Spoofed by Amiga-AWeb/3.5.07 beta)',
	'MSIE/6.0; (Spoofed by Amiga-AWeb/3.4APL)',
	'gnome-vfs/2.12.0 neon/0.24.7',
	'bluefish 0.6 HTML editor',
	'Mozilla/4.61 [en] (X11; U; ) - BrowseX (2.0.0 Windows)',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10.4; en; rv:1.9.0.19) Gecko/2011091218 Camino/2.0.9 (like Firefox/3.0.19)',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en; rv:1.9.0.19) Gecko/2011032020 Camino/2.0.7 (like Firefox/3.0.19)',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en; rv:1.8.1.14) Gecko/20080409 Camino/1.6 (like Firefox/2.0.0.14)',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-US; rv:1.8.0.1) Gecko/20060118 Camino/1.0b2+',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en-US; rv:1.5b) Gecko/20030917 Camino/0.7+',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US; rv:1.0.1) Gecko/20021104 Chimera/0.6',
	'Mozilla/4.08 (Charon; Inferno)',
	'Mozilla/2.0 compatible; Check&amp;Get 1.14 (Windows NT)',
	'Chimera/2.0alpha',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36',
	'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/43.0.2357.81 Chrome/43.0.2357.81 Safari/537.36',
	'Mozilla/5.0 (Linux; Android 5.1; SHIELD Android TV Build/LMY47D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.93 Mobile Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.124 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.124 Safari/537.36',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.124 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36',
	'Mozilla/5.0 (X11; CrOS x86_64 6457.94.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.114 Safari/537.36',
	'Mozilla/5.0 (Linux; Android 4.4.2; 7040N Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.109 Mobile Safari/537.36',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 Safari/537.36',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.146 Safari/537.36',
	'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.107 Safari/537.36',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.94 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_3) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.43 Safari/537.31',
	'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.22 (KHTML, like Gecko) Ubuntu Chromium/25.0.1364.160 Chrome/25.0.1364.160 Safari/537.22',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.97 Safari/537.22',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.57 Safari/537.17',
	'Mozilla/5.0 (X11; CrOS armv7l 2913.260.0) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.99 Safari/537.11',
	'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.27 (KHTML, like Gecko) Chrome/26.0.1389.0 Safari/537.27',
	'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.12 (KHTML, like Gecko) Chrome/24.0.1273.0 Safari/537.12',
	'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.95 Safari/537.11',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.79 Safari/537.4',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.57 Safari/536.11',
	'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.75 Safari/537.1',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.47 Safari/536.11',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.47 Safari/536.11',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.56 Safari/536.5',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.56 Safari/536.5',
	'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.56 Safari/536.5',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.52 Safari/536.5',
	'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.168 Safari/535.19',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.152 Safari/535.19',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.79 Safari/535.11',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.66 Safari/535.11',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.0 Safari/535.11',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.77 Safari/535.7',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.75 Safari/535.7',
	'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.63 Safari/535.7',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.874.121 Safari/535.2',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.202 Safari/535.1',
	'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.186 Safari/535.1',
	'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.126 Safari/535.1',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_3) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.220 Safari/535.1',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.220 Safari/535.1',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.215 Safari/535.1',
	'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.60 Safari/534.30',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.71 Safari/534.24',
	'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.60 Safari/534.24',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.57 Safari/534.24',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.205 Safari/534.16',
	'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.204 Safari/534.16',
	'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.133 Safari/534.16',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.133 Safari/534.16',
	'Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.127 Safari/534.16',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/534.13 (KHTML, like Gecko) Chrome/9.0.597.98 Safari/534.13',
	'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.10 (KHTML, like Gecko) Chrome/8.0.552.237 Safari/534.10',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/534.3 (KHTML, like Gecko) Chrome/6.0.472.63 Safari/534.3',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.127 Safari/533.4',
	'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.125 Safari/533.4',
	'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.125 Safari/533.4',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.99 Safari/533.4',
	'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.1 (KHTML, like Gecko) Chrome/5.0.322.2 Safari/533.1',
	'Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/532.9 (KHTML, like Gecko) Chrome/5.0.307.9 Safari/532.9',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_2; en-US) AppleWebKit/532.9 (KHTML, like Gecko) Chrome/5.0.307.11 Safari/532.9',
	'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/532.5 (KHTML, like Gecko) Chrome/4.0.249.78 Safari/532.5',
	'Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/532.4 (KHTML, like Gecko) Chrome/4.0.233.0 Safari/532.4',
	'Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US) AppleWebKit/532.0 (KHTML, like Gecko) Chrome/3.0.198.0 Safari/532.0',
	'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; Valve Steam GameOverlay; ) AppleWebKit/532.1 (KHTML, like Gecko) Chrome/3.0.195.24 Safari/532.1',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Version/3.1 Safari/525.13',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/532.0 (KHTML, like Gecko) Chrome/3.0.195.33 Safari/532.0',
	'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Chrome/1.0.154.53 Safari/525.19',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7; en-US) AppleWebKit/531.0 (KHTML, like Gecko) Chrome/3.0.183 Safari/531.0',
	'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Chrome/1.0.154.53 Safari/525.19',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Chrome/1.0.154.36 Safari/525.19',
	'Mozilla/5.0 (Linux; U; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.27 Safari/525.13',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Version/3.1 Safari/525.13',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.27 Safari/525.13',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.122 Safari/534.30 ChromePlus/1.6.3.1',
	'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/532.5 (KHTML, like Gecko) Comodo_Dragon/4.0.1.6 Chrome/4.0.249.78 Safari/532.5',
	'Contiki/1.0 (Commodore 64; http://dunkels.com/adam/contiki/)',
	'Contiki/1.0 (Commodore 64; http://dunkels.com/adam/contiki/)',
	'curl/7.19.5 (i586-pc-mingw32msvc) libcurl/7.19.5 OpenSSL/0.9.8l zlib/1.2.3',
	'curl/7.7.2 (powerpc-apple-darwin6.0) libcurl 7.7.2 (OpenSSL 0.9.6b)',
	'Democracy/0.8.1 (http://www.participatoryculture.org)',
	'Dillo/3.0.4.1',
	'Dillo/3.0.2',
	'Mozilla/4.0 (compatible; Dillo 2.2)',
	'Dillo/2.2',
	'Dillo/0.8.6',
	'Dillo/2.0',
	'Dillo/0.8.5-i18n-misc',
	'Dillo/0.8.5-pre',
	'Dillo/0.8.3',
	'Dillo/0.8.2',
	'Dillo/0.8.2',
	'Dillo/0.6.6',
	'DocZilla/1.0 (Windows; U; WinNT4.0; en-US; rv:1.0.0) Gecko/20020804',
	'edbrowse/2.2.10',
	'ELinks/0.10.4-7.1-debian (textmode; Linux 2.4.27-amiga m68k; 80x32-3)',
	'ELinks/0.12~pre2.dfsg0-1ubuntu1-lite (textmode; Debian; Linux 2.6.32-4-jolicloud i686; 143x37-2)',
	'ELinks/0.12pre5.GIT (textmode; CYGWIN_NT-6.1 1.7.1(0.218/5/3) i686; 80x24-2)',
	'ELinks/0.11.3-5ubuntu2-lite (textmode; Debian; Linux 2.6.24-19-generic i686; 126x37-2)',
	'ELinks/0.11.4-2 (textmode; Debian; GNU/kFreeBSD 6.3-1-486 i686; 141x21-2)',
	'ELinks (0.4.3; NetBSD 3.0.2_PATCH sparc64; 141x19)',
	'ELinks/0.10.4-7ubuntu1-debian (textmode; Linux 2.6.12-10-k7-smp i686; 80x24-2)',
	'ELinks/0.10.5 (textmode; CYGWIN_NT-5.0 1.5.18(0.132/4/2) i686; 143x51-2)',
	'ELinks (0.4.2; Linux; )',
	'URL/Emacs',
	'Emacs-W3/4.0pre.46 URL/p4.0pre.46 (i686-pc-linux; X11)',
	'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.22+ (KHTML, like Gecko) Chromium/17.0.963.56 Chrome/17.0.963.56 Safari/535.22+ Debian/7.0 (3.4.2-2.1) Epiphany/3.4.2',
	'Mozilla/5.0 (X11; U; Linux i686; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Safari/531.2+ Epiphany/2.29.5',
	'Mozilla/5.0 (X11; U; Linux i686; en; rv:1.9.0.11) Gecko/20080528 Epiphany/2.22 Firefox/3.0',
	'Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/420+ (KHTML, like Gecko)',
	'Mozilla/5.0 (X11; U; Linux x86_64; c) AppleWebKit/525.1+ (KHTML, like Gecko, Safari/525.1+) epiphany',
	'Mozilla/5.0 (X11; U; Linux x86_64; en; rv:1.8.1.4) Gecko/20061201 Epiphany/2.18 Firefox/2.0.0.4 (Ubuntu-feisty)',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.5) Gecko/20060731 Epiphany/2.14 Firefox/1.5.0.5',
	'Mozilla/5.0 (X11; U; Linux i686; en; rv:1.8.1) Gecko/20061203 Epiphany/2.16 Firefox/2.0',
	'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.8.0.1) Gecko/Debian-1.8.0.1-5 Epiphany/1.8.5',
	'Mozilla/5.0 (X11; U; Linux i686; cs-CZ; rv:1.7.13) Gecko/20060418 Epiphany/1.8.2 (Ubuntu) (Ubuntu package 1.0.8)',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.3) Gecko/20040924 Epiphany/1.4.4 (Ubuntu)',
	'Mozilla/5.0 (X11; U; FreeBSD i386; en-US; rv:1.7) Gecko/20040628 Epiphany/1.2.6',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.4.1) Gecko/20031030 Epiphany/1.0.8',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.4.1) Gecko/20031114 Epiphany/1.0.4',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.4) Gecko/20030704 Epiphany/0.9.2',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.4) Gecko/20030703 Epiphany/0.8.4',
	'fetch libfetch/2.0',
	'Mozilla/5.0 (Mobile; ZTEOPEN; rv:18.1) Gecko/18.1 Firefox/18.1',
	'Mozilla/5.0 (Windows NT 5.1; rv:2.0) Gecko/20100101 Firefox/4.0',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.4) Gecko/2008102920 Firefox/3.0.4 (Splashtop-v1.0.5.0)',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8) Gecko/20051111 Firefox/1.5 BAVM/1.0.0',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1a2pre) Gecko/2008073000 Shredder/3.0a2pre ThunderBrowse/3.2.1.8 ',
	'Mozilla/5.0 (X11; U; Linux armv61; en-US; rv:1.9.1b2pre) Gecko/20081015 Fennec/1.0a1',
	'Mozilla/5.0 (Windows NT 7.0; Win64; x64; rv:3.0b2pre) Gecko/20110203 Firefox/4.0b12pre',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0',
	'Mozilla/5.0 (Windows NT 6.1; rv:39.0) Gecko/20100101 Firefox/39.0',
	'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0',
	'Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:37.0) Gecko/20100101 Firefox/37.0',
	'Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:32.0) Gecko/20100101 Firefox/32.0',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:32.0) Gecko/20100101 Firefox/32.0',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:31.0) Gecko/20100101 Firefox/31.0',
	'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:25.0) Gecko/20100101 Firefox/25.0',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:24.0) Gecko/20100101 Firefox/24.0 ',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:20.0) Gecko/20100101 Firefox/20.0',
	'Mozilla/5.0 (X11; Linux x86_64; rv:19.0) Gecko/20100101 Firefox/19.0',
	'Mozilla/5.0 (X11; NetBSD amd64; rv:18.0) Gecko/20130120 Firefox/18.0',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:17.0) Gecko/20100101 Firefox/17.0',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:16.0) Gecko/20100101 Firefox/16.0',
	'Mozilla/5.0 (Windows NT 5.1; rv:15.0) Gecko/20100101 Firefox/15.0.1',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:14.0) Gecko/20100101 Firefox/14.0.1',
	'Mozilla/5.0 (Windows NT 5.1; rv:13.0) Gecko/20100101 Firefox/13.0',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:12.0) Gecko/20100101 Firefox/12.0',
	'Mozilla/5.0 (Windows NT 6.1; rv:11.0) Gecko/20100101 Firefox/11.0',
	'Mozilla/5.0 (Macintosh; PPC Mac OS X 10.4; rv:10.0.10) Gecko/20121024 Firefox/10.0.10 TenFourFox/G3',
	'Mozilla/5.0 (Ubuntu; X11; Linux x86_64; rv:9.0.1) Gecko/20100101 Firefox/9.0.1',
	'Mozilla/5.0 (Windows NT 5.1; rv:8.0) Gecko/20100101 Firefox/8.0',
	'Mozilla/5.0 (Windows NT 5.1; rv:7.0.1) Gecko/20100101 Firefox/7.0.1',
	'Mozilla/5.0 (X11; Linux i686; rv:6.0.2) Gecko/20100101 Firefox/6.0.2',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:5.0) Gecko/20100101 Firefox/5.0',
	'Mozilla/5.0 (X11; Linux x86_64; rv:2.0.1) Gecko/20110506 Firefox/4.0.1',
	'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16',
	'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.8) Gecko/20100215 Solaris/10.1 (GNU) Superswan/3.5.8 (Byte/me)',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10.5; en-US; rv:1.9.0.3) Gecko/2008092414 Firefox/3.0.3 ',
	'Mozilla/5.0 (X11; U; OpenBSD i386; en-US; rv:1.8.1.14) Gecko/20080821 Firefox/2.0.0.14',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.13) Gecko/20060410 Firefox/1.0.8',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.3) Gecko/20041002 Firefox/0.10.1',
	'Mozilla/5.0 (X11; U; SunOS sun4m; en-US; rv:1.4b) Gecko/20030517 Mozilla Firebird/0.6',
	'Mozilla/5.0 (Windows; U; WinNT4.0; en-US; rv:1.3a) Gecko/20021207 Phoenix/0.5',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.2b) Gecko/20020923 Phoenix/0.1',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.3) Gecko/2008100716 Firefox/3.0.3 Flock/2.0',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.4) Gecko/20060612 Firefox/1.5.0.4 Flock/0.7.0.17.1',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8b5) Gecko/20051019 Flock/0.4 Firefox/1.0+',
	'Mozilla/5.0 (X11; U; OpenBSD i386; en-US; rv:1.8.1.19) Gecko/20090701 Galeon/2.0.7',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.13) Gecko/20080208 Galeon/2.0.4 (2008.1) Firefox/2.0.0.13',
	'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.8.1.4) Gecko/20061201 Galeon/2.0.2 (Ubuntu package 2.0.2-4ubuntu1)',
	'Mozilla/5.0 (X11; U; FreeBSD i386; en-US; rv:1.7.12) Gecko/20051105 Galeon/1.3.21',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.3) Gecko/20040913 Galeon/1.3.18',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.3) Gecko/20041007 Galeon/1.3.17 (Debian package 1.3.17-2)',
	'Mozilla/5.0 (X11; U; FreeBSD i386; en-US; rv:1.6) Gecko/20040406 Galeon/1.3.15',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.6) Gecko/20040115 Galeon/1.3.12',
	'Mozilla/5.0 (X11; U; Linux i686) Gecko/20030422 Galeon/1.3.4',
	'Mozilla/5.0 Galeon/1.2.0 (X11; Linux i686; U;) Gecko/20020326',
	'Mozilla/5.0 (X11; Linux x86_64; rv:31.0) Gecko/20100101 Firefox/31.0 Iceweasel/31.3.0',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1) Gecko/20090711 IceCat/3.5',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.19) Gecko/20110817 Iceape/2.0.14',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.11) Gecko/20100819 Iceweasel/3.5.11 (like Firefox/3.5.11)',
	'Mozilla/5.0 (X11; U; Linux i686; de; rv:1.9.0.16) Gecko/2009121610 Iceweasel/3.0.6 (Debian-3.0.6-3)',
	'Mozilla/5.0 (X11; U; GNU/kFreeBSD i686; en-US; rv:1.8.1.16) Gecko/20080702 Iceape/1.1.11 (Debian-1.1.11-1)',
	'Mozilla/5.0 (X11; U; GNU/kFreeBSD i686; en-US; rv:1.9.0.1) Gecko/2008071502 Iceweasel/3.0.1 (Debian-3.0.1-1)',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.1) Gecko/2008072716 IceCat/3.0.1-g1',
	'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.0.1) Gecko/2008071420 Iceweasel/3.0.1 (Debian-3.0.1-1)',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.8) Gecko/20071008 Iceape/1.1.5 (Ubuntu-1.1.5-1ubuntu0.7.10)',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.1) Gecko/20061205 Iceweasel/2.0.0.1 (Debian-2.0.0.1+dfsg-2)',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.4) Gecko/20060620 Iceweasel/1.5.0.4-g1',
	'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; Google Wireless Transcoder;)',
	'Mozilla/5.0 (Linux; U; Android 1.1; en-gb; dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2',
	'Mozilla/5.0 (Linux; U; Android 0.5; en-us) AppleWebKit/522+ (KHTML, like Gecko) Safari/419.3 ',
	'Mediapartners-Google/2.1',
	'Google-Sitemaps/1.0',
	'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Avant Browser; Deepnet Explorer 1.5.3; Smart 2x2; Avant Browser; .NET CLR 2.0.50727; InfoPath.1)',
	'Mozilla/3.0 (x86 [en] Windows NT 5.1; Sun)',
	'Mozilla/4.5 RPT-HTTPClient/0.3-2',
	'Jakarta Commons-HttpClient/2.0.1',
	'IBrowse/2.4 (AmigaOS 3.9; 68K)',
	'IBrowse/2.3 (AmigaOS V51)',
	'IBrowse/2.3 (AmigaOS 4.0)',
	'iCab/2.9.7 (Macintosh; U; PPC)',
	'iCab/2.9.5 (Macintosh; U; PPC; Mac OS X)',
	'Mozilla/4.5 (compatible; iCab 2.7.1; Macintosh; I; PPC)',
	'ipd/1.0 from AlertSite.com',
	'ICE Browser/5.05 (Java 1.4.0; Windows 2000 5.0 x86)',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.11) Gecko Kazehakase/0.5.4 Debian/0.5.4-2.1ubuntu3',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.13) Gecko/20080311 (Debian-1.8.1.13+nobinonly-0ubuntu1) Kazehakase/0.5.2',
	'Mozilla/5.0 (X11; Linux x86_64; U;) Gecko/20060207 Kazehakase/0.3.5 Debian/0.3.5-1',
	'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; KKman2.0)',
	'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.17pre) Gecko K-Meleon/1.6.0',
	'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.8.1.4) Gecko/20070511 K-Meleon/1.1',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9) Gecko/2008052906 K-MeleonCCFME 0.09',
	'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.8.0.7) Gecko/20060917 K-Meleon/1.02',
	'Mozilla/5.0 (Windows; U; Win 9x 4.90; en-US; rv:1.7.5) Gecko/20041220 K-Meleon/0.9',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.5) Gecko/20031016 K-Meleon/0.8.2',
	'Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.5) Gecko/20031016 K-Meleon/0.8.2',
	'Mozilla/5.0 (Windows; U; WinNT4.0; en-US; rv:1.5) Gecko/20031016 K-Meleon/0.8',
	'Mozilla/5.0 (Windows; U; WinNT4.0; en-US; rv:1.2b) Gecko/20021016 K-Meleon 0.7',
	'Mozilla/5.0 (Windows; U; WinNT4.0; en-US; rv:0.9.5) Gecko/20011011',
	'Mozilla/5.0(Windows;N;Win98;m18)Gecko/20010124',
	'Mozilla/5.0 (compatible; Konqueror/14.0; Linux) KHTML/TDEHTML/14.0.0 (like Gecko) (Debian)',
	'Mozilla/5.0 (compatible; Konqueror/4.1; OpenBSD) KHTML/4.1.4 (like Gecko)',
	'Mozilla/5.0 (Windows; Windows i686) KHTML/4.8.0 (like Gecko) Konqueror/4.8',
	'Mozilla/5.0 (compatible; Konqueror/4.0; Microsoft Windows) KHTML/4.0.80 (like Gecko)',
	'Mozilla/5.0 (compatible; Konqueror/4.0; Linux) KHTML/4.0.5 (like Gecko)',
	'Mozilla/5.0 (compatible; Konqueror/4.0; Microsoft Windows) KHTML/4.0.80 (like Gecko)',
	'Mozilla/5.0 (compatible; Konqueror/3.5; GNU/kFreeBSD) KHTML/3.5.9 (like Gecko) (Debian)',
	'Mozilla/5.0 (compatible; Konqueror/3.5; Darwin)  KHTML/3.5.6 (like Gecko)',
	'Mozilla/5.0 (compatible; Konqueror/3.5; Linux; X11; x86_64) KHTML/3.5.6 (like Gecko) (Kubuntu)',
	'Mozilla/5.0 (compatible; Konqueror/3.4; GNU/kFreeBSD) KHTML/3.4.2 (like Gecko) (Debian package 4:3.4.2-4)',
	'Mozilla/5.0 (compatible; Konqueror/3.4; CYGWIN_NT-5.1) KHTML/3.4.89 (like Gecko)',
	'Mozilla/5.0 (compatible; Konqueror/3.5; Linux 2.6.14-kanotix-6; X11) KHTML/3.5.3 (like Gecko) (Debian package 4:3.5.3-1)',
	'Mozilla/5.0 (compatible; Konqueror/3.5; Linux; X11; i686; en_US) KHTML/3.5.3 (like Gecko)',
	'Mozilla/5.0 (compatible; Konqueror/3.4; Linux) KHTML/3.4.3 (like Gecko) (Kubuntu package 4:3.4.3-0ubuntu1)',
	'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)',
	'Mozilla/5.0 (compatible; Konqueror/3.4; FreeBSD) KHTML/3.4.3 (like Gecko)',
	'Mozilla/5.0 (compatible; Konqueror/3.4; Linux 2.6.8; X11; i686; en_US) KHTML/3.4.0 (like Gecko)',
	'Mozilla/5.0 (compatible; Konqueror/3.4; Linux) KHTML/3.4.1 (like Gecko)',
	'Mozilla/5.0 (compatible; Konqueror/3.4; Linux 2.6.8; X11; i686; en_US) KHTML/3.4.0 (like Gecko)',
	'Mozilla/5.0 (compatible; Konqueror/3.3; Linux) (KHTML, like Gecko)',
	'Mozilla/5.0 (compatible; Konqueror/3.2; Linux 2.6.7-3ajp; X11; i686) (KHTML, like Gecko)',
	'Mozilla/5.0 (compatible; Konqueror/3.2; FreeBSD) (KHTML, like Gecko)',
	'Mozilla/5.0 (compatible; Konqueror/3.1; Linux 2.4.20)',
	'Mozilla/5.0 (compatible; Konqueror/3.1; Linux; X11; i686)',
	'Mozilla/5.0 (compatible; Konqueror/3.1; Linux 2.4.19-32mdkenterprise; X11; i686; ar, en_US)',
	'Mozilla/5.0 (compatible; Konqueror/2.1.1; X11)',
	'Links (2.8; Linux 3.19.0-21-generic i686; GNU C 4.8.3; text)',
	'Links (2.7; NetBSD 6.99.16 amd64; GNU C 4.7; x)',
	'Links',
	'Links (2.1pre31; Linux 2.6.21-omap1 armv6l; x)',
	'Links (2.1pre18; Linux 2.6.17-dyne i686; x)',
	'Links (2.1pre15; Linux 2.4.26-vc4 i586; x)',
	'Links (2.1pre14; OS/2 1 i386; 80x33)',
	'Links (0.99; OS/2 1 i386; 80x33)',
	'Links (0.98; Linux 2.6.7-rc2 i686; 132x43)',
	'Links (0.98; Unix; 80x25)',
	'Links (0.95; Unix)',
	'Mozilla/4.0 (compatible; MSIE 6.0; U; Windows;) Lobo/0.98.2',
	'Lynx/2.8.5dev.16 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/0.9.6b',
	'Lynx/2.8.5dev.16 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/0.9.6b',
	'Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/1.0.16',
	'Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/0.8.12',
	'Lynx/2.8.3rel.1 libwww-FM/2.14FM',
	'Lynx/2.8.4dev.11 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/0.9.6',
	'Lynx/2.6  libwww-FM/2.14',
	'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; SV1; Maxthon; .NET CLR 1.1.4322)',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-gb) AppleWebKit/535+ (KHTML, like Gecko) Version/5.0 Safari/535.22+ Midori/0.4',
	'Midori/0.2.2 (X11; Linux i686; U; en-us) WebKit/531.2+',
	'Mozilla/5.0 (X11; U; Linux armv6l; en-us) AppleWebKit/528.5+ (KHTML, like Gecko, Safari/528.5+) midori',
	'Mozilla/5.0 (X11; U; Linux i686; fr-fr) AppleWebKit/525.1+ (KHTML, like Gecko, Safari/525.1+) midori',
	'PATHWORKS Mosaic/1.0  libwww/2.15_Spyglass',
	'WinMosaic/Version 2.0 (ALPHA 2)',
	'VMS_Mosaic/3.8-1 (Motif;OpenVMS V7.3-2 DEC 3000 - M700)  libwww/2.12_Mosaic',
	'Mosaic from Digital/1.02_Win32 ',
	'NCSA Mosaic/2.0.0b4 (Windows AXP) ',
	'NCSA_Mosaic/2.7b5 (X11;Linux 2.6.7 i686) libwww/2.12 modified',
	'mMosaic/3.6.6 (X11;SunOS 5.8 sun4m)',
	'mothra/Jul-10-17:33:30-EDT-2006',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.9) Gecko/20100508 SeaMonkey/2.0.4',
	'Mozilla/5.0 (X11; U; Linux i686; nb-NO; rv:1.9.1.8) Gecko/20100205 SeaMonkey/2.0.3',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1b4pre) Gecko/20090405 SeaMonkey/2.0b1pre',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1b1pre) Gecko/20080915000512 SeaMonkey/2.0a1pre',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9pre) Gecko/2008060901 SeaMonkey/2.0a1pre',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.13) Gecko/20080313 SeaMonkey/1.1.9 (Ubuntu-1.1.9+nobinonly-0ubuntu1)',
	'Mozilla/5.0 (X11; U; SunOS sun4u; en-US; rv:1.7) Gecko/20070606',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.8) Gecko/20050927 Debian/1.7.8-1sarge3',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1b2) Gecko/20060823 SeaMonkey/1.1a',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.13) Gecko/20060417',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.0.1) Gecko/20060130 SeaMonkey/1.0',
	'Mozilla/5.0 (OS/2; U; Warp 4.5; en-US; rv:1.9a1) Gecko/20051119 MultiZilla/1.8.1.0s SeaMonkey/1.5a ',
	'Mozilla/5.0 (X11; U; FreeBSD i386; en-US; rv:1.7.12) Gecko/20051105',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.12) Gecko/20050920',
	'Mozilla/5.0 (X11; U; Linux ppc; en-US; rv:1.7.12) Gecko/20051009 Debian/1.7.12-1',
	'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.8b4) Gecko/20050910 SeaMonkey/1.0a',
	'Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.8b3) Gecko/20050713 SeaMonkey/1.0a',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8a2) Gecko/20040704',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.7.11) Gecko/20050728',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.8) Gecko/20050511',
	'Mozilla/5.0+(X11;+U;+Linux+i686;+en-US;+rv:1.7.3)+Gecko/20040922',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.6) Gecko/20040413 Debian/1.6-5',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.6) Gecko/20040616 MultiZilla/1.6.3.1d',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US; rv:1.0.2) Gecko/20020924 AOL/7.0',
	'Mozilla/5.0 (Windows; U; Win 9x 4.90) Gecko/20020502 CS 2000 7.0/7.0',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.5b; MultiZilla v1.5.0.2g) Gecko/20030827',
	'Mozilla/5.0 (Windows; U; WinNT4.0; en-US; rv:1.2) Gecko/20021126',
	'Mozilla/5.0 (Windows; U; WinNT4.0; en-US; rv:1.2) Gecko/20021126',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.2a) Gecko/20020910',
	'Mozilla/5.0 (X11; U; Linux 2.4.3-20mdk i586; en-US; rv:0.9.1) Gecko/20010611',
	'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; InfoPath.1)',
	'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; Xbox)',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
	'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)',
	'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)',
	'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Win64; x64; Trident/4.0; .NET CLR 2.0.50727; SLCC2; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; Tablet PC 2.0)',
	'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Win64; x64; .NET CLR 2.0.50727; SLCC2; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; Tablet PC 2.0)',
	'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; chromeframe/13.0.782.218; chromeframe; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)',
	'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; FunWebProducts; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506; Windows-Media-Player/10.00.00.3990)',
	'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; winfx; .NET CLR 1.1.4322; .NET CLR 2.0.50727; Zune 2.0)',
	'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; GTB6.4; .NET CLR 1.1.4322; FDM; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)',
	'Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Rogers Hi-Speed Internet; (R1 1.3))',
	'Mozilla/4.0 (compatible; MSIE 5.5; Windows 98)',
	'Mozilla/4.0 (compatible; MSIE 5.0; SunOS 5.10 sun4u; X11)',
	'Mozilla/4.0 (compatible; MSIE 5.22; Mac_PowerPC) ',
	'Mozilla/4.0 (compatible; MSIE 4.01; Windows NT 5.0)',
	'Mozilla/2.0 (compatible; MSIE 3.02; Windows CE; 240x320)',
	' Mozilla/1.22 (compatible; MSIE 2.0; Windows 95)',
	' Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)',
	'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/4.0; GTB6.5; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; HPDTDF; .NET4.0C; Crazy Browser 3.0.5)',
	'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; MyIE2; Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1) ; .NET CLR 1.1.4322; InfoPath.1; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; TheWorld)',
	'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; GTB6.3; Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1) ; ws8 Embedded Web Browser from: http://bsalsa.com/; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)',
	'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)',
	'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.0; Smart Bro)',
	'MMozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; .NET CLR 3.0.04506; Tablet PC 2.0) Sleipnir/2.8.3',
	'muCommander v0.8.3 (Java 1.6.0_0-b11; Linux 2.6.24-19-generic i386)',
	'muCommander v0.8.3 (Java 1.4.2_03-b02; Windows XP 5.1 x86)',
	'Mozilla/3.0 (compatible; NetPositive/2.2.2; BeOS)',
	'Mozilla/3.0 (compatible; NetPositive/2.2.1; BeOS)',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.12) Gecko/20080219 Firefox/2.0.0.12 Navigator/9.0.0.6',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.8pre) Gecko/20071019 Firefox/2.0.0.8 Navigator/9.0.0.1',
	'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.7.5) Gecko/20050519 Netscape/8.0.1',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.2) Gecko/20040804 Netscape/7.2 (ax)',
	' Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:0.9.4.1) Gecko/20020508 Netscape6/6.2.3',
	'Mozilla/4.8 [en] (X11; U; Linux 2.4.20-8 i686)',
	'Mozilla/3.04Gold (X11; U; IRIX 5.3 IP22)',
	'Mozilla/3.01 (WinNT; I) [AXP]',
	'Mozilla/2.02 [fr] (WinNT; I)',
	'Mozilla/0.96 Beta (X11; Linux 2.6.25.18-0.2-default i686)',
	'Mozilla/0.91 Beta (Windows)',
	'Mozilla/0.6 Beta (Windows)',
	'NetSurf/2.9 (Linux; armv6l)',
	'NetSurf/1.1 (Linux; i686)',
	'Netsurf',
	'Mozilla/4.7 (compatible; OffByOne; Windows 2000)',
	'Mozilla/4.7 (compatible; OffByOne; Windows 2000) Webster Pro V3.4',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_5; en-US) AppleWebKit/531.21.8+(KHTML, like Gecko, Safari/528.16) Version/5.10.3 OmniWeb/622.14.0',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_8; en-US) AppleWebKit/531.9+(KHTML, like Gecko, Safari/528.16) OmniWeb/v622.10.0',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-US) AppleWebKit/525.18 (KHTML, like Gecko, Safari/525.20) OmniWeb/v622.3.0.105198',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US) AppleWebKit/125.4 (KHTML, like Gecko, Safari) OmniWeb/v563.34',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US) AppleWebKit/85 (KHTML, like Gecko) OmniWeb/v558.48',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US) AppleWebKit/85 (KHTML, like Gecko) OmniWeb/v558.46',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US) AppleWebKit/85 (KHTML, like Gecko) OmniWeb/v496',
	'Mozilla/4.5 (compatible; OmniWeb/4.2.1-v435.9; Mac_PowerPC)',
	'Mozilla/4.5 (compatible; OmniWeb/4.2-v435.2; Mac_PowerPC)',
	'OmniWeb/2.7-beta-3 OWF/1.0',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.4) Gecko/20061019 pango-text',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36 OPR/32.0.1948.69',
	'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174',
	'Opera/9.80 (Windows NT 6.2; U; Edition Indian Local; en) Presto/2.9.168 Version/11.51',
	'Opera/9.80 (BlackBerry; Opera Mini/8.0.35667/35.6050; U; en) Presto/2.8.119 Version/11.10',
	'Opera/9.80 (Android; Opera Mini/7.5.31657/35.5125; U; ms) Presto/2.8.119 Version/11.10',
	'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.107 Safari/537.36 OPR/19.0.1326.63',
	'Opera/9.80 (J2ME/MIDP; Opera Mini/4.5.33867/32.855; U; en) Presto/2.8.119 Version/11.10',
	'Opera/9.80 (J2ME/MIDP; Opera Mini/4.3.24214/28.2555; U; en) Presto/2.8.119 Version/11.10',
	'Opera/9.80 (J2ME/MIDP; Opera Mini/6.5.26955/27.1382; U; en) Presto/2.8.119 Version/11.10',
	'Opera/9.80 (J2ME/MIDP; Opera Mini/4.1.13907/27.1188; U; en) Presto/2.8.119 Version/11.10',
	'Opera/9.80 (Windows NT 6.1; U; en) Presto/2.10.229 Version/11.61',
	'Opera/9.80 (Android 2.3.5; Linux; Opera Mobi/ADR-1111101157; U; de) Presto/2.9.201 Version/11.50',
	'Opera/9.80 (Series 60; Opera Mini/6.1.26266/26.1069; U; en) Presto/2.8.119 Version/10.54',
	'Opera/9.80 (J2ME/MIDP; Opera Mini/4.2.13221/25.623; U; en) Presto/2.5.25 Version/10.54',
	'Opera/9.80 (Windows NT 6.1; U; en) Presto/2.8.131 Version/11.10',
	'Opera/9.80 (Windows Mobile; WCE; Opera Mobi/WMD-50433; U; en) Presto/2.4.13 Version/10.00',
	'Opera/9.80 (Windows NT 6.0; U; en) Presto/2.7.62 Version/11.00',
	'Opera/9.80 (X11; Linux i686; U; en-GB) Presto/2.6.30 Version/10.62',
	'Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.6.30 Version/10.61',
	'Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/19.916; U; en) Presto/2.5.25',
	'Opera/9.80 (Windows NT 6.1; U; en) Presto/2.5.24 Version/10.54',
	'Opera/9.80 (S60; SymbOS; Opera Mobi/499; U; ru) Presto/2.4.18 Version/10.00',
	'Opera/9.80 (Windows NT 5.1; U; en) Presto/2.5.22 Version/10.50',
	'Opera/9.80 (Windows NT 6.0; U; en) Presto/2.5.22 Version/10.50',
	'Opera/9.80 (X11; Linux x86_64; U; Linux Mint; en) Presto/2.2.15 Version/10.10',
	'Opera/9.80 (J2ME/MIDP; Opera Mini/5.0.16823/1428; U; en) Presto/2.2.0',
	'Opera/9.80 (J2ME/MIDP; Opera Mini/4.2.14912/1186; U; en) Presto/2.2.0',
	'Opera/9.80 (Windows NT 5.2; U; en) Presto/2.2.15 Version/10.10',
	'Opera/9.80 (X11; Linux i686; U; nl) Presto/2.2.15 Version/10.00',
	'Opera/9.60 (J2ME/MIDP; Opera Mini/4.2.13337/458; U; en) Presto/2.2.0',
	'Opera/9.60 (J2ME/MIDP; Opera Mini/4.1.11320/608; U; en) Presto/2.2.0',
	'Opera/10.00 (X11; Linux i686 ; U; en) Presto/2.2.0',
	'Opera/9.62 (Windows NT 5.1; U; en) Presto/2.1.1',
	'Opera/9.60 (X11; Linux i686; U; en) Presto/2.1.1',
	'Opera/9.52 (Windows NT 5.1; U; en)',
	'Opera/9.25 (Windows NT 6.0; U; en)',
	'Opera/9.20 (Macintosh; Intel Mac OS X; U; en)',
	'Opera/9.02 (Windows NT 5.0; U; en)',
	'Opera/9.00 (Windows NT 4.0; U; en)',
	'Opera/9.00 (X11; Linux i686; U; en)',
	'Opera/9.00 (Windows NT 5.1; U; en)',
	'Opera/9.0 (Windows NT 5.1; U; en) Opera/9.0 (Macintosh; PPC Mac OS X; U; en) Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 9.0',
	'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 480x640) Opera 8.60 [en]',
	'Opera/8.5 (Macintosh; PPC Mac OS X; U; en)',
	'Mozilla/5.0 (Macintosh; PPC Mac OS X; U; en) Opera 8.5',
	'Mozilla/4.0 (compatible; MSIE 6.0; Mac_PowerPC Mac OS X; en) Opera 8.5',
	'Opera/8.0 (Macintosh; PPC Mac OS X; U; en)',
	'Mozilla/5.0 (Macintosh; PPC Mac OS X; U; en) Opera 8.0',
	'Mozilla/4.0 (compatible; MSIE 6.0; Mac_PowerPC Mac OS X; en) Opera 8.0',
	'Opera/8.01 (Windows NT 5.1)',
	'Mozilla/5.0 (Windows NT 5.1; U; en) Opera 8.01',
	'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)',
	'Mozilla/5.0 (Windows NT 5.1; U; en) Opera 8.00',
	'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 8.00',
	'Opera/8.00 (Windows NT 5.1; U; en)',
	'Mozilla/5.0 (X11; Linux i386; U) Opera 7.60  [en-GB]',
	'Opera/7.60 (Windows NT 5.2; U)  [en] (IBM EVV/3.0/EAK01AG9/LE)',
	'Opera/7.54 (Windows NT 5.1; U)  [pl]',
	'Opera/7.50 (X11; Linux i686; U)  [en]',
	'Mozilla/5.0 (X11; Linux i686; U) Opera 7.50  [en]',
	'Mozilla/4.0 (compatible; MSIE 6.0; X11; Linux i686) Opera 7.20  [en]',
	' Opera/7.11 (Windows NT 5.1; U) [en]',
	'Mozilla/4.0 (compatible; MSIE 6.0; Windows ME) Opera 7.11  [en]',
	' Mozilla/4.0 (compatible; MSIE 6.0; MSIE 5.5; Windows NT 5.0) Opera 7.02 Bork-edition [en] ',
	'Mozilla/4.0 (compatible; MSIE 6.0; MSIE 5.5; Windows NT 4.0) Opera 7.0 [en]',
	'Mozilla/4.0 (compatible; MSIE 5.0; Windows 2000) Opera 6.0 [en]',
	'Mozilla/4.0 (compatible; MSIE 5.0; Windows 95) Opera 6.01  [en]',
	'Mozilla/4.0 (compatible; MSIE 5.0; Mac_PowerPC) Opera 5.0  [en]',
	'Mozilla/4.01 (Compatible; Acorn Browse 1.25 [23-Oct-97] AW  97; RISC OS 4.39) Acorn-HTTP/0.84',
	'Mozilla/1.10 [en] (Compatible; RISC OS 3.70; Oregano 1.10)',
	'Mozilla/1.10 [en] (Compatible; RISC OS 3.70; Oregano 1.10)',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:0.9.6) Gecko/20011128',
	'Mozilla/5.0 (Windows NT 5.1; rv:8.0) Gecko/20111108 Firefox/8.0 PaleMoon/8.0',
	'Mozilla/5.0 (Windows NT 6.0; Win64; x64; rv:5.0) Gecko/20110624 Firefox/5.0-x64 PaleMoon/5.0-x64',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.13) Gecko/20101215 Firefox/3.6.13 (Palemoon/3.6.13)',
	'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.11) Gecko/20101023 Firefox/3.6.11 (Palemoon/3.6.11) ( .NET CLR 3.5.30729; .NET4.0E)',
	'Mozilla/3.0 (compatible; HP Web PrintSmart 04b0 1.0.1.34)',
	'Mozilla/5.0 (X11; U; Linux armv6l; en-US; rv: 1.9.1a2pre) Gecko/20080813221937 Prism/0.9.1',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.1) Gecko/2008071719 prism/0.8',
	'Bison/0.02 [fu] (Win67; X; SK)',
	'retawq/0.1.6 [en] (text)',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.78.2 (KHTML, like Gecko) Version/7.0.6 Safari/537.78.2',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/536.26.17 (KHTML, like Gecko) Version/6.0.2 Safari/536.26.17',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-us) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-us) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4',
	'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; en-us) AppleWebKit/533.17.8 (KHTML, like Gecko) Version/5.0.1 Safari/533.17.8',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/531.21.8 (KHTML, like Gecko) Version/4.0.4 Safari/531.21.10',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_2; en-us) AppleWebKit/531.21.8 (KHTML, like Gecko) Version/4.0.4 Safari/531.21.10',
	'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11a Safari/525.20',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7; en-us) AppleWebKit/525.28.3 (KHTML, like Gecko) Version/3.2.3 Safari/525.28.3',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Version/3.1.2 Safari/525.21',
	'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5F136 Safari/525.20',
	'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A347 Safari/525.20',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Version/3.1.2 Safari/525.21',
	'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_0 like Mac OS X; de-de) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A347 Safari/525.20',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Version/3.1.2 Safari/525.21',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.1 Safari/525.17',
	'Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A101a Safari/419.3',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_2; en-us) AppleWebKit/525.13 (KHTML, like Gecko) Version/3.1 Safari/525.13',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_2; en-us) AppleWebKit/525.13 (KHTML, like Gecko) Version/3.1 Safari/525.13',
	'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/4A93 Safari/419.3',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-gb) AppleWebKit/523.10.6 (KHTML, like Gecko) Version/3.0.4 Safari/523.10.6',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; bg) AppleWebKit/522.13.1 (KHTML, like Gecko) Version/3.0.2 Safari/522.13.1',
	'Mozilla/4.0 (compatible; Mozilla/4.0; Mozilla/5.0; Mozilla/6.0; Safari/431.7; Macintosh; U; PPC Mac OS X 10.6 Leopard; AppleWebKit/421.9 (KHTML, like Gecko) )',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/418.8 (KHTML, like Gecko) Safari/419.3',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/417.9 (KHTML, like Gecko) Safari/417.8',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en) AppleWebKit/417.3 (KHTML, like Gecko) Safari/417.2',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/412 (KHTML, like Gecko) Safari/412',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/312.9 (KHTML, like Gecko) Safari/312.6',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; fr-fr) AppleWebKit/312.5.1 (KHTML, like Gecko) Safari/312.3.1',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; fr-fr) AppleWebKit/312.5 (KHTML, like Gecko) Safari/312.3',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/124 (KHTML, like Gecko) Safari/125.1',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/106.2 (KHTML, like Gecko) Safari/100.1',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; es) AppleWebKit/85 (KHTML, like Gecko) Safari/85',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-us) AppleWebKit/74 (KHTML, like Gecko) Safari/74',
	'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/51 (like Gecko) Safari/51',
	'Mozilla/5.0 (X11; U; OpenVMS AlphaServer_ES40; en-US; rv:1.4) Gecko/20030826 SWB/V1.4 (HP)',
	'Mozilla/2.0 (Compatible; SIS 1.2; IIgs)',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.2pre) Gecko/2009031304 Spicebird/0.7.1 ',
	'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.0.10) Gecko/2009043012 Songbird/1.2.0 (20090616030052)',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.1) Gecko/2008072921 Songbird/0.7.0 (20080819112708)',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1b2) Gecko/20060925 Songbird/0.2.5.1 (20070301190953)',
	'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-NZ; rv:1.8.1b2) Gecko/20060925 Songbird/0.2',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8) Gecko/20060206 Songbird/0.1',
	'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Iron/26.0.1450.0 Chrome/26.0.1450.0 Safari/537.36',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_7; en-US) AppleWebKit/534.13 (KHTML, like Gecko) Iron/9.0.600.2 Chrome/9.0.600.2 Safari/534.13',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/532.9 (KHTML, like Gecko) Iron/4.0.280.0 Chrome/4.0.280.0 Safari/532.9',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_6; en-us) AppleWebKit/525.27.1 (KHTML, like Gecko) Stainless/0.5.5 Safari/525.20.1',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.12pre) Gecko/20080101 Strata/4.1.0.1274',
	'Surf/0.4.1 (X11; U; Unix; en-US) AppleWebKit/531.2+ Compatible (Safari)',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1) Gecko/20061024 Firefox/2.0 (Swiftfox)',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.5) Gecko/20031007 Sylera/1.2.7',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.20) Gecko/20081217 Firefox/2.0.0.20 Novarra-Vision/8.0',
	'W3CLineMode/5.4.0 libwww/5.4.0',
	'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:24.0) Gecko/20100101 Firefox/24.0 Waterfox/24.0',
	'Mozilla/3.0 (compatible; WebCapture 2.0; Auto; Windows)',
	'w3m/0.4.1',
	'Mozilla/5.0 (compatible; U; InfiNet 0.1; Haiku) AppleWebKit/528+ (KHTML, like Gecko) WebPositive/528+ Safari/528+',
	'Mozilla/4.0 WebTV/2.8 (compatible; MSIE 4.0)',
	'w3m/0.5.1',
	'w3m/0.4.1',
	'Wget/1.8.1',
	'Wget/1.6',
	'Xenu_Link_Sleuth_1.2d ',
	'netmath',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 YaBrowser/1.7.1364.12383 Safari/537.22',
	'Mozilla/1.10 [en] (Compatible; RISC OS 3.70; Oregano 1.10)',
	'Contiki/1.0 (Commodore 64; http://dunkels.com/adam/contiki/)',
	'xChaos_Arachne/5.1.89;GPL,386+',
	'..FunWebSearch...',
	'Mozilla/4.0 (compatible; Powermarks/3.5; Windows 95/98/2000/NT)',
	'Mozilla/5.0 (compatible; IDZap)',
	'Mozilla/3.01Gold (Macintosh; I; 68K)',
	'WDG_Validator/1.6.1',
	'Bobby/4.0.1 RPT-HTTPClient/0.3-3E',
	'W3C_Validator/1.183 libwww-perl/5.64',
	'Jigsaw/2.2.0 W3C_CSS_Validator_JFouffa/2.0',
	'vobsub',
	'DigExt',
	'...SURF...',
	'Mozilla/4.01 (Compatible; Acorn Phoenix 2.08 [intermediate]; RISC OS 4.39) Acorn-HTTP/0.84 ',
	'mozilla/4.0 (compatible; msie 6.0; windows 98; ypc 3.0.2; yplus 4.4.01d)',
	'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; FREE; .NET CLR 1.1.4322)',
	'Mozilla/4.5 RPT-HTTPClient/0.3-2 ',
	'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; KTXN)',
	'SUNPlex 4.1 (Trusted Solaris 8 Operating Environment; Solaris 8 OE; Sun Fire 15K)',
	'Mozilla/3.0 (compatible; HP Web PrintSmart 04b0 1.0.1.34)',
	'Mozilla/4.0 (compatible; MSIE 5.0; Win3.1; ATHMWWW1.1;)',
	'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; .NET CLR 1.0.3705; .NET CLR 1.1.4322)',
	'Mozilla/4.0 (compatible; ICS 1.2.105)',
	'Sqworm/2.9.85-BETA (beta_release; 20011115-775; i686-pc-linux',

];


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
	var ua = navigator.userAgent;

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

	function ua2dl(outputdiv){
		if(c('DragonFly') && !c(bits32)) {
			$(outputdiv).append('<div><strong>suggested:</strong> Syncthing for Dragonfly BSD (64 bit)</div>');
		}

		if(c('FreeBSD') && c(bits32)) {
			$(outputdiv).append('<div><strong>suggested:</strong> Syncthing for FreeBSD (32 bit)</div>');
		}

		if(c('FreeBSD') && c(bits64)) {
			$(outputdiv).append('<div><strong>suggested:</strong> Syncthing for FreeBSD (64 bit)</div>');
		}

		if(c('Linux') && !c('Linux arm') && !c('Android') && c(bits32)) {
			$(outputdiv).append('<div><strong>suggested:</strong> Syncthing for Linux (32 bit)</div>');
		}

		if(c('Linux') && !c('Linux arm') && !c('Android') && c(bits64)) {
			$(outputdiv).append('<div><strong>suggested:</strong> Syncthing for Linux (64 bit)</div>');
		}

		if(c('Linux arm') && c(bits32)) {
			$(outputdiv).append('<div><strong>suggested:</strong> Syncthing for Linux (ARM 32-bit)</div>');
		}

		if(c('Linux arm') && c(bits64)) {
			$(outputdiv).append('<div><strong>suggested:</strong> Syncthing for Linux (ARM 64-bit)</div>');
		}

		if(c('Linux') && c('ppc64')) {
			$(outputdiv).append('<div><strong>suggested:</strong> Syncthing for Linux (ppc64)</div>');
		}

		//Syncthing for Linux (ppc64le)

		if(c('Mac OS X') && !c(['iPod','iPhone','iPad'])) {
			$(outputdiv).append('<div><strong>suggested:</strong> Syncthing for Mac OS X (64 bit)</div>');
		}

		if(c('NetBSD') && c(bits32)) {
			$(outputdiv).append('<div><strong>suggested:</strong> Syncthing for NetBSD (32 bit)</div>');
		}

		if(c('NetBSD') && c(bits64)) {
			$(outputdiv).append('<div><strong>suggested:</strong> Syncthing for NetBSD (64 bit)</div>');
		}

		if(c('OpenBSD') && c(bits32)) {
			$(outputdiv).append('<div><strong>suggested:</strong> Syncthing for OpenBSD (32 bit)</div>');
		}

		if(c('OpenBSD') && c(bits64)) {
			$(outputdiv).append('<div><strong>suggested:</strong> Syncthing for OpenBSD (64 bit)</div>');
		}

		if(c('SunOS')) {
			$(outputdiv).append('<div><strong>suggested:</strong> Syncthing for Solaris/Illumos/SmartOS (64 bit)</div>');
		}

		if(c('Win') && !c(bits64)) {
			$(outputdiv).append('<div><strong>suggested:</strong> Syncthing for Windows (32 bit)</div>');
		}

		if(c('Win') && c(bits64)) {
			$(outputdiv).append('<div><strong>suggested:</strong> Syncthing for Windows (64 bit)</div>');
		}

		if(c('Android')) {
			$(outputdiv).append('<div><strong>suggested:</strong> Android App google play or fdroid</div>');
		}
	};


	$('#debug-you').html('<div><strong>userAgent:</strong> '+navigator.userAgent+'</div>');
	ua2dl('#debug-you');

	$('#debug-more').hide(0);
	for(var i=0; i<test_useragents.length; i++){
		ua = test_useragents[i];
		$('#debug-more').append('<div><strong>userAgent:</strong> '+ua+'</div>');
		ua2dl('#debug-more');
		$('#debug-more').append('<hr>');
	}

	$('#expand-more').click(function(e){
		e.preventDefault();
		$('#debug-more').show(1000);
	});


});