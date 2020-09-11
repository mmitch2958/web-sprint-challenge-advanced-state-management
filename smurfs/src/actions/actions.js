import axios from "axios";


//EXPORT ACTIONS FOR FETCHING
export const FETCHING_SMURF_START = "FETCHING_SMURF START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_ERROR = "FETCHING_DATA_ERROR";

//EXPORT ACTIONS FOR ADDING DATA
export const NEW_SMURF_START = "NEW_SMURF_START";
export const NEW_SMURF_SUCCESS = "NEW_SMURF_SUCCESS";
export const NEW_SMURF_ERROR = "NEW_SMURF_ERROR";

//Fetch a Smurf
export const getSmurf = () => (dispatch) => {
  console.log("This is the getSmurf info");
  dispatch({ type: "FETCHING_SMURF_START" });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
      console.log("The Response for Smurf Data is :", res);
    })
    .catch((err) => {
      dispatch({
        type: FETCHING_SMURF_ERROR,
        payload: `${err.response.status} ${err.response.data}`,
      });
      console.log("The Error is :", err);
    });
};
// Posting a new Smurf 
export const postNewSmurf = (smurf) => (dispatch) => {
    console.log("This is the Post info");
    dispatch({ type: "NEW_SMURF_START" });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
        dispatch({ type: NEW_SMURF_SUCCESS, payload: res.data });
        console.log("The Response for Success Adding :", res);
      })
      .catch((err) => {
        dispatch({
          type: NEW_SMURF_ERROR,
          payload: `${err.response.status} ${err.response.data}`,
        });
        console.log("The Error is:", err);
      });
};

