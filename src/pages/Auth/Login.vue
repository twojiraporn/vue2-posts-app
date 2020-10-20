<template>
  <div>
    <h1>Redirecting...</h1>
  </div>
</template>

<script>
import AuthenService from '@/services/AuthenService'
import router from '@/router'

export default {
  methods: {
    async login() {
      await AuthenService.login()
      router.push({name: 'posts'})
    }
  },
  mounted() {
    this.login()
  }
}
</script>

<style>

</style>