import http from "@/plugins/axios"

class UserService {
    profile() {
      return http.get("/user");
    }
}
  
export default new UserService();