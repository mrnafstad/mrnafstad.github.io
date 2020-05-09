<template>
  <p>{{ greeting }}!</p>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        greeting: "Hello world, it's me"
      };
    }
  };
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>