let scrollIndex = 0;

let bg = document.getElementById('home-bg');
let moon = document.querySelector('.img-moon');
let mountain = document.getElementById('mountain');
let hills = document.getElementById('hills');
let river = document.getElementById('river');
let cliffleft = document.getElementById('cliff-left');
let cliffright = document.getElementById('cliff-right');
let bat1 = document.querySelector('.bat1');
let bat2 = document.querySelector('.bat2');
let bat3 = document.querySelector('.bat3');
let help = document.querySelector('.help');

window.addEventListener('scroll', (e) => {
	scrollIndex = window.scrollY;
	movebg(scrollIndex);
	movemoon(scrollIndex);
	movemountain(scrollIndex);
	movehills(scrollIndex);
	moveriver(scrollIndex);
	movecliffL(scrollIndex);
	movecliffR(scrollIndex);
	movebat1(scrollIndex);
	movebat2(scrollIndex);
	movebat3(scrollIndex);
	movehelp(scrollIndex);
});

function movebg(scrollIndex) {
	let start = 0;
	let position = start + scrollIndex / 10;

	if (scrollIndex <= 750) {
		// bg.style.top = `${position}px`;
		bg.style.position = 'absolute';
	} else if (scrollIndex > 750) {
		// bg.style.top = '-20px';
		bg.style.position = 'fixed';
	}

	console.log(bg.style.top);
	console.log(scrollIndex);
}

function movemoon(scrollIndex) {
	let start = 0;
	let position = start + scrollIndex / 20;

	moon.style.transform = `rotate(${position}deg)`;
}

function movebat1(scrollIndex) {
	let start = 1075;
	let position = start + scrollIndex * 6;

	bat1.style.right = `${position}px`;
}

function movebat2(scrollIndex) {
	let start = 1000;
	let position = start + scrollIndex * 4;

	bat2.style.right = `${position}px`;
}

function movebat3(scrollIndex) {
	let start = 909;
	let position = start + scrollIndex * 5;

	bat3.style.right = `${position}px`;
}

function movemountain(scrollIndex) {
	let start = 500;
	let position = start - scrollIndex;

	if (scrollIndex > 450) {
		mountain.style.position = 'fixed';
		mountain.style.top = '50px';
	} else if (scrollIndex <= 450) {
		mountain.style.top = `${position}px`;
	}
}

function movehelp(scrollIndex) {
	let start = 750;
	let position = start - scrollIndex;

	if (scrollIndex < 350) {
		help.style.top = `${position}px`;
	} else {
		help.style.position = 'fixed';
		help.style.top = '350px';
	}
	console.log(help.style.top);
	console.log(scrollIndex);
}

function movehills(scrollIndex) {
	let start = 850;
	let position = start - scrollIndex * 1.1;

	if (scrollIndex > 700) {
		hills.style.position = 'fixed';
		hills.style.top = '100px';
	} else if (scrollIndex <= 700) {
		hills.style.top = `${position}px`;
	}
}

function moveriver(scrollIndex) {
	let start = 1140;
	let position = start - scrollIndex * 0.8;

	if (scrollIndex > 1200) {
		river.style.position = 'fixed';
		river.style.top = '0px';
	} else if (scrollIndex <= 1200) {
		river.style.top = `${position}px`;
	}

	// console.log(river.style.top);
	// console.log(scrollIndex);
}

function movecliffL(scrollIndex) {
	let start = 2000;
	let position = start - scrollIndex;

	if (scrollIndex > 1800) {
		cliffleft.style.position = 'fixed';
		cliffleft.style.top = '50px';
	} else if (scrollIndex <= 1800) {
		cliffleft.style.top = `${position}px`;
	}
}

function movecliffR(scrollIndex) {
	let start = 2500;
	let position = start - scrollIndex;

	if (scrollIndex > 2500) {
		cliffright.style.position = 'fixed';
		cliffright.style.top = '50px';
	} else if (scrollIndex <= 2500) {
		cliffright.style.top = `${position}px`;
	}
}
