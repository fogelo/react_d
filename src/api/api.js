import * as axios from 'axios' // импортируем все(*) что находится в библиотеке 'axios' в обьект axios

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "dbb2362b-785b-4f9a-847a-900f168fe50a"
    },
    

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    }
}
