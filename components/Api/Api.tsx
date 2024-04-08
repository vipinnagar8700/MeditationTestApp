import {  apiUrlLogin, apiUrlMe, apiUrlRegister,} from "./ApiUrl";

// Login Api
export const LoginApi = (email, password) => {
  const myHeaders = new Headers();

  const formdata = new FormData();
  formdata.append("email", email);
  formdata.append("password", password);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return fetch(`${apiUrlLogin}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw error;
    });
};

// Register Api
export const RegisterApi = (email,password) => {
  const formdata = new FormData();
  formdata.append("email", email);
  formdata.append("password", password);

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  return fetch(
    `${apiUrlRegister}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw error;
    });
};

// Get User Api i.e me Api
export const UserDetailsApi =(storedToken)=>{
  const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${storedToken}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

return fetch(`${apiUrlMe}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {return result})
  .catch((error) => {throw error});
}
