<template>
  <div>

  </div>
</template>

<script>
import UserService from '@/services/UserService'
import { mapActions } from 'vuex'
import router from '@/router'

export default {
  methods: {
    ...mapActions('account', ['setProfile']),
    async set() {
      var profile = await UserService.profile()
      this.setProfile(profile.data)
      router.push({name: 'posts'})
    }
  },
  mounted() {
    this.set()
  }
}
</script>

<style>

</style>