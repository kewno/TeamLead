document.addEventListener('DOMContentLoaded', () => { 
	let time = document.querySelector('.forms__timer');
	
	function timer(seconds) {   
		let now = Date.now();
		let then = now + seconds * 1000;
		setInterval(() => {
		    let secondsLeft = Math.round((then - Date.now()) / 1000);
		    if (secondsLeft < 0 || secondsLeft === 0) {
		    	time.innerHTML = '00:00';
		    	return;
		    } else {
		    	let minutes, seconds;

		    	Math.floor(secondsLeft / 60) > 10 ? minutes = Math.floor(secondsLeft / 60) : minutes = `0${Math.floor(secondsLeft / 60)}`;
		    	(secondsLeft % 60) > 10 ? seconds = secondsLeft % 60 : seconds = `0${secondsLeft % 60}`;
		    	
		    	time.innerHTML = `${minutes}:${seconds}`;
		    }
		}, 1000); 
	}
	timer(1800);


	let phone = document.querySelector('#phone');
	phone?.addEventListener('keydown', (e) => {
		if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
			(event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode >= 35 && event.keyCode <= 39)) {
			return;
		} else {
			if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
				event.preventDefault();
			}
		}
	})



	let form = document.querySelector('.form');

	
	let btnScroll = document.querySelectorAll('.to-form');
	btnScroll?.forEach(el => {
		el.addEventListener('click', () => {
			form.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
		})
	})


	form?.addEventListener('submit', (e) => {
		e.preventDefault(); // убрать когда будет отправка на сервер

		let name = document.querySelector('#name').value;
		
		if (name.trim().length < 1) {
			alert('Введите имя');
		} else if (phone.value.trim().length < 1) {
			alert('Введите телефон');
		} 
		if (name.trim().length > 1 && phone.value.trim().length > 1) {
			// тут отправка на сервер
			alert('submit');
		}
	})
})