<template>
    <div>
        <div class="list row">
            <div class="col-md-8">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search by title"
                            v-model="title"/>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button"
                            @click="searchTitle">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <h4>Posts List</h4>
                <ul class="list-group all-posts" v-if="posts">
                    <li class="list-group-item"
                        :class="{ active: index == currentIndex }"
                        v-for="(post, index) in posts"
                        :key="index"
                        @click="setActivePost(post, index)"
                    >
                        <calendar-icon class="date" :date="post.created_at"></calendar-icon>{{ post.title }}
                    </li>
                </ul>
                <div v-else>
                    No Posts
                </div>
            </div>
            <div class="col-md-6">
                <div v-if="currentPost">
                    <h4>Post</h4>

                    <post-view :post="currentPost"></post-view>

                    <a class="badge badge-warning"
                        :href="'/posts/' + currentPost.id">
                        Edit
                    </a>
                </div>
                <div v-else>
                    <br />
                    <p>Please click on a Post...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostsDataService from "@/services/PostsDataService";
import PostView from '@/components/PostView'
import CalendarIcon from '@/components/CalendarIcon'
import { mapState } from 'vuex'

export default {
    data() {
        return {
            posts: [],
            currentPost: null,
            currentIndex: -1,
            title: ""
        }
    },
    computed: {
        ...mapState('account', ['user'])
    },
    methods: {
        retrievePosts() {
            PostsDataService.getAll()
                .then(response => {
                    this.posts = response.data
                    console.log(response.data)
                })
                .catch(e => {
                    console.log(e.message)
                })
        },

        refreshList() {
            this.retrievePosts();
            this.currentTutorial = null;
            this.currentIndex = -1;
        },

        setActivePost(post, index) {
            this.currentPost = post;
            this.currentIndex = index;
        },

        async searchTitle() {
            this.title = this.title.trim()
            if (this.title != "") {
                let posts = await PostsDataService.find(this.title)
                this.posts = posts.data
            } else {
                this.retrievePosts()
            }
        }
    },
    mounted() {
        if (this.user) {
            this.retrievePosts();
        }
    },
    components: {
        PostView,
        CalendarIcon
    }
}
</script>

<style>
.all-posts{
    max-height: 80vh;
    overflow: scroll;
    
}

.date {
    float: left;
    margin-right: 1em;
}
</style>