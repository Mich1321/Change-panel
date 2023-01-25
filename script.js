const backGround = document.querySelector(".container");
const bodyBgc = document.querySelector("body");
const btnColor = document.querySelector(".btn-bgc");
const btnImage = document.querySelector(".btn-bgi");
const btnReset = document.querySelector(".btn-reset");

const changeBgc = () => {
	let randomColor = Math.floor(Math.random() * 16777215).toString(16);
	backGround.style.backgroundColor = "#" + randomColor;
};

const changeBody = () => {
	let bigSize = [
		"url(https://cdn.pixabay.com/photo/2023/01/14/13/17/bellflower-7718193_960_720.jpg)",
		"url(https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766_960_720.jpg)",
		"url(https://cdn.pixabay.com/photo/2022/10/29/19/21/golden-eagle-7555959_960_720.jpg)",
		"url(https://cdn.pixabay.com/photo/2022/10/24/11/55/autumn-7543217_960_720.jpg)",
		"url(https://cdn.pixabay.com/photo/2023/01/12/05/32/duck-7713310_960_720.jpg)",
		"url(https://cdn.pixabay.com/photo/2023/01/14/19/50/flower-7718952_960_720.jpg)",
		"url(https://cdn.pixabay.com/photo/2022/11/14/10/49/mountains-7591326_960_720.jpg)",
		"url(https://cdn.pixabay.com/photo/2023/01/10/08/48/water-7709322_960_720.jpg)",
		"url(https://cdn.pixabay.com/photo/2023/01/12/07/19/rat-7713508_960_720.jpg)",
		"url(https://cdn.pixabay.com/photo/2022/07/11/08/44/tower-7314495_960_720.jpg)",
	];
	let random = Math.floor(Math.random() * bigSize.length) + 0;
	bodyBgc.style.backgroundImage = bigSize[random];
};

const reset = () => {
	backGround.style.backgroundColor = "gray";
	bodyBgc.style.backgroundImage = "none";
};

btnColor.addEventListener("click", changeBgc);
btnImage.addEventListener("click", changeBody);
btnReset.addEventListener("click", reset);
