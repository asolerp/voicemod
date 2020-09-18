<template>
  <div class="login-wrapper">
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="login">
        <text-input v-model="email" label="Email" :fullHeight="true" name="email" rules="required|email" type="text" />
        <text-input v-model="password" label="Password" :fullHeight="true" name="password" rules="required|min:4|max:20" type="password"/>
        <button-voicemod type="submit" title="Login" :disabled="invalid"/>
      </form>
    </ValidationObserver>
    <p style="color: white; cursor: pointer" @click="$emit('change-auth-screen', 'SignUp')">Sign Up</p>
  </div>
</template>

<script>

import TextInput from '../components/TextInput'
import ButtonVoicemod from '../components/ButtonVoicemod'
import { ValidationObserver } from 'vee-validate'

export default {
  name: 'Login',
  components: { TextInput, ButtonVoicemod, ValidationObserver },
  data: () => ({
    email: undefined,
    password: undefined
  }),
  methods: {
    login () {
      this.axios.post('/users/signin', { email: this.email, password: this.password }).then(response => console.log(response))
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__row {
      display: flex;
      justify-content: space-between;
      width: 100%
    }
  }
  span {
    width: 100%;
  }
</style>
