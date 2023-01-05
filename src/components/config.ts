const URL_DEV = "http://localhost:5000";
const URL_PROD = "https://food-scheduler-backend.vercel.app";

const URL_SERVER = URL_PROD;

const URLS = {
  POST_FIRST_MEAL: URL_SERVER + "/firstmeal/",
  POST_SECOND_MEAL: URL_SERVER + "/secondmeal/",
  GET_USER_BYNAME: URL_SERVER + "/getuserbyname/",
  GET_USER_BYID: URL_SERVER + "/getuserbyid/",
  CREATE_USER: URL_SERVER + "/register/",
};

export default URLS;
