<template>
    <div v-if="currentPost" class="edit-form">
        <h4>Edit Post</h4>
        <form>
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title"
                v-model="currentPost.title"
            />
        </div>
        <div class="form-group">
            <label for="content">Content</label>
            <textarea class="form-control" id="content"
                v-model="currentPost.content"
            ></textarea>
        </div>

        </form>


        <button type="submit" class="badge badge-success"
            @click="updatePost"
        >
        Update
        </button>
        <p>{{ message }}</p>
    </div>

    <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
    </div>
</template>

<script>
import PostsDataService from '@/services/PostsDataService'
import router from '@/router'

export default {
    data () {
        return {
            currentPost: null,
            message: ''
        }
    },

    methods: {
        async getPost(id) {
            let post = await PostsDataService.get(id)
            this.currentPost = post.data
        },

        async updatePost() {
            try {
                await PostsDataService.update(this.currentPost.id, this.currentPost)
                this.message = 'The post was updated successfully!';
                router.push({name: 'posts'})
            } catch (e) {
                this.message = e.message
            }
        }
    },

    mounted() {
        this.message = ''
        this.getPost(this.$route.params.id)
    }
}
</script>

<style>
textarea {
    min-height: 30vh;
}
</style>