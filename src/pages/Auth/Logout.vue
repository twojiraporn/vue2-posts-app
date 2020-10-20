<template>
  <div>
    <h1>Log Out</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import router from '@/router'
export default {
  methods: {
    ...mapActions('account', ['logout']),
    handleLogout() {
      console.log('handle logout')
      this.logout()
      router.push({name: "home"})
    }
  },
  mounted() {
    this.handleLogout()
  }
}
</script>

<style>

</style>