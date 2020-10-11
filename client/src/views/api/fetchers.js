import axios from 'axios';

//contact information and helpline
export const fetchHelp=async () => {
    try{
        const response= await axios.get("https://api.rootnet.in/covid19-in/contacts")

        return response.data.data.contacts.regional;
    }
    catch(error){

    }
}

//notifications
export const fetchUpdates=async () => {
    try{
        const response= await axios.get("https://api.rootnet.in/covid19-in/notifications")

        return response.data;
    }
    catch(error){

    }
}


//hospitals/beds
export const fetchInfoHos=async () => {
    try{
        const response= await axios.get("https://api.rootnet.in/covid19-in/hospitals/beds")

        return response.data.data.regional;
    }
    catch(error){

    }
}

//hospitals/medical-colleges
export const fetchInfo=async () => {
    try{
        const response= await axios.get("https://api.rootnet.in/covid19-in/hospitals/medical-colleges")

        return response.data.data.medicalColleges;
    }
    catch(error){

    }
}