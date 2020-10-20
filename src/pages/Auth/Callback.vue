<template>
  <div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import router from '@/router'

export default {
    
    methods: {
        ...mapActions('account', ['loginWithCode']),
        async init() {
            await this.loginWithCode(this.$route.query.code)
            router.push({name: 'profile'})
        }
    },
    mounted() {
        this.init()
    }
}
</script>

<style>

</style>