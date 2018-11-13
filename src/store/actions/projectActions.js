import { getFirestore } from "redux-firestore";

//project we want to add
//with thunk we return an action instead of object
export const createProject = (project) => {
  return (dispatch, getState, ) => {
    //make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Admin',
      authorLastName: 'Doe',
      authorId: 543,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
      console.log('test');
    }).catch((err) => {
      dispatch({type: 'CREATE_PROJECT_ERROR', err})
    })
    
  }
}