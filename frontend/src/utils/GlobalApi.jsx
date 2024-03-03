const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }
});

// Запрос на вывод категорий
const getCategory = () => axiosClient.get('categories?populate=*');
// Запрос на вывод врачей
const getDoctorsList = () => axiosClient.get('doctors?populate=*');
// Запрос на вывод записей принадлежащих одной категории
const getDoctorsByCategory = (category) => axiosClient.get("/doctors?filters[category][id][$in]="+category+"&populate=*");
// функция для экспорта запросов
export default {
    getCategory,
    getDoctorsList,
    getDoctorsByCategory
}