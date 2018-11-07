//project we want to add
//with thunk we return an action instead of object
export const createProject = (project) => {
  return (dispatch, getState) => {
    //make async call to database
    dispatch({ type: 'CREATE_PROJECT', project });
  }
}