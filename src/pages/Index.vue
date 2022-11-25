<template>
  <Layout>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    mounted() {
      window.$ = require('jquery');
    }
  }
}

</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
