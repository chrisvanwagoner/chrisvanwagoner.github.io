// Created: Wed Aug 07 2024 10:19:45 GMT-0400 (Eastern Daylight Time)
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

// // Adding custom focus class for "tab" keyboard users
// let focusable =  document.querySelectorAll('a, button');
// focusable.forEach((el) => {
// 	el.addEventListener('mousedown', (event) => {
// 		if (event.target.classList.contains('has-focus')) {
// 			event.target.classList.remove('has-focus');
// 		}
// 	});
// 	el.addEventListener('click', (event) => {
// 		if (event.target.classList.contains('has-focus')) {
// 			event.target.classList.remove('has-focus');
// 		}
// 	});
// 	el.addEventListener('keyup', (event) => {
// 		if (event.target.classList.contains('has-focus')) {
// 			event.target.classList.remove('has-focus');
// 		}
// 		if (event.keyCode == '9') {
// 			event.target.classList.add('has-focus');
// 		}
// 	});
// });

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bnRoaXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHJ1bnRoaXMuanMgKi9cblxubGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmxldCBwcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2aWV3XCIpO1xubGV0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlXCIpO1xubGV0IGZhZGVMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYWRlLWxlZnRcIik7XG5sZXQgZmFkZVJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYWRlLXJpZ2h0XCIpO1xubGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbmxldCBjbGllbnRFbnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2xpZW50XCIpO1xubGV0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbmxldCB0YXJnZXRUb3AgPSB3aW5kb3dIZWlnaHQgKiAwLjQ7XG5sZXQgdGFyZ2V0Qm90dG9tID0gd2luZG93SGVpZ2h0ICogMC43O1xuXG4vLyBsZXQgcGF0aE1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX3N2ZyBwYXRoXCIpO1xuLy8gbGV0IHBhdGhNYWluQW5pbWUgPSBhbmltZSh7XG4vLyAgICAgdGFyZ2V0czogcGF0aE1haW4sXG4vLyAgICAgbG9vcDogZmFsc2UsXG4vLyAgICAgZGlyZWN0aW9uOiBcImxpbmVhclwiLFxuLy8gICAgIHN0cm9rZURhc2hvZmZzZXQ6IFthbmltZS5zZXREYXNob2Zmc2V0LCAwXSxcbi8vICAgICBlYXNpbmc6IFwiZWFzZU91dEV4cG9cIixcbi8vICAgICBkdXJhdGlvbjogMzAwMCxcbi8vICAgICBhdXRvcGxheTogZmFsc2UsXG4vLyAgICAgZGVsYXk6IDUwMCxcbi8vIH0pO1xuXG4vLyBsZXQgcGF0aEZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyX19zdmcgcGF0aFwiKTtcbi8vIGxldCBwYXRoRm9vdGVyQW5pbWUgPSBhbmltZSh7XG4vLyAgICAgdGFyZ2V0czogcGF0aEZvb3Rlcixcbi8vICAgICBsb29wOiBmYWxzZSxcbi8vICAgICBkaXJlY3Rpb246IFwibGluZWFyXCIsXG4vLyAgICAgc3Ryb2tlRGFzaG9mZnNldDogW2FuaW1lLnNldERhc2hvZmZzZXQsIDBdLFxuLy8gICAgIGVhc2luZzogXCJlYXNlT3V0RXhwb1wiLFxuLy8gICAgIGR1cmF0aW9uOiA0MDAwLFxuLy8gICAgIGF1dG9wbGF5OiBmYWxzZSxcbi8vICAgICBkZWxheTogNTAwLFxuLy8gfSk7XG5cbi8vIFVwZGF0aW5nICNwcmV2aWV3IHdpdGggY2xpZW50IHNpdGUgaW1hZ2VzXG4vLyBjbGllbnRFbnRyeS5mb3JFYWNoKChlbCkgPT4ge1xuLy8gXHRsZXQgZWxOYW1lID0gZWwucXVlcnlTZWxlY3RvcignLmNsaWVudF9fbmFtZScpO1xuXG4vLyBcdGVsTmFtZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBldmVudCA9PiB7XG4vLyAgICAgICAgIGxldCB4ID0gZXZlbnQucGFnZVg7XG4vLyAgICAgICAgIGxldCB5ID0gZXZlbnQucGFnZVk7XG4vLyBcdFx0Ly8gY29uc29sZS5sb2coYHg6JHt4fSB5OiR7eX1gKTtcbi8vIFx0XHRsZXQgZWxQcmV2aWV3ID0gZXZlbnQudGFyZ2V0Lm9mZnNldFBhcmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJldmlldycpO1xuLy8gXHRcdHByZXZpZXcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIi4uLyR7ZWxQcmV2aWV3fVwiKWA7XG4vLyBcdFx0cHJldmlldy5zdHlsZS5vcGFjaXR5ID0gMC4yO1xuLy8gXHRcdHByZXZpZXcuc3R5bGUuc2V0UHJvcGVydHkoJy0teCcsIGAke3h9cHhgKTtcbi8vIFx0XHRwcmV2aWV3LnN0eWxlLnNldFByb3BlcnR5KCctLXknLCBgJHt5fXB4YCk7XG4vLyBcdH0pO1xuXHRcbi8vIFx0ZWxOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBldmVudCA9PiB7XG4vLyBcdFx0cHJldmlldy5zdHlsZS5vcGFjaXR5ID0gMDtcbi8vIFx0fSk7XG4vLyB9KTtcblxuXG4vLyAvLyBNb3ZlIGhlYWRlciBhbmQgY2xpZW50IGVsZW1lbnRzIGFzIHBhZ2UgaXMgc2Nyb2xsZWRcbi8vIGNvbnN0IHNjcm9sbEV2ZW50cyA9ICgpID0+IHtcbi8vICAgICBmYWRlTGVmdC5mb3JFYWNoKChlbCkgPT4ge1xuLy8gICAgICAgICBsZXQgdG9wID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuLy8gICAgICAgICBsZXQgc3BlZWQgPSBlbC5kYXRhc2V0LnNwZWVkO1xuLy8gICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbGVmdFwiLCAodG9wIC0gZWwub2Zmc2V0VG9wKSAqIHNwZWVkICsgXCJweFwiKTtcbi8vICAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLW9wYWNpdHlcIiwgMSAtIC10b3AgLyA4MDApO1xuLy8gICAgIH0pO1xuLy8gICAgIGZhZGVSaWdodC5mb3JFYWNoKChlbCkgPT4ge1xuLy8gICAgICAgICBsZXQgdG9wID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuLy8gICAgICAgICBsZXQgc3BlZWQgPSBlbC5kYXRhc2V0LnNwZWVkO1xuLy8gICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbGVmdFwiLCAodG9wIC0gZWwub2Zmc2V0VG9wKSAqIHNwZWVkICsgXCJweFwiKTtcbi8vICAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLW9wYWNpdHlcIiwgMSAtIC10b3AgLyA4MDApO1xuLy8gICAgIH0pO1xuXG4vLyAgICAgY2xpZW50RW50cnkuZm9yRWFjaCgoZWwpID0+IHtcbi8vICAgICAgICAgbGV0IGRpc3RGcm9tVG9wID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuLy8gICAgICAgICBsZXQgZWxOYW1lID0gZWwucXVlcnlTZWxlY3RvcihcIi5jbGllbnRfX25hbWVcIik7XG4vLyAgICAgICAgIGxldCB3ZWlnaHQ7XG4vLyAgICAgICAgIGxldCBza2V3O1xuLy8gICAgICAgICBsZXQgdHJhbnNsYXRlWDtcbi8vICAgICAgICAgY29uc3QgbWF4V2VpZ2h0ID0gMzAwO1xuLy8gICAgICAgICBjb25zdCBtYXhTa2V3ID0gMzU7XG4vLyAgICAgICAgIGNvbnN0IG1heFRyYW5zbGF0ZSA9IDEwMDtcbi8vICAgICAgICAgaWYgKGRpc3RGcm9tVG9wIDw9IHRhcmdldFRvcCkge1xuLy8gICAgICAgICAgICAgd2VpZ2h0ID0gKGRpc3RGcm9tVG9wIC8gdGFyZ2V0VG9wKSAqIChtYXhXZWlnaHQgLSAxMDApICsgMTAwO1xuLy8gICAgICAgICAgICAgc2tldyA9ICgodGFyZ2V0VG9wIC0gZGlzdEZyb21Ub3ApIC8gdGFyZ2V0VG9wKSAqIG1heFNrZXc7XG4vLyAgICAgICAgICAgICB0cmFuc2xhdGVYID1cbi8vICAgICAgICAgICAgICAgICAoKHRhcmdldFRvcCAtIGRpc3RGcm9tVG9wKSAvIHRhcmdldFRvcCkgKiogMyAqIG1heFRyYW5zbGF0ZTtcbi8vICAgICAgICAgICAgIGVsTmFtZS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0td2dodFwiLCB3ZWlnaHQpO1xuLy8gICAgICAgICAgICAgZWxOYW1lLnN0eWxlLnNldFByb3BlcnR5KFwiLS1za2V3XCIsIGAke3NrZXcudG9TdHJpbmcoKX1kZWdgKTtcbi8vICAgICAgICAgICAgIGVsTmFtZS5zdHlsZS5zZXRQcm9wZXJ0eShcbi8vICAgICAgICAgICAgICAgICBcIi0tdHJhbnNsYXRlWFwiLFxuLy8gICAgICAgICAgICAgICAgIGAtJHt0cmFuc2xhdGVYLnRvU3RyaW5nKCl9cHhgXG4vLyAgICAgICAgICAgICApO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgZWxOYW1lLnN0eWxlLnNldFByb3BlcnR5KFwiLS13Z2h0XCIsIG1heFdlaWdodCk7XG4vLyAgICAgICAgICAgICBlbE5hbWUuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNrZXdcIiwgXCIwXCIpO1xuLy8gICAgICAgICAgICAgZWxOYW1lLnN0eWxlLnNldFByb3BlcnR5KFwiLS10cmFuc2xhdGVYXCIsIFwiMFwiKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gfTtcblxuLy8gY29uc3QgY2hlY2tTY3JvbGxNYWluID0gKCkgPT4ge1xuLy8gICAgIGxldCBkaXN0RnJvbVRvcCA9IHBhdGhNYWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbi8vICAgICBpZiAoZGlzdEZyb21Ub3AgPD0gdGFyZ2V0Qm90dG9tKSB7XG4vLyAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoZWNrU2Nyb2xsTWFpbik7XG4vLyAgICAgICAgIHBhdGhNYWluQW5pbWUucGxheSgpO1xuLy8gICAgIH1cbi8vIH07XG5cbi8vIGNvbnN0IGNoZWNrU2Nyb2xsRm9vdGVyID0gKCkgPT4ge1xuLy8gICAgIGxldCBkaXN0RnJvbVRvcCA9IHBhdGhGb290ZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuLy8gICAgIGlmIChkaXN0RnJvbVRvcCA8PSB0YXJnZXRCb3R0b20pIHtcbi8vICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hlY2tTY3JvbGxGb290ZXIpO1xuLy8gICAgICAgICBwYXRoRm9vdGVyQW5pbWUucGxheSgpO1xuLy8gICAgIH1cbi8vIH07XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoZWNrU2Nyb2xsTWFpbik7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGVja1Njcm9sbEZvb3Rlcik7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4vLyAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzY3JvbGxFdmVudHMpO1xuLy8gfSk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4vLyAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzY3JvbGxFdmVudHMpO1xuLy8gfSk7XG5cbi8vIFRvZ2dsZSBkYXJrL2xpZ2h0IG1vZGVcbmxldCB0b2dnbGVNb2RlID0gKCkgPT4ge1xuICAgIGlmIChib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmstbW9kZVwiKSA9PSB0cnVlKSB7XG4gICAgICAgIHRvZ2dsZUxpZ2h0TW9kZSgpO1xuICAgIH0gZWxzZSB7XG5cdFx0dG9nZ2xlRGFya01vZGUoKTtcbiAgICB9XG59O1xuXG4vLyB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU1vZGUpO1xubGV0IGNvbG9yU2NoZW1lUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpO1xuY29uc29sZS5sb2cod2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpKTtcbmNvbnNvbGUubG9nKHdpbmRvdyk7XG5cbmNvbnN0IHNldENvbG9yU2NoZW1lID0gKGUpID0+IHtcbiAgICBpZiAoZS5tYXRjaGVzKSB7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImRhcmstbW9kZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsaWdodC1tb2RlXCIpO1xuICAgIH1cbn07XG5cbnNldENvbG9yU2NoZW1lKGNvbG9yU2NoZW1lUXVlcnlMaXN0KTtcbmNvbG9yU2NoZW1lUXVlcnlMaXN0LmFkZEV2ZW50TGlzdGVuZXIoc2V0Q29sb3JTY2hlbWUsIG51bGwpO1xuXG4vLyBjb25zdCB0b2dnbGVMaWdodE1vZGUgPSAoKSA9PiB7XG4vLyBcdGJvZHkuY2xhc3NMaXN0LmFkZChcImxpZ2h0LW1vZGVcIik7XG4vLyBcdGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImRhcmstbW9kZVwiKTtcbi8vIFx0ZG9jdW1lbnQuY29va2llID0gJ3RvZ2dsZWQtY29sb3Itc2NoZW1lPWxpZ2h0LW1vZGU7IGV4cGlyZXM9VGh1LCAwMSBKYW4gMjIyMiAwMDowMDowMCBHTVQ7IFNhbWVTaXRlPU5vbmU7IFNlY3VyZSc7XG4vLyBcdHRvZ2dsZUJ1dHRvbi5pbm5lckhUTUwgPVxuLy8gXHQnPHNwYW4gaWQ9XCJ0b2dnbGUtbGFiZWxcIiBoaWRkZW4+U3dpdGNoIHRvIGRhcmsgbW9kZTwvc3Bhbj4nO1xuLy8gfVxuXG4vLyBjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHtcbi8vIFx0Ym9keS5jbGFzc0xpc3QuYWRkKFwiZGFyay1tb2RlXCIpO1xuLy8gXHRib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodC1tb2RlXCIpO1xuLy8gXHRkb2N1bWVudC5jb29raWUgPSAndG9nZ2xlZC1jb2xvci1zY2hlbWU9ZGFyay1tb2RlOyBleHBpcmVzPVRodSwgMDEgSmFuIDIyMjIgMDA6MDA6MDAgR01UOyBTYW1lU2l0ZT1Ob25lOyBTZWN1cmUnO1xuLy8gXHR0b2dnbGVCdXR0b24uaW5uZXJIVE1MID1cbi8vIFx0JzxzcGFuIGlkPVwidG9nZ2xlLWxhYmVsXCIgaGlkZGVuPlN3aXRjaCB0byBsaWdodCBtb2RlPC9zcGFuPic7XG4vLyB9XG5cbi8vIC8vIEFkZGluZyBjdXN0b20gZm9jdXMgY2xhc3MgZm9yIFwidGFiXCIga2V5Ym9hcmQgdXNlcnNcbi8vIGxldCBmb2N1c2FibGUgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYSwgYnV0dG9uJyk7XG4vLyBmb2N1c2FibGUuZm9yRWFjaCgoZWwpID0+IHtcbi8vIFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4vLyBcdFx0aWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG4vLyBcdFx0XHRldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJyk7XG4vLyBcdFx0fVxuLy8gXHR9KTtcbi8vIFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbi8vIFx0XHRpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcbi8vIFx0XHRcdGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKTtcbi8vIFx0XHR9XG4vLyBcdH0pO1xuLy8gXHRlbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuLy8gXHRcdGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuLy8gXHRcdFx0ZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpO1xuLy8gXHRcdH1cbi8vIFx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PSAnOScpIHtcbi8vIFx0XHRcdGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoYXMtZm9jdXMnKTtcbi8vIFx0XHR9XG4vLyBcdH0pO1xuLy8gfSk7XG5cbi8vIGNoZWNrIGZvciBkaXNwbGF5IG1vZGUgY29va2llIFxuLy8gaWYgc2V0LCBhZGQgYXBwcm9wcmlhdGUgY2xhc3Ncbi8vIGRvY3VtZW50LmNvb2tpZSA9ICdjb2xvci1zY2hlbWUtdG9nZ2xlPWRhcmstbW9kZTsgZXhwaXJlcz1UaHUsIDAxIEphbiAyMjIyIDAwOjAwOjAwIEdNVDsgU2FtZVNpdGU9Tm9uZTsgU2VjdXJlJztcbi8vIGNvbnN0IGFsbENvb2tpZXMgPSBkb2N1bWVudC5jb29raWU7XG4vLyBjb25zb2xlLmxvZyhhbGxDb29raWVzKTtcblxuLy8gY29uc3QgY29va2llVmFsdWUgPSBkb2N1bWVudC5jb29raWVcbi8vIFx0LnNwbGl0KFwiOyBcIilcbi8vIFx0LmZpbmQoKHJvdykgPT4gcm93LnN0YXJ0c1dpdGgoXCJ0b2dnbGVkLWNvbG9yLXNjaGVtZT1cIikpXG4vLyBcdD8uc3BsaXQoXCI9XCIpWzFdO1xuLy8gY29uc29sZS5sb2coY29va2llVmFsdWUpO1xuLy8gaWYgKGNvb2tpZVZhbHVlID09ICdkYXJrLW1vZGUnKSB7XG4vLyBcdHRvZ2dsZURhcmtNb2RlKCk7XG4vLyB9IGVsc2UgaWYgKGNvb2tpZVZhbHVlID09ICdsaWdodC1tb2RlJykge1xuLy8gXHR0b2dnbGVMaWdodE1vZGUoKTtcbi8vIH0gZWxzZSB7XG4vLyB9XG4vLyBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nLWRvbmVcIik7XG5cblxuLy8gVE9ETzogYWRkIGEgc3BjaWFsIHNjcmlwdCBpbiB0aGUgaGVhZCBhYm92ZSB0aGUgc3R5bGUuY3NzIGxvYWQgdG8gdXBkYXRlIHRoZSBjb2xvci1zY2hlbWUiXX0=
