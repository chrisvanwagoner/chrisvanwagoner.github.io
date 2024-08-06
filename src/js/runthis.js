/* runthis.js */

let body = document.querySelector("body");
let preview = document.querySelector("#preview");
let toggleButton = document.querySelector(".toggle");
let fadeLeft = document.querySelectorAll(".fade-left");
let fadeRight = document.querySelectorAll(".fade-right");
let main = document.querySelector("main");
let clientEntry = document.querySelectorAll(".client");
let windowHeight = window.innerHeight;
let targetTop = windowHeight * 0.4;
let targetBottom = windowHeight * 0.7;

// let pathMain = document.querySelector(".main__svg path");
// let pathMainAnime = anime({
//     targets: pathMain,
//     loop: false,
//     direction: "linear",
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: "easeOutExpo",
//     duration: 3000,
//     autoplay: false,
//     delay: 500,
// });

// let pathFooter = document.querySelector(".footer__svg path");
// let pathFooterAnime = anime({
//     targets: pathFooter,
//     loop: false,
//     direction: "linear",
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: "easeOutExpo",
//     duration: 4000,
//     autoplay: false,
//     delay: 500,
// });

// Updating #preview with client site images
// clientEntry.forEach((el) => {
// 	let elName = el.querySelector('.client__name');

// 	elName.addEventListener('mouseover', event => {
//         let x = event.pageX;
//         let y = event.pageY;
// 		// console.log(`x:${x} y:${y}`);
// 		let elPreview = event.target.offsetParent.getAttribute('data-preview');
// 		preview.style.backgroundImage = `url("../${elPreview}")`;
// 		preview.style.opacity = 0.2;
// 		preview.style.setProperty('--x', `${x}px`);
// 		preview.style.setProperty('--y', `${y}px`);
// 	});
	
// 	elName.addEventListener('mouseleave', event => {
// 		preview.style.opacity = 0;
// 	});
// });


// // Move header and client elements as page is scrolled
// const scrollEvents = () => {
//     fadeLeft.forEach((el) => {
//         let top = el.getBoundingClientRect().top;
//         let speed = el.dataset.speed;
//         el.style.setProperty("--left", (top - el.offsetTop) * speed + "px");
//         el.style.setProperty("--opacity", 1 - -top / 800);
//     });
//     fadeRight.forEach((el) => {
//         let top = el.getBoundingClientRect().top;
//         let speed = el.dataset.speed;
//         el.style.setProperty("--left", (top - el.offsetTop) * speed + "px");
//         el.style.setProperty("--opacity", 1 - -top / 800);
//     });

//     clientEntry.forEach((el) => {
//         let distFromTop = el.getBoundingClientRect().top;
//         let elName = el.querySelector(".client__name");
//         let weight;
//         let skew;
//         let translateX;
//         const maxWeight = 300;
//         const maxSkew = 35;
//         const maxTranslate = 100;
//         if (distFromTop <= targetTop) {
//             weight = (distFromTop / targetTop) * (maxWeight - 100) + 100;
//             skew = ((targetTop - distFromTop) / targetTop) * maxSkew;
//             translateX =
//                 ((targetTop - distFromTop) / targetTop) ** 3 * maxTranslate;
//             elName.style.setProperty("--wght", weight);
//             elName.style.setProperty("--skew", `${skew.toString()}deg`);
//             elName.style.setProperty(
//                 "--translateX",
//                 `-${translateX.toString()}px`
//             );
//         } else {
//             elName.style.setProperty("--wght", maxWeight);
//             elName.style.setProperty("--skew", "0");
//             elName.style.setProperty("--translateX", "0");
//         }
//     });
// };

// const checkScrollMain = () => {
//     let distFromTop = pathMain.getBoundingClientRect().top;
//     if (distFromTop <= targetBottom) {
//         window.removeEventListener("scroll", checkScrollMain);
//         pathMainAnime.play();
//     }
// };

// const checkScrollFooter = () => {
//     let distFromTop = pathFooter.getBoundingClientRect().top;
//     if (distFromTop <= targetBottom) {
//         window.removeEventListener("scroll", checkScrollFooter);
//         pathFooterAnime.play();
//     }
// };

// window.addEventListener("scroll", checkScrollMain);
// window.addEventListener("scroll", checkScrollFooter);
// window.addEventListener("scroll", () => {
//     window.requestAnimationFrame(scrollEvents);
// });
// window.addEventListener("resize", () => {
//     window.requestAnimationFrame(scrollEvents);
// });

// Toggle dark/light mode
let toggleMode = () => {
    if (body.classList.contains("dark-mode") == true) {
        toggleLightMode();
    } else {
		toggleDarkMode();
    }
};

// toggleButton.addEventListener("click", toggleMode);
let colorSchemeQueryList = window.matchMedia("(prefers-color-scheme: dark)");
console.log(window.matchMedia("(prefers-color-scheme: dark)"));
console.log(window);

const setColorScheme = (e) => {
    if (e.matches) {
        body.classList.add("dark-mode");
    } else {
        body.classList.add("light-mode");
    }
};

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addEventListener(setColorScheme, null);

// const toggleLightMode = () => {
// 	body.classList.add("light-mode");
// 	body.classList.remove("dark-mode");
// 	document.cookie = 'toggled-color-scheme=light-mode; expires=Thu, 01 Jan 2222 00:00:00 GMT; SameSite=None; Secure';
// 	toggleButton.innerHTML =
// 	'<span id="toggle-label" hidden>Switch to dark mode</span>';
// }

// const toggleDarkMode = () => {
// 	body.classList.add("dark-mode");
// 	body.classList.remove("light-mode");
// 	document.cookie = 'toggled-color-scheme=dark-mode; expires=Thu, 01 Jan 2222 00:00:00 GMT; SameSite=None; Secure';
// 	toggleButton.innerHTML =
// 	'<span id="toggle-label" hidden>Switch to light mode</span>';
// }

// Adding custom focus class for "tab" keyboard users
let focusable =  document.querySelectorAll('a, button');
focusable.forEach((el) => {
	el.addEventListener('mousedown', (event) => {
		if (event.target.classList.contains('has-focus')) {
			event.target.classList.remove('has-focus');
		}
	});
	el.addEventListener('click', (event) => {
		if (event.target.classList.contains('has-focus')) {
			event.target.classList.remove('has-focus');
		}
	});
	el.addEventListener('keyup', (event) => {
		if (event.target.classList.contains('has-focus')) {
			event.target.classList.remove('has-focus');
		}
		if (event.keyCode == '9') {
			event.target.classList.add('has-focus');
		}
	});
});

// check for display mode cookie 
// if set, add appropriate class
// document.cookie = 'color-scheme-toggle=dark-mode; expires=Thu, 01 Jan 2222 00:00:00 GMT; SameSite=None; Secure';
// const allCookies = document.cookie;
// console.log(allCookies);

// const cookieValue = document.cookie
// 	.split("; ")
// 	.find((row) => row.startsWith("toggled-color-scheme="))
// 	?.split("=")[1];
// console.log(cookieValue);
// if (cookieValue == 'dark-mode') {
// 	toggleDarkMode();
// } else if (cookieValue == 'light-mode') {
// 	toggleLightMode();
// } else {
// }
// body.classList.add("loading-done");


// TODO: add a spcial script in the head above the style.css load to update the color-scheme