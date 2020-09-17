<template>
  <div class="login-wrapper">
    <text-input label="Email" fullHeight/>
    <text-input label="Password" fullHeight/>
    <button style="color: white" type="button" @click="$emit('change-auth-screen', 'SignUp')">SignUp</button>
  </div>
</template>

<script>

import TextInput from '../components/TextInput'

export default {
  name: 'Login',
  components: { TextInput }
}
</script>

<style lang="scss" scoped>
  .login-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;;
    &__row {
      display: flex;
      justify-content: space-between;
      width: 100%
    }
  }
</style>
