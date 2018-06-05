import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA3BXES-xjBN8dZfQi5mxEBgBEwXbgL_08",
  authDomain: "nba-project-61a9f.firebaseapp.com",
  databaseURL: "https://nba-project-61a9f.firebaseio.com",
  projectId: "nba-project-61a9f",
  storageBucket: "nba-project-61a9f.appspot.com",
  messagingSenderId: "511763871247"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();

const firebaseArticles = firebaseDB.ref("articles");
const firebaseTeams = firebaseDB.ref("teams");
const firebaseVideos = firebaseDB.ref("videos");

const firebaseLoop = (snapshot) =>{
  const data=[];
  snapshot.forEach((child)=>{
    data.push({
      ...child.val(),
      id: child.key
    }) 
  })
  return data;
}

export{
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseTeams,
  firebaseVideos,
  firebaseLoop
}



