export const loginAction = (email,password) => {
  return async (dispatch) => {

    const body = {
      email,
      password
    }
  
    const options = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)//,
        //mode: 'no-cors'
    }
  
    fetch('https://reqres.in/api/login', options)
    
    .then(function(response) {

      return response.json();
    })
    .then(function (data) {
      const isLogged = (typeof data.token !== 'undefined' && data.token !== '');
      console.log(data);
  
      return dispatch({
        type: "LOGIN",
        payload : isLogged
      })
  
    });
  }
}

export const logoutAction = () =>

{
  console.log('here22222222222222');

  return {
    type: "LOGIN",
    payload: false
  }

}

export const getUsersAction = (pageNumber) => {
  return async (dispatch) => {
    console.log(pageNumber);
    fetch(`https://reqres.in/api/users?page=${pageNumber}`).then(function(response) {
      return response.json();
    }).then(function (data) {
      return dispatch({
        type: "SET_USERS",
        payload : data
      })
  
    });
  }
}

export const getUserAction = (userID) => {
  return async (dispatch) => {
    fetch(`https://reqres.in/api/users/${userID}`).then(function(response) {
      return response.json();
    }).then(function (data) {
      return dispatch({
        type: "SET_USER_ACTIVE",
        payload : data.data
      })
  
    });
  }
}