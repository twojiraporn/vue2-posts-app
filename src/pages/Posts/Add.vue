<template>
    <div class="row">
    <div class="col-md-6">
        <h1>Add New Post</h1>
        <div class="alert alert-danger" v-if="error">
            {{ error }}
        </div>

        <div v-if="!submitted">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control"
                    id="title" required v-model="post.title"
                    name="title"
                />
            </div>

            <div class="form-group">
                <label for="content">Content</label>
                <textarea class="form-control"
                    id="content" required v-model="post.content"
                    name="content"
                />
            </div>

            <button @click="savePost" class="btn btn-success">Submit</button>
        </div>

        <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newPost">Add</button>
            <button class="btn btn-primary ml-1" @click="home">Back to Posts</button>
        </div>
    </div>

    <div class="col-md-6 mt-5">
        <h4>Preview Post</h4>
        <post-view :post="post"></post-view>
    </div>
    </div>
</template>

<script>
import PostsDataService from "@/services/PostsDataService";
import PostView from '@/components/PostView'
import router from '@/router'

export default {
  name: "add-post",
  data() {
    return {
      post: {
        id: null,
        title: "",
        content: ""
      },
      submitted: false,
      error: ""
    };
  },
  methods: {
    savePost() {
      var data = {
        title: this.post.title,
        content: this.post.content
      };

      PostsDataService.create(data)
        .then(response => {
          this.post.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          this.error = ""
        })
        .catch(e => {
          this.error = e.message
        });
    },
    
    newPost() {
      this.submitted = false;
      this.post = {};
    },

    home() {
        router.push({name: 'posts'})
    }
  },
  components: {
      PostView
  }
};
</script>

<style>

textarea {
    min-height: 30vh;
}
</style>