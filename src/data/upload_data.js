import { getFirestore } from "redux-firestore";
//import data from './data';

import * as data from './Complete_JSON.json';


export function upload_data() {
  //const firestore = getFirestore();
  console.log(data[3]); 
  for (let i = 0; i < 5; i++) {
    console.log(data[i]);   
  }
  //console.log(data[100]);
  // for(var i = 0; i < 4; i++) {
  //   // firestore.collection('data_complete').add({
  //   //   name: data[i].name,
  //   //   faculty: data[i].faculty,
  //   //   administrator: data[i].administrator,
  //   //   division: data[i].division,
  //   // });
  // }
}