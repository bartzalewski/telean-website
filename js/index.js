// AOS INIT
AOS.init();

// WORDS ARRAY
const words = [
	'Instalacja central alarmowych',
	'Montaż anten satelitarnych',
	'Instalacja monitoringów',
	'Montaż sieci informatycznych',
	'Usługi operatorów VoIP',
	'Sprzęt i centrale telekomunikacyjne'
];

const t = setInterval(function() {
	const randomNumber = Math.round(Math.random() * (words.length - 1));
	$('#changing').html(words[randomNumber]);
}, 3000);

// SCROLLABLE NAVBAR
$(document).scroll(function() {
	var scrl = $(this).scrollTop();
	if (scrl > 250) {
		$('.navbar').addClass('navbar--scroll');
	} else {
		$('.navbar').removeClass('navbar--scroll');
	}

	if (scrl < 501) {
		$('.navbar__nav__home').addClass('active');
	} else {
		$('.navbar__nav__home').removeClass('active');
	}

	if (scrl > 500 && scrl < 1101) {
		$('.navbar__nav__about').addClass('active');
	} else {
		$('.navbar__nav__about').removeClass('active');
	}

	if (scrl > 1100 && scrl < 1800) {
		$('.navbar__nav__services').addClass('active');
	} else {
		$('.navbar__nav__services').removeClass('active');
	}

	if (scrl > 1800) {
		$('.navbar__nav__contact').addClass('active');
	} else {
		$('.navbar__nav__contact').removeClass('active');
	}
});

// MOBILE NAV
function openNav() {
	document.getElementById('sidenav').style.width = '250px';
}

function closeNav() {
	document.getElementById('sidenav').style.width = '0';
}
