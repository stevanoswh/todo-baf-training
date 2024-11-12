const API_URL = 'http://localhost:3000/users'

export const login = async (email, password) => {
    try {
        const response = await fetch(API_URL)
        const users = await response.json()
        const user = users.find(user => user.email === email && user.password === password)

        if (user) {
            localStorage.setItem('isAuthenticated', 'true')
            return {success: true, user}
        } else {
            return {success: false, message: 'Invalid email or password'}
        }
    } catch (error) {
        console.error('Error logging in', error)
        return {success: false, message: 'Error logging in'}
    }
}

export const logout = () => {
    localStorage.removeItem('isAuthenticated')
}