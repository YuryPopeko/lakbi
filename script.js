function el(s) { return document.querySelector(s);}
function els(s) { return document.querySelectorAll(s);}

const screenWidth = window.innerWidth || document.documentElement.clientWidth;

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
		search.display = 'inline-block';
		setTimeout(function() {
			search.zIndex = '0';
			search.opacity = '1';
			search.left = (screenWidth > 1200) ? '-213px' : (screenWidth < 970)? '-32.81vw' : '-130px';
		}, 0);
	});
} catch(e) {}

try {
	let menu = el('ul.menu').style,
		hamburger = el('.hamburger'),
		menuVisible = false;
	hamburger.addEventListener('click', function() {
		if (menuVisible) {
			menuClose();
			menuVisible = false;
			return;
		}
		darkside();
		dark.style.top = '15.625vw';
		menu.top = '15.625vw';
		menuVisible = true;
	});
	function menuClose() {
		lightside();
		menu.top = '';
	}
	dark.addEventListener('click', menuClose);
} catch(e) {}

try {
	let sign = el('.sign').style;
	els('.account button').forEach(function(item) {
		item.addEventListener('click', function() {
			el('ul.menu').style.top = '';
			sign.top = '50%';
			darkside();
		});
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
		header.backgroundImage = 'url(images/goa.jpg)';
		el('.indicators .active').classList = 'passive';
		e.target.className = 'active';
		el('.indicators .passive').addEventListener('click', function(e) {
			header.background = '';
			el('.indicators .active').classList = 'passive';
			e.target.className = 'active';
		});
	});
} catch(e) {}

try {
	let subscribe = el('.trend form'),
		success = el('.subscribe-success').style;
	subscribe.addEventListener('submit', function() {
		success.display = 'block';
		success.opacity = '1';
		setTimeout(function() {
			success.opacity = '';
			success.display = '';
		}, 1500);
	});
} catch(e) {}






var range = document.querySelector('.instagram div'),
    draggerWidth = (screenWidth > 970) ? 294 : 200,
    down = false,
    rangeWidth, rangeLeft;

range.children[0].style.width = draggerWidth + 'px';

range.addEventListener("mousedown", function(e) {
  rangeWidth = range.offsetWidth;
  rangeLeft = range.offsetLeft;
  down = true;
  return false;
});

range.addEventListener("drag", function(e) {
  if (down && e.pageX >= rangeLeft && e.pageX <= (rangeLeft + rangeWidth)) {
    for(var i=0; i<range.children.length;i++){
      range.children[i].style.left = e.pageX - rangeLeft - draggerWidth + 'px';
    }
   }
});

range.addEventListener("mouseup", function() { down = false;});


// els('.instagram a').forEach(function(item) {
// 	item.addEventListener('drag', function(e) {
// 		setTimeout(function() {
// 			els('.instagram a').forEach(function(moveItem) {
// 				moveItem.style.left = e.pageX + 'px';
// 			});
// 		}, 10);
// 	});
// });