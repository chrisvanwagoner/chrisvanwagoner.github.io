// Created: Tue Aug 06 2024 11:40:30 GMT-0400 (Eastern Daylight Time)
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bnRoaXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBydW50aGlzLmpzICovXG5cbmxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5sZXQgcHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldmlld1wiKTtcbmxldCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZVwiKTtcbmxldCBmYWRlTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFkZS1sZWZ0XCIpO1xubGV0IGZhZGVSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFkZS1yaWdodFwiKTtcbmxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5sZXQgY2xpZW50RW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNsaWVudFwiKTtcbmxldCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5sZXQgdGFyZ2V0VG9wID0gd2luZG93SGVpZ2h0ICogMC40O1xubGV0IHRhcmdldEJvdHRvbSA9IHdpbmRvd0hlaWdodCAqIDAuNztcblxuLy8gbGV0IHBhdGhNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19zdmcgcGF0aFwiKTtcbi8vIGxldCBwYXRoTWFpbkFuaW1lID0gYW5pbWUoe1xuLy8gICAgIHRhcmdldHM6IHBhdGhNYWluLFxuLy8gICAgIGxvb3A6IGZhbHNlLFxuLy8gICAgIGRpcmVjdGlvbjogXCJsaW5lYXJcIixcbi8vICAgICBzdHJva2VEYXNob2Zmc2V0OiBbYW5pbWUuc2V0RGFzaG9mZnNldCwgMF0sXG4vLyAgICAgZWFzaW5nOiBcImVhc2VPdXRFeHBvXCIsXG4vLyAgICAgZHVyYXRpb246IDMwMDAsXG4vLyAgICAgYXV0b3BsYXk6IGZhbHNlLFxuLy8gICAgIGRlbGF5OiA1MDAsXG4vLyB9KTtcblxuLy8gbGV0IHBhdGhGb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3Rlcl9fc3ZnIHBhdGhcIik7XG4vLyBsZXQgcGF0aEZvb3RlckFuaW1lID0gYW5pbWUoe1xuLy8gICAgIHRhcmdldHM6IHBhdGhGb290ZXIsXG4vLyAgICAgbG9vcDogZmFsc2UsXG4vLyAgICAgZGlyZWN0aW9uOiBcImxpbmVhclwiLFxuLy8gICAgIHN0cm9rZURhc2hvZmZzZXQ6IFthbmltZS5zZXREYXNob2Zmc2V0LCAwXSxcbi8vICAgICBlYXNpbmc6IFwiZWFzZU91dEV4cG9cIixcbi8vICAgICBkdXJhdGlvbjogNDAwMCxcbi8vICAgICBhdXRvcGxheTogZmFsc2UsXG4vLyAgICAgZGVsYXk6IDUwMCxcbi8vIH0pO1xuXG4vLyBVcGRhdGluZyAjcHJldmlldyB3aXRoIGNsaWVudCBzaXRlIGltYWdlc1xuLy8gY2xpZW50RW50cnkuZm9yRWFjaCgoZWwpID0+IHtcbi8vIFx0bGV0IGVsTmFtZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jbGllbnRfX25hbWUnKTtcblxuLy8gXHRlbE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZXZlbnQgPT4ge1xuLy8gICAgICAgICBsZXQgeCA9IGV2ZW50LnBhZ2VYO1xuLy8gICAgICAgICBsZXQgeSA9IGV2ZW50LnBhZ2VZO1xuLy8gXHRcdC8vIGNvbnNvbGUubG9nKGB4OiR7eH0geToke3l9YCk7XG4vLyBcdFx0bGV0IGVsUHJldmlldyA9IGV2ZW50LnRhcmdldC5vZmZzZXRQYXJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXByZXZpZXcnKTtcbi8vIFx0XHRwcmV2aWV3LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIuLi8ke2VsUHJldmlld31cIilgO1xuLy8gXHRcdHByZXZpZXcuc3R5bGUub3BhY2l0eSA9IDAuMjtcbi8vIFx0XHRwcmV2aWV3LnN0eWxlLnNldFByb3BlcnR5KCctLXgnLCBgJHt4fXB4YCk7XG4vLyBcdFx0cHJldmlldy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS15JywgYCR7eX1weGApO1xuLy8gXHR9KTtcblx0XG4vLyBcdGVsTmFtZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZXZlbnQgPT4ge1xuLy8gXHRcdHByZXZpZXcuc3R5bGUub3BhY2l0eSA9IDA7XG4vLyBcdH0pO1xuLy8gfSk7XG5cblxuLy8gLy8gTW92ZSBoZWFkZXIgYW5kIGNsaWVudCBlbGVtZW50cyBhcyBwYWdlIGlzIHNjcm9sbGVkXG4vLyBjb25zdCBzY3JvbGxFdmVudHMgPSAoKSA9PiB7XG4vLyAgICAgZmFkZUxlZnQuZm9yRWFjaCgoZWwpID0+IHtcbi8vICAgICAgICAgbGV0IHRvcCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbi8vICAgICAgICAgbGV0IHNwZWVkID0gZWwuZGF0YXNldC5zcGVlZDtcbi8vICAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWxlZnRcIiwgKHRvcCAtIGVsLm9mZnNldFRvcCkgKiBzcGVlZCArIFwicHhcIik7XG4vLyAgICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcGFjaXR5XCIsIDEgLSAtdG9wIC8gODAwKTtcbi8vICAgICB9KTtcbi8vICAgICBmYWRlUmlnaHQuZm9yRWFjaCgoZWwpID0+IHtcbi8vICAgICAgICAgbGV0IHRvcCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbi8vICAgICAgICAgbGV0IHNwZWVkID0gZWwuZGF0YXNldC5zcGVlZDtcbi8vICAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWxlZnRcIiwgKHRvcCAtIGVsLm9mZnNldFRvcCkgKiBzcGVlZCArIFwicHhcIik7XG4vLyAgICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KFwiLS1vcGFjaXR5XCIsIDEgLSAtdG9wIC8gODAwKTtcbi8vICAgICB9KTtcblxuLy8gICAgIGNsaWVudEVudHJ5LmZvckVhY2goKGVsKSA9PiB7XG4vLyAgICAgICAgIGxldCBkaXN0RnJvbVRvcCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbi8vICAgICAgICAgbGV0IGVsTmFtZSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIuY2xpZW50X19uYW1lXCIpO1xuLy8gICAgICAgICBsZXQgd2VpZ2h0O1xuLy8gICAgICAgICBsZXQgc2tldztcbi8vICAgICAgICAgbGV0IHRyYW5zbGF0ZVg7XG4vLyAgICAgICAgIGNvbnN0IG1heFdlaWdodCA9IDMwMDtcbi8vICAgICAgICAgY29uc3QgbWF4U2tldyA9IDM1O1xuLy8gICAgICAgICBjb25zdCBtYXhUcmFuc2xhdGUgPSAxMDA7XG4vLyAgICAgICAgIGlmIChkaXN0RnJvbVRvcCA8PSB0YXJnZXRUb3ApIHtcbi8vICAgICAgICAgICAgIHdlaWdodCA9IChkaXN0RnJvbVRvcCAvIHRhcmdldFRvcCkgKiAobWF4V2VpZ2h0IC0gMTAwKSArIDEwMDtcbi8vICAgICAgICAgICAgIHNrZXcgPSAoKHRhcmdldFRvcCAtIGRpc3RGcm9tVG9wKSAvIHRhcmdldFRvcCkgKiBtYXhTa2V3O1xuLy8gICAgICAgICAgICAgdHJhbnNsYXRlWCA9XG4vLyAgICAgICAgICAgICAgICAgKCh0YXJnZXRUb3AgLSBkaXN0RnJvbVRvcCkgLyB0YXJnZXRUb3ApICoqIDMgKiBtYXhUcmFuc2xhdGU7XG4vLyAgICAgICAgICAgICBlbE5hbWUuc3R5bGUuc2V0UHJvcGVydHkoXCItLXdnaHRcIiwgd2VpZ2h0KTtcbi8vICAgICAgICAgICAgIGVsTmFtZS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2tld1wiLCBgJHtza2V3LnRvU3RyaW5nKCl9ZGVnYCk7XG4vLyAgICAgICAgICAgICBlbE5hbWUuc3R5bGUuc2V0UHJvcGVydHkoXG4vLyAgICAgICAgICAgICAgICAgXCItLXRyYW5zbGF0ZVhcIixcbi8vICAgICAgICAgICAgICAgICBgLSR7dHJhbnNsYXRlWC50b1N0cmluZygpfXB4YFxuLy8gICAgICAgICAgICAgKTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIGVsTmFtZS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0td2dodFwiLCBtYXhXZWlnaHQpO1xuLy8gICAgICAgICAgICAgZWxOYW1lLnN0eWxlLnNldFByb3BlcnR5KFwiLS1za2V3XCIsIFwiMFwiKTtcbi8vICAgICAgICAgICAgIGVsTmFtZS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdHJhbnNsYXRlWFwiLCBcIjBcIik7XG4vLyAgICAgICAgIH1cbi8vICAgICB9KTtcbi8vIH07XG5cbi8vIGNvbnN0IGNoZWNrU2Nyb2xsTWFpbiA9ICgpID0+IHtcbi8vICAgICBsZXQgZGlzdEZyb21Ub3AgPSBwYXRoTWFpbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4vLyAgICAgaWYgKGRpc3RGcm9tVG9wIDw9IHRhcmdldEJvdHRvbSkge1xuLy8gICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGVja1Njcm9sbE1haW4pO1xuLy8gICAgICAgICBwYXRoTWFpbkFuaW1lLnBsYXkoKTtcbi8vICAgICB9XG4vLyB9O1xuXG4vLyBjb25zdCBjaGVja1Njcm9sbEZvb3RlciA9ICgpID0+IHtcbi8vICAgICBsZXQgZGlzdEZyb21Ub3AgPSBwYXRoRm9vdGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbi8vICAgICBpZiAoZGlzdEZyb21Ub3AgPD0gdGFyZ2V0Qm90dG9tKSB7XG4vLyAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoZWNrU2Nyb2xsRm9vdGVyKTtcbi8vICAgICAgICAgcGF0aEZvb3RlckFuaW1lLnBsYXkoKTtcbi8vICAgICB9XG4vLyB9O1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGVja1Njcm9sbE1haW4pO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hlY2tTY3JvbGxGb290ZXIpO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuLy8gICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsRXZlbnRzKTtcbi8vIH0pO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuLy8gICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsRXZlbnRzKTtcbi8vIH0pO1xuXG4vLyBUb2dnbGUgZGFyay9saWdodCBtb2RlXG5sZXQgdG9nZ2xlTW9kZSA9ICgpID0+IHtcbiAgICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrLW1vZGVcIikgPT0gdHJ1ZSkge1xuICAgICAgICB0b2dnbGVMaWdodE1vZGUoKTtcbiAgICB9IGVsc2Uge1xuXHRcdHRvZ2dsZURhcmtNb2RlKCk7XG4gICAgfVxufTtcblxuLy8gdG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVNb2RlKTtcbmxldCBjb2xvclNjaGVtZVF1ZXJ5TGlzdCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTtcbmNvbnNvbGUubG9nKHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKSk7XG5jb25zb2xlLmxvZyh3aW5kb3cpO1xuXG5jb25zdCBzZXRDb2xvclNjaGVtZSA9IChlKSA9PiB7XG4gICAgaWYgKGUubWF0Y2hlcykge1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJkYXJrLW1vZGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibGlnaHQtbW9kZVwiKTtcbiAgICB9XG59O1xuXG5zZXRDb2xvclNjaGVtZShjb2xvclNjaGVtZVF1ZXJ5TGlzdCk7XG5jb2xvclNjaGVtZVF1ZXJ5TGlzdC5hZGRFdmVudExpc3RlbmVyKHNldENvbG9yU2NoZW1lLCBudWxsKTtcblxuLy8gY29uc3QgdG9nZ2xlTGlnaHRNb2RlID0gKCkgPT4ge1xuLy8gXHRib2R5LmNsYXNzTGlzdC5hZGQoXCJsaWdodC1tb2RlXCIpO1xuLy8gXHRib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrLW1vZGVcIik7XG4vLyBcdGRvY3VtZW50LmNvb2tpZSA9ICd0b2dnbGVkLWNvbG9yLXNjaGVtZT1saWdodC1tb2RlOyBleHBpcmVzPVRodSwgMDEgSmFuIDIyMjIgMDA6MDA6MDAgR01UOyBTYW1lU2l0ZT1Ob25lOyBTZWN1cmUnO1xuLy8gXHR0b2dnbGVCdXR0b24uaW5uZXJIVE1MID1cbi8vIFx0JzxzcGFuIGlkPVwidG9nZ2xlLWxhYmVsXCIgaGlkZGVuPlN3aXRjaCB0byBkYXJrIG1vZGU8L3NwYW4+Jztcbi8vIH1cblxuLy8gY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7XG4vLyBcdGJvZHkuY2xhc3NMaXN0LmFkZChcImRhcmstbW9kZVwiKTtcbi8vIFx0Ym9keS5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHQtbW9kZVwiKTtcbi8vIFx0ZG9jdW1lbnQuY29va2llID0gJ3RvZ2dsZWQtY29sb3Itc2NoZW1lPWRhcmstbW9kZTsgZXhwaXJlcz1UaHUsIDAxIEphbiAyMjIyIDAwOjAwOjAwIEdNVDsgU2FtZVNpdGU9Tm9uZTsgU2VjdXJlJztcbi8vIFx0dG9nZ2xlQnV0dG9uLmlubmVySFRNTCA9XG4vLyBcdCc8c3BhbiBpZD1cInRvZ2dsZS1sYWJlbFwiIGhpZGRlbj5Td2l0Y2ggdG8gbGlnaHQgbW9kZTwvc3Bhbj4nO1xuLy8gfVxuXG5cblxuLy8gQWRkaW5nIGN1c3RvbSBmb2N1cyBjbGFzcyBmb3IgXCJ0YWJcIiBrZXlib2FyZCB1c2Vyc1xubGV0IGZvY3VzYWJsZSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhLCBidXR0b24nKTtcbmZvY3VzYWJsZS5mb3JFYWNoKChlbCkgPT4ge1xuXHRlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcblx0XHRpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGFzLWZvY3VzJykpIHtcblx0XHRcdGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKTtcblx0XHR9XG5cdH0pO1xuXHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtZm9jdXMnKSkge1xuXHRcdFx0ZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1mb2N1cycpO1xuXHRcdH1cblx0fSk7XG5cdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0aWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1mb2N1cycpKSB7XG5cdFx0XHRldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWZvY3VzJyk7XG5cdFx0fVxuXHRcdGlmIChldmVudC5rZXlDb2RlID09ICc5Jykge1xuXHRcdFx0ZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hhcy1mb2N1cycpO1xuXHRcdH1cblx0fSk7XG59KTtcblxuLy8gY2hlY2sgZm9yIGRpc3BsYXkgbW9kZSBjb29raWUgXG4vLyBpZiBzZXQsIGFkZCBhcHByb3ByaWF0ZSBjbGFzc1xuLy8gZG9jdW1lbnQuY29va2llID0gJ2NvbG9yLXNjaGVtZS10b2dnbGU9ZGFyay1tb2RlOyBleHBpcmVzPVRodSwgMDEgSmFuIDIyMjIgMDA6MDA6MDAgR01UOyBTYW1lU2l0ZT1Ob25lOyBTZWN1cmUnO1xuLy8gY29uc3QgYWxsQ29va2llcyA9IGRvY3VtZW50LmNvb2tpZTtcbi8vIGNvbnNvbGUubG9nKGFsbENvb2tpZXMpO1xuXG4vLyBjb25zdCBjb29raWVWYWx1ZSA9IGRvY3VtZW50LmNvb2tpZVxuLy8gXHQuc3BsaXQoXCI7IFwiKVxuLy8gXHQuZmluZCgocm93KSA9PiByb3cuc3RhcnRzV2l0aChcInRvZ2dsZWQtY29sb3Itc2NoZW1lPVwiKSlcbi8vIFx0Py5zcGxpdChcIj1cIilbMV07XG4vLyBjb25zb2xlLmxvZyhjb29raWVWYWx1ZSk7XG4vLyBpZiAoY29va2llVmFsdWUgPT0gJ2RhcmstbW9kZScpIHtcbi8vIFx0dG9nZ2xlRGFya01vZGUoKTtcbi8vIH0gZWxzZSBpZiAoY29va2llVmFsdWUgPT0gJ2xpZ2h0LW1vZGUnKSB7XG4vLyBcdHRvZ2dsZUxpZ2h0TW9kZSgpO1xuLy8gfSBlbHNlIHtcbi8vIH1cbi8vIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvYWRpbmctZG9uZVwiKTtcblxuXG4vLyBUT0RPOiBhZGQgYSBzcGNpYWwgc2NyaXB0IGluIHRoZSBoZWFkIGFib3ZlIHRoZSBzdHlsZS5jc3MgbG9hZCB0byB1cGRhdGUgdGhlIGNvbG9yLXNjaGVtZSJdfQ==
