<template>
  <div class="login-wrapper">
    <text-input label="Email" fullHeight/>
    <text-input label="Password" fullHeight/>
    <div class="login-wrapper__row">
      <text-input label="Nombre"/>
      <text-input label="Apellido"/>
    </div>
    <div class="login-wrapper__row">
      <text-input label="País"/>>
      <text-input label="Código Postal"/>
    </div>
    <button style="color: white" type="button" @click="$emit('change-auth-screen', 'Login')">Login</button>
  </div>
</template>

<script>

import TextInput from '../components/TextInput'

export default {
  name: 'SignUp',
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
