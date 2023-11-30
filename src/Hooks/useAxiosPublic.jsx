import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://happy-homes-hub-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;