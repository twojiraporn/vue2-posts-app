<template>
  <div>
      <div class="card">
            <div class="card-header">
                    <h5 class="card-title">{{ post.title }}</h5>
                    <p :title="post.created_at | moment('dddd, MMMM Do YYYY, h:mm:ss a')">
                        {{ post.created_at | moment("from") }}
                    </p>
            </div>
            <div class="card-body">
                <div class="card-text">{{ post.content }}</div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style>

</style>