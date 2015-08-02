function hex2hsl(hex, off) {
	var r = parseInt(hex.substring(0,1), 16)/255,
		g = parseInt(hex.substring(2,3), 16)/255,
		b = parseInt(hex.substring(4,5), 16)/255;

	var Cmx = Math.max(r,g,b),
		Cmn = Math.min(r,g,b),
		del = Cmx - Cmn;

	var h, s, l;

	if (del == 0) {
		h = 0;
	} else if (Cmx == r) {
		h = 60*(((g - b)/del) % 6);
	} else if (Cmx == g) {
		h = 60*(((b - r)/del) + 2);
	} else if (Cmx == b) {
		h = 60*(((r - g)/del) + 4);
	}

	l = (Cmx + Cmn)/2

	if (del == 0) {
		s = 0;
	} else {
		s = del / (1 - Math.abs((2 * l) - 1))
	}

	off = off/100;

	if (l * (1 + off) > 1) {
		return l * (1 - off);
	} else {
		return l * (1 + off);
	}

	if (hex === 'FFFFFF') {
		return 'hsl( 0, 0%, ' + l * 100 + '%)'
	} else {
		return 'hsl(' + h + ', ' + s * 100 + '%, ' + 100 - (l * 100) + '%)';
	}
}