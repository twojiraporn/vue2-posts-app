<template>
  <div id="app">
    <app-header></app-header>
    
    <div class="container mt-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>

</style>
