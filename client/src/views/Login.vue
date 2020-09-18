<template>
  <div class="login-wrapper">
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="login">
        <text-input v-model="email" label="Email" :fullWidth="true" name="email" rules="required|email" type="text" />
        <text-input v-model="password" label="Password" :fullWidth="true" name="password" rules="required|min:4|max:20" type="password"/>
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

// ACTIONS
import { AUTH_REQUEST } from '../store/actions/auth'

export default {
  name: 'Login',
  components: { TextInput, ButtonVoicemod, ValidationObserver },
  data: () => ({
    email: undefined,
    password: undefined
  }),
  methods: {
    login () {
      const { email, password } = this
      this.$store.dispatch(AUTH_REQUEST, { email, password }).then(() => {
        console.log('Logged In')
        this.$router.push({ path: '/home' })
      })
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
