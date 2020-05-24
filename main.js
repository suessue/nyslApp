var app = new Vue({
	el: '#app',
	data: {
		userLoggedIn: false,
		mensaje: '',
		mensajes: [],
		chatId: "",
		userEmail: '',
		userPassword: '',
		show: "home",
		filteredGames: [],
		teams: ["U1", "U2", "U3", "U4", "U5", "U6", "All Teams"],
		selectedTeam: "",
		listado: [],
		games: {
			september: [{
					Dates: "9/01",
					Teams: "U1 x U4",
					Times: "9:30 a.m.",
					Location: "AJ Katzenmaier",
					Address: "24 W. Walton St., Chicago, IL 60610",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654060426145!2d-87.63123908526362!3d41.9002963720051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575053660400!5m2!1ses-419!2sar",
					Id: "1",
					LocId: "A",
					Chat: []
				},
				{
					Dates: "9/01",
					Teams: "U3 x U2",
					Times: "1:00 p.m.",
					Location: "Greenbay",
					Address: "1734 N. Orleans St., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745258!2d-87.64002798526307!3d41.913806271159174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575055703462!5m2!1ses-419!2sar",
					Id: "2",
					LocId: "B",
					Chat: []
				},
				{
					Dates: "9/08",
					Teams: "U5 x U6",
					Times: "9:30 a.m.",
					Location: "Howard A Yeager",
					Address: "2245 N. Southport Ave., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
					Id: "3",
					LocId: "C",
					Chat: []

				},
				{
					Dates: "9/08",
					Teams: "U6 x U1",
					Times: "1:00 p.m.",
					Location: "Marjorie P Hart",
					Address: "2625 N. Orchard St., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658433!2d-87.64808628511203!3d41.929578279218106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148006975!5m2!1ses-419!2sar",
					Id: "4",
					LocId: "D",
					Chat: []
				},
				{
					Dates: "9/15",
					Teams: "U2 x U4",
					Times: "9:30 a.m.",
					Location: "North",
					Address: "1409 N. Ogden Ave., Chicago, IL 60610",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3377998492138!2d-87.64837698511293!3d41.907096479219845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af0e6ccc3%3A0x26c81c1d557667da!2s1409%20N%20Ogden%20Ave%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148146827!5m2!1ses-419!2sar",
					Id: "5",
					LocId: "E",
					Chat: []
				},
				{
					Dates: "9/15",
					Teams: "U3 x U5",
					Times: "1:00 p.m.",
					Location: "AJ Katzenmaier",
					Address: "24 W. Walton St., Chicago, IL 60610",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654060426145!2d-87.63123908526362!3d41.9002963720051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575053660400!5m2!1ses-419!2sar",
					Id: "6",
					LocId: "A",
					Chat: []
				},
				{
					Dates: "9/22",
					Teams: "U1 x U3",
					Times: "9:30 a.m.",
					Location: "South",
					Address: "2101 N. Fremont St., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7479505250676!2d-87.65355538511241!3d41.91977677921889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101%20N%20Fremont%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148227043!5m2!1ses-419!2sar",
					Id: "7",
					LocId: "F",
					Chat: []
				},
				{
					Dates: "9/22",
					Teams: "U2 x U6",
					Times: "1:00 p.m.",
					Location: "Howard A Yeager",
					Address: "2245 N. Southport Ave., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
					Id: "8",
					LocId: "C",
					Chat: []
				},
				{
					Dates: "9/27",
					Times: "9:30 a.m.",
					Teams: "U4 x U5",
					Location: "Greenbay",
					Address: "1734 N. Orleans St., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745258!2d-87.64002798526307!3d41.913806271159174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575055703462!5m2!1ses-419!2sar",
					Id: "9",
					LocId: "B",
					Chat: []
				}
			],
			october: [{
					Dates: "10/06",
					Teams: "U2 x U5",
					Times: "9:30 a.m.",
					Location: "Marjorie P Hart",
					Address: "2625 N. Orchard St., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658433!2d-87.64808628511203!3d41.929578279218106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148006975!5m2!1ses-419!2sar",
					Id: "10",
					LocId: "D",
					Chat: []
				},
				{
					Dates: "10.06",
					Teams: "U1 x U6",
					Times: "1:00 p.m.",
					Location: "South",
					Address: "2101 N. Fremont St., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7479505250676!2d-87.65355538511241!3d41.91977677921889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101%20N%20Fremont%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148227043!5m2!1ses-419!2sar",
					Id: "11",
					LocId: "F",
					Chat: []
				},
				{
					Dates: "10/13",
					Teams: "U3 x U4",
					Times: "9:30 a.m.",
					Location: "Howard A Yeager",
					Address: "2245 N. Southport Ave., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
					Id: "12",
					LocId: "C",
					Chat: []
				},
				{
					Dates: "10/13",
					Teams: "U5 x U1",
					Times: "1:00 p.m.",
					Location: "Greenbay",
					Address: "1734 N. Orleans St., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745258!2d-87.64002798526307!3d41.913806271159174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575055703462!5m2!1ses-419!2sar",
					Id: "13",
					LocId: "B",
					Chat: []
				},
				{
					Dates: "10/20",
					Teams: "U6 x U3",
					Times: "9:30 a.m.",
					Location: "North",
					Address: "1409 N. Ogden Ave., Chicago, IL 60610",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3377998492138!2d-87.64837698511293!3d41.907096479219845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af0e6ccc3%3A0x26c81c1d557667da!2s1409%20N%20Ogden%20Ave%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148146827!5m2!1ses-419!2sar",
					Id: "14",
					LocId: "E",
					Chat: []
				},
				{
					Dates: "10/20",
					Teams: "U2 x U4",
					Times: "1:00 p.m.",
					Location: "Marjorie P Hart",
					Address: "2625 N. Orchard St., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658433!2d-87.64808628511203!3d41.929578279218106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148006975!5m2!1ses-419!2sar",
					Id: "15",
					LocId: "D",
					Chat: []
				},
				{
					Dates: "10/27",
					Teams: "U3 x U1",
					Times: "9:30 a.m.",
					Location: "AJ Katzenmaier",
					Address: "24 W. Walton St., Chicago, IL 60610",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654060426145!2d-87.63123908526362!3d41.9002963720051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575053660400!5m2!1ses-419!2sar",
					Id: "16",
					LocId: "A",
					Chat: []
				},
				{
					Dates: "10/27",
					Teams: "U2 x U6",
					Times: "1:00 p.m.",
					Location: "Howard A Yeager",
					Address: "2245 N. Southport Ave., Chicago, IL 60614",
					Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
					Id: "17",
					LocId: "C",
					Chat: []
				}
			]
		},

	},
	computed: {
		locationList: function () {
			let locations = [];
			this.games.september.forEach(info => {
				if (locations.findIndex(subInfo => subInfo.Location == info.Location) == -1)
					locations.push(info);
			});
			locations.sort();
			return locations;
		},


	},
	methods: {
		filterTeam: function () {
			var i = 0;
			this.filteredGames = [];
			var selection = this.selectedTeam;
			var listado = this.games.september.concat(this.games.october)

			for (i = 0; i < listado.length; i++) {

				if (listado[i].Teams.includes(selection) || selection == "All Teams") {
					this.filteredGames.push(listado[i])

				}
			}
		},

		display: function (page) {
			this.show = page;
		},
		send: function (gameId) {
			let postData = {
				texto: this.mensaje,
				email: firebase.auth().currentUser.email,
				game: gameId,
				time: new Date().toLocaleString("en-US", {
					timeZone: "America/Argentina/Buenos_Aires"
				})
			};

			firebase.database().ref().push(postData).then(function (result) {
				alert("Your message was sent!")
				app.mensaje = ""
			});
		},

		loginGoogle: function () {
			let provider = new firebase.auth.GoogleAuthProvider();
			firebase.auth().signInWithPopup(provider).then(function () {
				alert("You're in! Now find your game and enter the chat!");
				app.display("games");

			});

		},
		register: function () {
			firebase.auth().createUserWithEmailAndPassword(app.userEmail, app.userPassword)
				.then(function () {
					alert("You're in! Now find your game and enter the chat!");
					app.display("games");

				})
				.catch(function (error) {
					console.log("error papa" + error)
				})
		},
		loginEmail: function () {
			firebase.auth().signInWithEmailAndPassword(app.userEmail, app.userPassword)
				.then(function () {
					alert("You're in! Now find your game and enter the chat!");
					app.display("games");


				})
				.catch(function (error) {
					console.log("error de login" + error)
				})

		},

		detectLogin: function (user) {
			this.userLoggedIn = user != null;
		},

		updateShow: function (x) {
			this.show = 'chat';
			this.chatId = x;

		}
	}
})

firebase.database().ref('/').on('child_added', function (data) {
	app.mensajes.push(data.val())
})

firebase.auth().onAuthStateChanged(app.detectLogin);

// /**
//  * Copyright 2015 Google Inc. All Rights Reserved.
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  *      http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  */
// 'use strict';


// // Shortcuts to DOM Elements.
// var messageForm = document.getElementById('message-form');
// var messageInput = document.getElementById('new-post-message');
// var titleInput = document.getElementById('new-post-title');
// var signInButton = document.getElementById('sign-in-button');
// var signOutButton = document.getElementById('sign-out-button');
// var splashPage = document.getElementById('page-splash');
// var addPost = document.getElementById('add-post');
// var addButton = document.getElementById('add');
// var recentPostsSection = document.getElementById('recent-posts-list');
// var userPostsSection = document.getElementById('user-posts-list');
// var topUserPostsSection = document.getElementById('top-user-posts-list');
// var recentMenuButton = document.getElementById('menu-recent');
// var myPostsMenuButton = document.getElementById('menu-my-posts');
// var myTopPostsMenuButton = document.getElementById('menu-my-top-posts');
// var listeningFirebaseRefs = [];

// /**
//  * Saves a new post to the Firebase DB.
//  */
// // [START write_fan_out]
// function writeNewPost(uid, username, picture, title, body) {
// 	// A post entry.
// 	var postData = {
// 		author: username,
// 		uid: uid,
// 		body: body,
// 		title: title,
// 		starCount: 0,
// 		authorPic: picture
// 	};

// 	// Get a key for a new Post.
// 	var newPostKey = firebase.database().ref().child('posts').push().key;

// 	// Write the new post's data simultaneously in the posts list and the user's post list.
// 	var updates = {};
// 	updates['/posts/' + newPostKey] = postData;
// 	updates['/user-posts/' + uid + '/' + newPostKey] = postData;

// 	return firebase.database().ref().update(updates);
// }
// // [END write_fan_out]

// /**
//  * Star/unstar post.
//  */
// // [START post_stars_transaction]
// function toggleStar(postRef, uid) {
// 	postRef.transaction(function (post) {
// 		if (post) {
// 			if (post.stars && post.stars[uid]) {
// 				post.starCount--;
// 				post.stars[uid] = null;
// 			} else {
// 				post.starCount++;
// 				if (!post.stars) {
// 					post.stars = {};
// 				}
// 				post.stars[uid] = true;
// 			}
// 		}
// 		return post;
// 	});
// }
// // [END post_stars_transaction]

// /**
//  * Creates a post element.
//  */
// function createPostElement(postId, title, text, author, authorId, authorPic) {
// 	var uid = firebase.auth().currentUser.uid;

// 	var html =
// 		'<div class="post post-' + postId + ' mdl-cell mdl-cell--12-col ' +
// 		'mdl-cell--6-col-tablet mdl-cell--4-col-desktop mdl-grid mdl-grid--no-spacing">' +
// 		'<div class="mdl-card mdl-shadow--2dp">' +
// 		'<div class="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">' +
// 		'<h4 class="mdl-card__title-text"></h4>' +
// 		'</div>' +
// 		'<div class="header">' +
// 		'<div>' +
// 		'<div class="avatar"></div>' +
// 		'<div class="username mdl-color-text--black"></div>' +
// 		'</div>' +
// 		'</div>' +
// 		'<span class="star">' +
// 		'<div class="not-starred material-icons">star_border</div>' +
// 		'<div class="starred material-icons">star</div>' +
// 		'<div class="star-count">0</div>' +
// 		'</span>' +
// 		'<div class="text"></div>' +
// 		'<div class="comments-container"></div>' +
// 		'<form class="add-comment" action="#">' +
// 		'<div class="mdl-textfield mdl-js-textfield">' +
// 		'<input class="mdl-textfield__input new-comment" type="text">' +
// 		'<label class="mdl-textfield__label">Comment...</label>' +
// 		'</div>' +
// 		'</form>' +
// 		'</div>' +
// 		'</div>';

// 	// Create the DOM element from the HTML.
// 	var div = document.createElement('div');
// 	div.innerHTML = html;
// 	var postElement = div.firstChild;
// 	if (componentHandler) {
// 		componentHandler.upgradeElements(postElement.getElementsByClassName('mdl-textfield')[0]);
// 	}

// 	var addCommentForm = postElement.getElementsByClassName('add-comment')[0];
// 	var commentInput = postElement.getElementsByClassName('new-comment')[0];
// 	var star = postElement.getElementsByClassName('starred')[0];
// 	var unStar = postElement.getElementsByClassName('not-starred')[0];

// 	// Set values.
// 	postElement.getElementsByClassName('text')[0].innerText = text;
// 	postElement.getElementsByClassName('mdl-card__title-text')[0].innerText = title;
// 	postElement.getElementsByClassName('username')[0].innerText = author || 'Anonymous';
// 	postElement.getElementsByClassName('avatar')[0].style.backgroundImage = 'url("' +
// 		(authorPic || './silhouette.jpg') + '")';

// 	// Listen for comments.
// 	// [START child_event_listener_recycler]
// 	var commentsRef = firebase.database().ref('post-comments/' + postId);
// 	commentsRef.on('child_added', function (data) {
// 		addCommentElement(postElement, data.key, data.val().text, data.val().author);
// 	});

// 	commentsRef.on('child_changed', function (data) {
// 		setCommentValues(postElement, data.key, data.val().text, data.val().author);
// 	});

// 	commentsRef.on('child_removed', function (data) {
// 		deleteComment(postElement, data.key);
// 	});
// 	// [END child_event_listener_recycler]

// 	// Listen for likes counts.
// 	// [START post_value_event_listener]
// 	var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
// 	starCountRef.on('value', function (snapshot) {
// 		updateStarCount(postElement, snapshot.val());
// 	});
// 	// [END post_value_event_listener]

// 	// Listen for the starred status.
// 	var starredStatusRef = firebase.database().ref('posts/' + postId + '/stars/' + uid);
// 	starredStatusRef.on('value', function (snapshot) {
// 		updateStarredByCurrentUser(postElement, snapshot.val());
// 	});

// 	// Keep track of all Firebase reference on which we are listening.
// 	listeningFirebaseRefs.push(commentsRef);
// 	listeningFirebaseRefs.push(starCountRef);
// 	listeningFirebaseRefs.push(starredStatusRef);

// 	// Create new comment.
// 	addCommentForm.onsubmit = function (e) {
// 		e.preventDefault();
// 		createNewComment(postId, firebase.auth().currentUser.displayName, uid, commentInput.value);
// 		commentInput.value = '';
// 		commentInput.parentElement.MaterialTextfield.boundUpdateClassesHandler();
// 	};

// 	// Bind starring action.
// 	var onStarClicked = function () {
// 		var globalPostRef = firebase.database().ref('/posts/' + postId);
// 		var userPostRef = firebase.database().ref('/user-posts/' + authorId + '/' + postId);
// 		toggleStar(globalPostRef, uid);
// 		toggleStar(userPostRef, uid);
// 	};
// 	unStar.onclick = onStarClicked;
// 	star.onclick = onStarClicked;

// 	return postElement;
// }

// /**
//  * Writes a new comment for the given post.
//  */
// function createNewComment(postId, username, uid, text) {
// 	firebase.database().ref('post-comments/' + postId).push({
// 		text: text,
// 		author: username,
// 		uid: uid
// 	});
// }

// /**
//  * Updates the starred status of the post.
//  */
// function updateStarredByCurrentUser(postElement, starred) {
// 	if (starred) {
// 		postElement.getElementsByClassName('starred')[0].style.display = 'inline-block';
// 		postElement.getElementsByClassName('not-starred')[0].style.display = 'none';
// 	} else {
// 		postElement.getElementsByClassName('starred')[0].style.display = 'none';
// 		postElement.getElementsByClassName('not-starred')[0].style.display = 'inline-block';
// 	}
// }

// /**
//  * Updates the number of stars displayed for a post.
//  */
// function updateStarCount(postElement, nbStart) {
// 	postElement.getElementsByClassName('star-count')[0].innerText = nbStart;
// }

// /**
//  * Creates a comment element and adds it to the given postElement.
//  */
// function addCommentElement(postElement, id, text, author) {
// 	var comment = document.createElement('div');
// 	comment.classList.add('comment-' + id);
// 	comment.innerHTML = '<span class="username"></span><span class="comment"></span>';
// 	comment.getElementsByClassName('comment')[0].innerText = text;
// 	comment.getElementsByClassName('username')[0].innerText = author || 'Anonymous';

// 	var commentsContainer = postElement.getElementsByClassName('comments-container')[0];
// 	commentsContainer.appendChild(comment);
// }

// /**
//  * Sets the comment's values in the given postElement.
//  */
// function setCommentValues(postElement, id, text, author) {
// 	var comment = postElement.getElementsByClassName('comment-' + id)[0];
// 	comment.getElementsByClassName('comment')[0].innerText = text;
// 	comment.getElementsByClassName('fp-username')[0].innerText = author;
// }

// /**
//  * Deletes the comment of the given ID in the given postElement.
//  */
// function deleteComment(postElement, id) {
// 	var comment = postElement.getElementsByClassName('comment-' + id)[0];
// 	comment.parentElement.removeChild(comment);
// }

// /**
//  * Starts listening for new posts and populates posts lists.
//  */
// function startDatabaseQueries() {
// 	// [START my_top_posts_query]
// 	var myUserId = firebase.auth().currentUser.uid;
// 	var topUserPostsRef = firebase.database().ref('user-posts/' + myUserId).orderByChild('starCount');
// 	// [END my_top_posts_query]
// 	// [START recent_posts_query]
// 	var recentPostsRef = firebase.database().ref('posts').limitToLast(100);
// 	// [END recent_posts_query]
// 	var userPostsRef = firebase.database().ref('user-posts/' + myUserId);

// 	var fetchPosts = function (postsRef, sectionElement) {
// 		postsRef.on('child_added', function (data) {
// 			var author = data.val().author || 'Anonymous';
// 			var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
// 			containerElement.insertBefore(
// 				createPostElement(data.key, data.val().title, data.val().body, author, data.val().uid, data.val().authorPic),
// 				containerElement.firstChild);
// 		});
// 		postsRef.on('child_changed', function (data) {
// 			var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
// 			var postElement = containerElement.getElementsByClassName('post-' + data.key)[0];
// 			postElement.getElementsByClassName('mdl-card__title-text')[0].innerText = data.val().title;
// 			postElement.getElementsByClassName('username')[0].innerText = data.val().author;
// 			postElement.getElementsByClassName('text')[0].innerText = data.val().body;
// 			postElement.getElementsByClassName('star-count')[0].innerText = data.val().starCount;
// 		});
// 		postsRef.on('child_removed', function (data) {
// 			var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
// 			var post = containerElement.getElementsByClassName('post-' + data.key)[0];
// 			post.parentElement.removeChild(post);
// 		});
// 	};

// 	// Fetching and displaying all posts of each sections.
// 	fetchPosts(topUserPostsRef, topUserPostsSection);
// 	fetchPosts(recentPostsRef, recentPostsSection);
// 	fetchPosts(userPostsRef, userPostsSection);

// 	// Keep track of all Firebase refs we are listening to.
// 	listeningFirebaseRefs.push(topUserPostsRef);
// 	listeningFirebaseRefs.push(recentPostsRef);
// 	listeningFirebaseRefs.push(userPostsRef);
// }

// /**
//  * Writes the user's data to the database.
//  */
// // [START basic_write]
// function writeUserData(userId, name, email, imageUrl) {
// 	firebase.database().ref('users/' + userId).set({
// 		username: name,
// 		email: email,
// 		profile_picture: imageUrl
// 	});
// }
// // [END basic_write]

// /**
//  * Cleanups the UI and removes all Firebase listeners.
//  */
// function cleanupUi() {
// 	// Remove all previously displayed posts.
// 	topUserPostsSection.getElementsByClassName('posts-container')[0].innerHTML = '';
// 	recentPostsSection.getElementsByClassName('posts-container')[0].innerHTML = '';
// 	userPostsSection.getElementsByClassName('posts-container')[0].innerHTML = '';

// 	// Stop all currently listening Firebase listeners.
// 	listeningFirebaseRefs.forEach(function (ref) {
// 		ref.off();
// 	});
// 	listeningFirebaseRefs = [];
// }

// /**
//  * The ID of the currently signed-in User. We keep track of this to detect Auth state change events that are just
//  * programmatic token refresh but not a User status change.
//  */
// var currentUID;

// /**
//  * Triggers every time there is a change in the Firebase auth state (i.e. user signed-in or user signed out).
//  */
// function onAuthStateChanged(user) {
// 	// We ignore token refresh events.
// 	if (user && currentUID === user.uid) {
// 		return;
// 	}

// 	cleanupUi();
// 	if (user) {
// 		currentUID = user.uid;
// 		splashPage.style.display = 'none';
// 		writeUserData(user.uid, user.displayName, user.email, user.photoURL);
// 		startDatabaseQueries();
// 	} else {
// 		// Set currentUID to null.
// 		currentUID = null;
// 		// Display the splash page where you can sign-in.
// 		splashPage.style.display = '';
// 	}
// }

// /**
//  * Creates a new post for the current user.
//  */
// function newPostForCurrentUser(title, text) {
// 	// [START single_value_read]
// 	var userId = firebase.auth().currentUser.uid;
// 	return firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
// 		var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
// 		// [START_EXCLUDE]
// 		return writeNewPost(firebase.auth().currentUser.uid, username,
// 			firebase.auth().currentUser.photoURL,
// 			title, text);
// 		// [END_EXCLUDE]
// 	});
// 	// [END single_value_read]
// }

// /**
//  * Displays the given section element and changes styling of the given button.
//  */
// function showSection(sectionElement, buttonElement) {
// 	recentPostsSection.style.display = 'none';
// 	userPostsSection.style.display = 'none';
// 	topUserPostsSection.style.display = 'none';
// 	addPost.style.display = 'none';
// 	recentMenuButton.classList.remove('is-active');
// 	myPostsMenuButton.classList.remove('is-active');
// 	myTopPostsMenuButton.classList.remove('is-active');

// 	if (sectionElement) {
// 		sectionElement.style.display = 'block';
// 	}
// 	if (buttonElement) {
// 		buttonElement.classList.add('is-active');
// 	}
// }

// // Bindings on load.
// window.addEventListener('load', function () {
// 	// Bind Sign in button.
// 	signInButton.addEventListener('click', function () {
// 		var provider = new firebase.auth.GoogleAuthProvider();
// 		firebase.auth().signInWithPopup(provider);
// 	});

// 	// Bind Sign out button.
// 	signOutButton.addEventListener('click', function () {
// 		firebase.auth().signOut();
// 	});

// 	// Listen for auth state changes
// 	firebase.auth().onAuthStateChanged(onAuthStateChanged);

// 	// Saves message on form submit.
// 	messageForm.onsubmit = function (e) {
// 		e.preventDefault();
// 		var text = messageInput.value;
// 		var title = titleInput.value;
// 		if (text && title) {
// 			newPostForCurrentUser(title, text).then(function () {
// 				myPostsMenuButton.click();
// 			});
// 			messageInput.value = '';
// 			titleInput.value = '';
// 		}
// 	};

// 	// Bind menu buttons.
// 	recentMenuButton.onclick = function () {
// 		showSection(recentPostsSection, recentMenuButton);
// 	};
// 	myPostsMenuButton.onclick = function () {
// 		showSection(userPostsSection, myPostsMenuButton);
// 	};
// 	myTopPostsMenuButton.onclick = function () {
// 		showSection(topUserPostsSection, myTopPostsMenuButton);
// 	};
// 	addButton.onclick = function () {
// 		showSection(addPost);
// 		messageInput.value = '';
// 		titleInput.value = '';
// 	};
// 	recentMenuButton.onclick();
// }, false);