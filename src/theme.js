import { createTheme } from '@material-ui/core/styles';

// theme.js
export const theme = {
/*
	mastheadBg: '#000',
	mastheadColor: 'white',
	menuBg: '#9CB9BB',
	menuFg: '#162D2D',

	primaryBg: 'white',
	primaryColor: '#777',

	headingColor: '#D2A868',

	math: {
		headerBg: '#dff0d8',
		headerColor: '#3c763d',
		rowBg: 'rgba(223, 240, 216, .2)',
		rowColor: '#666',
		rowAltBg: 'white',
		rowAltColor: '#666',
		color: '#337ab7',
		fontSize: '1.25em',
	},

	circleBg: 'rgba(108, 132, 170, .7)',
	circleColor: 'white',

	primaryDark: '#0D0C1D',
	primaryLight: '#EFFFFA',
	primaryHover: '#343078',
	mobile: '576px',
*/
	mastheadBg: '#72899f',
	mastheadColor: 'white',
	menuBg: '#8b9aa1',
	menuFg: '#162D2D',

	primaryBg: 'white',
	primaryColor: '#777',

	headingColor: '#D2A868',

	math: {
		headerBg: '#dff0d8',
		headerColor: '#3c763d',
		rowBg: 'rgba(223, 240, 216, .2)',
		rowColor: '#666',
		rowAltBg: 'white',
		rowAltColor: '#666',
		color: '#337ab7',
		fontSize: '1.25em',
	},

	circleBg: 'rgba(240, 0, 0, .9)',
	circleColor: 'white',

	calendarCurrentBg: 'rgba(108, 132, 170, .3)',
	calendarCloseBg: '#e00903',

	primaryDark: '#0D0C1D',
	primaryLight: '#EFFFFA',
	primaryHover: '#343078',
	mobile: '576px',

	categories: {
		home: {
			title: 'Home',
			primaryColor: '808080',
			iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
			link: '/',
		},
		trivia: {
			title: 'Trivia',
			primaryColor: '625d76',
			iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
			link: '/',
		},
		thoughts: {
			title: 'Thoughts',
			primaryColor: '455f8e',
			iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
			link: '/',
		},
		logophile: {
			title: 'Logophile',
			primaryColor: '3caea3',
			iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
			link: '/',
		},
		arithmophile: {
			title: 'Arithmophile',
			primaryColor: '0e9338',
			iconPath: 'M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 10h2V5h-4v2h2v8zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z',
			link: '/arithmo',
		},
		bookshelf: {
			title: 'Bookshelf',
			primaryColor: '458e53',
			iconPath: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z',
			link: '/books',
		},
		autodidact: {
			title: 'Lifelong Autodidact',
			primaryColor: 'd500f9',
			iconPath: ['M9 17l3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4', 'M15.47 20.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z'],
			link: '/learning',
		},
		quote: {
			title: 'Memorable Quote',
			primaryColor: 'e91e63',
			iconPath: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z',
			link: '/logophilia',
		},
		professional: {
			title: 'My Craft',
			primaryColor: 'ff3d00',
			iconPath: 'M 12 2 C 8.308 2 5.0855156 4.016 3.3535156 7 L 5.7949219 7 C 6.6949219 5.888 7.8693281 5.0079531 9.2363281 4.5019531 C 8.9233281 5.2299531 8.6724688 6.08 8.4804688 7 L 10.537109 7 C 11.016109 5.023 11.687 4 12 4 C 12.313 4 12.983891 5.023 13.462891 7 L 15.519531 7 C 15.327531 6.08 15.075672 5.2299531 14.763672 4.5019531 C 16.129672 5.0079531 17.305078 5.888 18.205078 7 L 20.646484 7 C 18.914484 4.016 15.692 2 12 2 z M 1 9 L 2.2421875 15 L 3.5507812 15 L 4.4003906 11.529297 L 5.2480469 15 L 6.5507812 15 L 7.7929688 9 L 6.2890625 9 L 5.7519531 12.365234 L 4.953125 9 L 3.8398438 9 L 3.0390625 12.371094 L 2.5078125 9 L 1 9 z M 8.6035156 9 L 9.8457031 15 L 11.154297 15 L 12.003906 11.529297 L 12.851562 15 L 14.154297 15 L 15.396484 9 L 13.894531 9 L 13.355469 12.365234 L 12.558594 9 L 11.443359 9 L 10.644531 12.371094 L 10.111328 9 L 8.6035156 9 z M 16.207031 9 L 17.449219 15 L 18.757812 15 L 19.607422 11.529297 L 20.455078 15 L 21.757812 15 L 23 9 L 21.496094 9 L 20.958984 12.365234 L 20.160156 9 L 19.046875 9 L 18.246094 12.371094 L 17.714844 9 L 16.207031 9 z M 3.3535156 17 C 5.0855156 19.984 8.308 22 12 22 C 15.692 22 18.914484 19.984 20.646484 17 L 18.205078 17 C 17.305078 18.112 16.130672 18.992047 14.763672 19.498047 C 15.075672 18.770047 15.325578 17.92 15.517578 17 L 13.460938 17 C 12.981938 18.977 12.311047 20 11.998047 20 C 11.685047 20 11.016109 18.977 10.537109 17 L 8.4804688 17 C 8.6724688 17.92 8.9243281 18.770047 9.2363281 19.498047 C 7.8703281 18.992047 6.6949219 18.112 5.7949219 17 L 3.3535156 17 z',
			link: '/professional',
		},

		travel: {
			title: 'Travel',
			primaryColor: 'e83e99',
			iconPath: 'M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z',
			link: '/travel',
		}
	}
};

export const createCategoryTheme = specs => {
	var theme = createTheme({
		typography: {
			useNextVariants: true
		},        
		palette: {
			primary: {
				main: '#' + specs.primaryColor,
			},
			secondary: {
				main: '#' + (specs.secondaryColor || 'ccc'),
			},
		},
	});

	return theme;
}

