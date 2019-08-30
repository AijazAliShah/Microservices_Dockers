import fire from '../../config/Fire';
import firebase from "firebase";
import axios from 'axios';

export const LOGIN = "[auth] LOGIN";
export const AUTH_LOADING = "[auth] AUTH_LOADING";
export const SIGNUP = "[auth] SIGNUP";
export const AUTH_ERROR = "[auth] AUTH_ERROR";


export const loginAsync = (email, password) => {
  return (dispatch, getState) => {
    dispatch(authLoading(true));
    fire.auth().signInWithEmailAndPassword(email, password).then((user) => {

      
      fire.database()
        .ref(`users/${user.user.uid}`).once('value').then((snapshot) => {
            console.log(snapshot.val());
            dispatch(login(snapshot.val()));
        }).then(() => {
           dispatch(authLoading(false))
         }) 
        .catch((error) => {
          dispatch(authLoading(false))
          dispatch(authError(error));
          console.log("firebase error")
        })
      
    }).catch((error) => {
      console.log("signIn Error");
    })

    dispatch(authLoading(false));

  };
};
// export const listenAuth = () => {
//   return (dispatch) => {
//     fire.auth().onAuthStateChanged(user => {
//       if (user) {
//         fire.database()
//               .ref(`users/${user.uid}`).once('value').then((snapshot) => {
//                   console.log(snapshot.val());
//                   dispatch(login(snapshot.val()));
//               }).then(() => {
//                  dispatch(authLoading(false))
//                })
//               .catch((error) => {
//                 dispatch(authLoading(false))
//                 dispatch(authError(error)); 
//                 console.log("firebase error")
//               })
//       } else {
//         dispatch(login(null));
//       }
//     })
//   }
// }
export const logoutAsync = () => {
  return (dispatch, getState) => {
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }
}

export const login = (payload) => {
  return {
    type: LOGIN,
    payload
  };
};

export const authLoading = (payload) => {
  return {
    type: AUTH_LOADING,
    payload
  };
};


export const signupAsync = (fName, lName, email, password, dob, phone, gender, region) => {
  return (dispatch, getState) => {
    dispatch(authLoading(true));

    fire.auth().createUserWithEmailAndPassword(email, password).then((data) => {
      console.log('uid: ', data)
     
      const newUser = {
        firstName: fName,
        lastName: lName,
        dateOfBirth: dob,
        email: email,
        password: password,
        id: data.user.uid,
        phone: phone,
        gender: gender,
        picture: "",
        clubName: "",
        region: region,
        rating: "",
        ratingByClub: "",
        intro: "",
        isOrganizer: false
      }

      axios
      .post('http://localhost:9000/postuser', newUser)
      .then(() => {
        dispatch(signup({
          firstName: fName,
          lastName: lName,
          email: email,
          password: password,
          age: dob
        }));
        dispatch(authLoading(false))
      }).catch((error) => {
        dispatch(authLoading(false))
        dispatch(authError(error));
        console.log("mongodb error")
      })
      // .then()
      // .catch(err => this.setState({ errors: err.response.data }));

    //   fire.database().ref(`users/${data.user.uid}`).set({
    //     firstName: fName,
    //     lastName: lName,
    //     age: pAge,
    //     email: email,
    //     password: password,
    //     id: data.user.uid,
    //     picture: "",
    //     sex: "",
    //     clubName: "",
    //     country: "",
    //     rating: "",
    //     ratingByClub: "",
    //     intro: "",
    //     tournamens: [],
    //     matchesHistory: []

    //   })
    //   .then(() => {
    //     dispatch(signup({
    //       firstName: fName,
    //       lastName: lName,
    //       email: email,
    //       password: password,
    //       age: pAge
    //     }));
    //     dispatch(authLoading(false))
    //   }).catch((error) => {
    //     dispatch(authLoading(false))
    //     dispatch(authError(error));
    //     console.log("firebase error")
    //   })
    
    }
    ).catch((error) => {
      dispatch(authLoading(false))
      dispatch(authError(error));
      console.log("signUp Error");
    })

  };
};


// export const signup2Async = (gender, country, phone) => {
//   return (dispatch, getState) => {
//     dispatch(authLoading(true));

//     // fire.auth().createUserWithEmailAndPassword(email, password).then((data) => {
//     //   console.log('uid: ', data)
     
//       const newUser = {
//         gender: gender,
//         country: country,
//         phone: phone
//       }

//       axios
//       .post('http://localhost:9000/postuser', newUser)
//       .then(() => {
//         // dispatch(signup({
//         //   firstName: fName,
//         //   lastName: lName,
//         //   email: email,
//         //   password: password,
//         //   age: dob
//         // }));
//         dispatch(authLoading(false))
//       }).catch((error) => {
//         dispatch(authLoading(false))
//         dispatch(authError(error));
//         console.log("mongodb error")
//       })
//       // .then()
//       // .catch(err => this.setState({ errors: err.response.data }));

//     //   fire.database().ref(`users/${data.user.uid}`).set({
//     //     firstName: fName,
//     //     lastName: lName,
//     //     age: pAge,
//     //     email: email,
//     //     password: password,
//     //     id: data.user.uid,
//     //     picture: "",
//     //     sex: "",
//     //     clubName: "",
//     //     country: "",
//     //     rating: "",
//     //     ratingByClub: "",
//     //     intro: "",
//     //     tournamens: [],
//     //     matchesHistory: []

//     //   })
//     //   .then(() => {
//     //     dispatch(signup({
//     //       firstName: fName,
//     //       lastName: lName,
//     //       email: email,
//     //       password: password,
//     //       age: pAge
//     //     }));
//     //     dispatch(authLoading(false))
//     //   }).catch((error) => {
//     //     dispatch(authLoading(false))
//     //     dispatch(authError(error));
//     //     console.log("firebase error")
//     //   })
    
//     // }
//     // ).catch((error) => {
//     //   dispatch(authLoading(false))
//     //   dispatch(authError(error));
//     //   console.log("signUp Error");
//     // })

//   };
// };

export const signup = (payload) => {
  return {
    type: SIGNUP,
    payload
  };
};

export const authError = (payload) => {
  return {
    type: AUTH_ERROR,
    payload
  };
};
