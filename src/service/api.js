//axios with interceptors for api fetching 

import axios from 'axios';

import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from "../constants/config";

//backend url
const API_URL = 'http://localhost:8000';


const axiosInstance = axios.create = axios.create({
    baseURL: API_URL,
    timeout: 10000, //if api goes into pending state in miliseconds
    headers: {
        "content-type": "application/json"
    }
})

axiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        //stop global loader here
        return processResponse(response);
    },
    function (error) {
        //stop global loader here 
        return Promise.reject(processError(error));
    }
)

//If success -> return { isSuccess: true, data: object }
//If fail -> return { isFailure: true, status: string, code: int}

const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: response.data };
    } else {
        return{
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
       
    }
}

const processError = (error) => {
    if(error.response) {
        //Request made and server responded with a status other
        //that falls out of the range of 2.x.x
        console.log('ERROR IN RESPONSE: ', error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.responseFailure,
            code: error.response.status
        }
    }else if(error.request){
        //Request made but no response was received
        console.log('ERROR IN REQUEST: ', error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        }
    }else {
        //something happened in setting up that triggers an error 
        console.log('ERROR IN NETWORK: ', error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkFailure,
            code: ""
        }
    }
}

//Creating object API 
const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) => 
        axiosInstance({
            url: value.url,
            method: value.method,
            data: body,
            responseType: value.responseType,
            onUploadProgress: function (progressEvent){
                if(showUploadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress: function (progressEvent){
                if(showDownloadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentageCompleted);
                }
            }   
        })
}

export { API };