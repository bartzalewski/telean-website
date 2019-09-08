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
		$('.navbar__home').addClass('active');
	} else {
		$('.navbar__home').removeClass('active');
	}

	if (scrl > 500 && scrl < 1101) {
		$('.navbar__about').addClass('active');
	} else {
		$('.navbar__about').removeClass('active');
	}

	if (scrl > 1100 && scrl < 1800) {
		$('.navbar__services').addClass('active');
	} else {
		$('.navbar__services').removeClass('active');
	}

	if (scrl > 1800) {
		$('.navbar__contact').addClass('active');
	} else {
		$('.navbar__contact').removeClass('active');
	}
});

// MOBILE NAV
openNav = () => {
	document.getElementById('sidenav').style.width = '250px';
};
closeNav = () => {
	document.getElementById('sidenav').style.width = '0';
};
