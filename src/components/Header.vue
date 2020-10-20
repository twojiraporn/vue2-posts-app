<template>
    <header class="header">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <router-link to="/" class="navbar-brand">PoZt</router-link>
            <div class="navbar-nav mr-auto" >
                <li class="nav-item" v-if="user">
                    <router-link to="/posts" class="nav-link">All Posts</router-link>
                </li>
                <li class="nav-item" v-if="user">
                    <router-link to="/add" class="nav-link">Add Post</router-link>
                </li>
            </div>
            <div class="navbar-nav">
                <li class="nav-item" v-if="!user">
                    <router-link to="/login" class="nav-link">Login</router-link>
                </li>
                <li class="nav-item" v-if="profile">
                    <span href="#" class="nav-link">
                        <img class="rounded-circle" width="30" :src="profile.profile_photo_url" alt="">
                        {{ profile.name }}
                    </span>
                </li>
                <li class="nav-item" v-if="user">
                    <router-link to="/logout" class="nav-link">Logout</router-link>
                </li>
            </div>
        </nav>
    </header>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: "app-header",
    computed: {
        ...mapState('account', ['user', 'profile'])
    }
}
</script>
<style>

</style>