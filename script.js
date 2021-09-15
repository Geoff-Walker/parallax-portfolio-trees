let scrollIndex = 0;

let bg = document.getElementById('home-bg');
let moon = document.querySelector('.img-moon');
let mountain = document.getElementById('mountain');
let hills = document.getElementById('hills');
let river = document.getElementById('river');
let cliffleft = document.getElementById('cliff-left');
let cliffright = document.getElementById('cliff-right');
console.log(cliffright);

window.addEventListener('scroll', (e) => {
	scrollIndex = window.scrollY;
	movebg(scrollIndex);
	movemoon(scrollIndex);
	movemountain(scrollIndex);
	movehills(scrollIndex);
	moveriver(scrollIndex);
});

function movebg(scrollIndex) {
	let start = 0;
	let position = start - scrollIndex / 10;

	if (scrollIndex <= 230) {
		bg.style.top = `${position}px`;
		bg.style.position = 'absolute';
	} else if (scrollIndex > 230) {
		bg.style.top = '-40px';
		bg.style.position = 'fixed';
	}

	// console.log(bg.style.top);
	// console.log(scrollIndex);
}

function movemoon(scrollIndex) {
	let start = 200;
	let position = start + scrollIndex;

	if (scrollIndex > 200) {
		moon.style.position = 'fixed';
		moon.style.top = '50px';
	} else if (scrollIndex <= 200) {
		moon.style.top = `${position}px`;
		moon.style.position = 'absolute';
	}

	console.log(moon.style.top);
}

function movemountain(scrollIndex) {
	let start = 500;
	let position = start - scrollIndex;

	if (scrollIndex > 200) {
		mountain.style.position = 'fixed';
		mountain.style.top = '50px';
	} else if (scrollIndex <= 200) {
		mountain.style.top = `${position}px`;
	}

	// console.log(mountain.style.top);
	// console.log(scrollIndex);
}

function movehills(scrollIndex) {
	let start = 900;
	let position = start - scrollIndex * 1.1;

	if (scrollIndex > 700) {
		hills.style.position = 'fixed';
		hills.style.top = '100px';
	} else if (scrollIndex <= 700) {
		hills.style.top = `${position}px`;
	}

	// console.log(mountain.style.top);
	// console.log(scrollIndex);
}

function moveriver(scrollIndex) {
	let start = 1140;
	let position = start - scrollIndex;

	if (scrollIndex > 1100) {
		river.style.position = 'fixed';
		river.style.top = '50px';
	} else if (scrollIndex <= 1100) {
		river.style.top = `${position}px`;
	}

	// console.log(river.style.top);
	// console.log(scrollIndex);
}

function movecliffL(scrollIndex) {
	let start = 1475;
	let position = start - scrollIndex;

	if (scrollIndex > 1800) {
		cliffleft.style.position = 'fixed';
		cliffleft.style.top = '50px';
	} else if (scrollIndex <= 1800) {
		cliffleft.style.top = `${position}px`;
	}

	console.log(cliffleft.style.top);
	console.log(scrollIndex);
}

function movecliffR(scrollIndex) {
	let start = 1700;
	let position = start - scrollIndex;

	if (scrollIndex > 2000) {
		cliffright.style.position = 'fixed';
		cliffright.style.top = '50px';
	} else if (scrollIndex <= 2000) {
		cliffright.style.top = `${position}px`;
	}

	console.log(cliffright.style.top);
	console.log(scrollIndex);
}
