<template>
  <div></div>
</template>

<script>
import UserService from "@/services/UserService";
import { mapActions } from "vuex";
import router from "@/router";

export default {
  methods: {
    ...mapActions("account", ["setProfile"]),
    async set() {
      var profile = await UserService.profile();
      localStorage.setItem("profile", JSON.stringify(profile.data));
      this.setProfile(profile.data);
      console.log(profile);
      router.push({ name: "posts" });
    }
  },
  mounted() {
    this.set();
  }
};
</script>

<style>
</style>