<template>
  <div class='home'>
    <img alt='Vue logo' src='../assets/logo.png'>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Home',
  components: {
  },
  mounted () {
    axios.get('http://localhost:8081/hola').then(response => console.log(response))
  }

}
</script>
