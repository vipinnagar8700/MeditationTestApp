import {  apiUrlAddTests, apiUrlGetMeditation, apiUrlGetMeditationPopular, apiUrlGetMeditationSingle, apiUrlGetResult, apiUrlLogin, apiUrlMe, apiUrlRegister, apiUrlTopic, apiUrlTopicTests,} from "./ApiUrl";

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

// Get User Api i.e me Api
export const GetAllTopics =(storedToken)=>{
  const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${storedToken}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

return fetch(`${apiUrlTopic}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {return result})
  .catch((error) => {throw error});
}

// Get User Api i.e me Api
export const GetAllTopicsTests =(storedToken,testData)=>{
  const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${storedToken}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

return fetch(`${apiUrlTopicTests}/${testData?.id}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {return result})
  .catch((error) => {throw error});
}

// AddTests
export const AddTests = (userDataa, userData, Opt) => {
  try {
console.log(Opt
)
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `${userDataa}`);

    const formdata = new FormData();
    formdata.append("topic_id", userData[0]?.topic_id);
    userData.forEach((question, index) => {
      console.log(question)
      formdata.append(`question_id[${index}]`, question.id); // Assuming each question has an 'id' property
      formdata.append(`answer[${index}]`, Opt[index].option); // Assuming Opt is an array of objects with an 'option' property
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow"
    };

    return fetch(`${apiUrlAddTests}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "Result!");
        return result;
      })
      .catch((error) => {
        console.error("Error adding new test result:", error);
        throw error;
      });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get User Api i.e me Api
export const GetReslut =(token,AB)=>{
  const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

return fetch(`${apiUrlGetResult}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {return result})
  .catch((error) => {throw error});
}
// Get MEditation 
// Get User Api i.e me Api
export const GetMeditation =(token)=>{
  const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

return fetch(`${apiUrlGetMeditation}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {return result})
  .catch((error) => {throw error});
}
export const GetMeditationPopular =(token)=>{
  const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

return fetch(`${apiUrlGetMeditationPopular}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {return result})
  .catch((error) => {throw error});
}
// Get User Api i.e me Api
export const GetMeditationSingle =(token,id)=>{
  const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

return fetch(`${apiUrlGetMeditationSingle}/${id}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {return result})
  .catch((error) => {throw error});
}