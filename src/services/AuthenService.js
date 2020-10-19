import http from "@/plugins/auth"

class AuthenService {
    login () {
        // request authorize code
        let state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        window.location = `${process.env.VUE_APP_API_BASE_URL}/oauth/authorize?client_id=${process.env.VUE_APP_CLIENT_ID}&redirect_uri=${process.env.VUE_APP_REDIRECT_URI}&response_type=code&scope=posts view-profile&state=${state}`
    }

    async validate_authorize(code) {
        // request access token
        var response = await http.post("/token", {
            'grant_type' : 'authorization_code',
            'code' : code,
            'client_id' : process.env.VUE_APP_CLIENT_ID,
            'client_secret': process.env.VUE_APP_CLIENT_SECRET,
            'redirect_uri' : process.env.VUE_APP_REDIRECT_URI
        })
        
        localStorage.setItem('user', JSON.stringify(response.data))
        return response.data
    }

    async logout() {
        localStorage.removeItem('user')
    }
}

export default new AuthenService();