import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useAuth = defineStore("auth", {
  state: () => ({
    user: null,
    isLoggedIn: false,
  }),

  actions: {
    async getUser() {
      try {
        const response = await api.get("/users");
        this.user = response.data;
        this.isLoggedIn = true;
        return response.data;
      } catch (error) {
        console.error("Error loading new arrivals : ", error);
        return error;
      }
    },

    async login() {
      try {
        this.getUser();
      } catch (error) {
        this.user = null;
        return error;
      }
    },

    logout() {
      try {
        // await api.post("/logout");
        this.user = null;
        this.isLoggedIn = false;
      } catch (err) {
        console.error("Error loading new arrivals : ", err);
        return err;
      }
    },

    changeRole(role) {
      try {
        this.user.role = role;
      } catch (err) {
        console.error("Error loading new arrivals : ", err);
        return err;
      }
    },
  },
  persist: true,
});
