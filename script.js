function el(s) {
	return document.querySelector(s);
}

const dark = el('.dark');
function darkside() {
    dark.style.display = 'block';
    document.body.style.overflow = 'hidden';
    setTimeout(function() { dark.style.opacity = '0.5';}, 1);
}
function lightside() {
    dark.style.opacity = '';
    document.body.style.overflow = '';
    setTimeout(function() { dark.style.display = '';}, 400);
}


try {
	let search = el('.search form').style;
	el('.search button').addEventListener('click', function() {
		search.zIndex = '0';
		search.opacity = '1';
		search.left = '-213px';
	});
} catch(e) {}

try {
	let sign = el('.sign').style;
	el('.account button').addEventListener('click', function() {
		sign.top = '50%';
		darkside();
	});
	let close = function() {
		lightside();
		sign.top = '';
		el('.sign .in').style.left = '0%';
		el('.sign .up').style.left = '';
	}
	el('.sign .close').addEventListener('click', close);
	dark.addEventListener('click', close);
	el('.in > button').addEventListener('click', function() {
		el('.sign .in').style.left = '-100%';
		el('.sign .up').style.left = '0%';
	});
} catch(e) {}

try {
	let header = el('header').style;
	el('.indicators .passive').addEventListener('click', function(e) {
		header.background = 'url(images/goa.jpg) no-repeat 0vw top / 100vw auto, url(images/header.jpg) no-repeat 100vw top / 100vw auto';
		el('.indicators .active').classList = 'passive';
		e.target.className = 'active';
		el('.indicators .passive').addEventListener('click', function(e) {
			header.background = '';
			el('.indicators .active').classList = 'passive';
			e.target.className = 'active';
		});
	});
} catch(e) {}