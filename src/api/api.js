import * as axios from 'axios' // импортируем все(*) что находится в библиотеке 'axios' в обьект axios

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "59fb2a23-d971-4bf4-856d-efb67c5dbeba"
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
        return instance.put(`profile/status`, { status: status })
    },
    savePhoto(photoFile) {
        var formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}


export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe })
    },
    logout(email, password, rememberMe = false) {
        return instance.delete('auth/login', { email, password, rememberMe })
    }
}

