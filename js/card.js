function christmasCard () {

  const angle = 10;
	const card = document.querySelector(".card");

	card.addEventListener('mouseout', e => {
		card.style.transform = `perspective(300px)
                            rotateY(0deg)
                            rotateX(0deg)`;
	});

	card.addEventListener('mousemove', e => {
		const w = card.clientWidth;
		const h = card.clientHeight;
		const y = (e.offsetX - w * 0.5) / w * angle;
		const x = (1 - (e.offsetY - h * 0.5)) / h * angle;
		card.style.transform = `perspective(300px)
                            rotateX(${x}deg)
                            rotateY(${y}deg)`;
	});

}

christmasCard();