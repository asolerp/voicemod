<template>
  <div class="login-wrapper">
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="login">
        <text-input v-model="email" label="Email" :fullWidth="true" name="email" rules="required|email" type="text" />
        <text-input v-model="password" label="Password" :fullWidth="true" name="password" rules="required|min:4|max:20" type="password"/>
        <button-voicemod :loading="status === 'loading'" type="submit" title="Login" :disabled="invalid"/>
      </form>
    </ValidationObserver>
    <p class="signup" @click="$emit('change-auth-screen', 'SignUp')">Sign Up</p>
    <p class="error-message" v-if="error">{{getError}}</p>
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
    password: undefined,
    error: undefined
  }),
  computed: {
    status () {
      return this.$store.state.auth.status
    },
    getError () {
      return this.error
    }
  },
  methods: {
    showError () {
      this.error = this.status
    },
    login () {
      const { email, password } = this
      this.$store.dispatch(AUTH_REQUEST, { email, password })
        .then(() => {
          console.log('Logged In')
          this.$router.push({ path: '/home' })
        })
        .catch(() => {
          this.error = 'Wrong email or password'
          setTimeout(() => {
            this.error = undefined
          }, 1500)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .signup {
    color: white;
    cursor: pointer;
    margin-bottom: 15px;
    font-size: 20px;
  }
  .error-message {
    color: white;
    text-align: center;
    margin-bottom: 15px;
  }
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
