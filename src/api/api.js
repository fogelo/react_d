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
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {

    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return instance.get(`profile/` + userId)
    },

    getStatus(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`,{status: status})
    }
}


export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}

