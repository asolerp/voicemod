<template>
  <img class="image" src="@/assets/logo.png"/>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
  .image {
    position: relative;
    top: 0;
    width: 10vw;
    @include respond(xs) {
      width: 30vw;
      margin-bottom: 20px;
      margin-top: 20px;
    }

  }
</style>
