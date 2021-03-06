<template>
  <div class="login-wrapper">
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="onSubmit">
        <text-input v-model="email" label="Email" :fullWidth="true" name="email" rules="required|email" type="text" />
        <text-input v-model="password" label="Password" :fullWidth="true" name="password" rules="required|min:4|max:20" type="password"/>
        <div class="login-wrapper__row">
          <v-col class="mr">
            <text-input v-model="name" name="name" rules="required" label="Name" :fullWidth="true" type="text"/>
          </v-col>
            <v-col class="ml">
            <text-input v-model="surname" name="surname" rules="required" label="Surname" :fullWidth="true" type="text"/>
          </v-col>
        </div>
          <text-input v-model="phone" name="phone" rules="required" label="Phone" :fullWidth="$vuetify.breakpoint.mdAndUp ? false : true" type="text"/>
        <div class="login-wrapper__row">
          <v-col class="mr">
            <select-input v-model="country" :list="countriesList" name="country" rules="required" label="Country" :fullWidth="true" type="text"/>
          </v-col>
            <v-col class="ml">
            <text-input v-model="postalCode" name="postalCode" rules="required" label="Postal Code" :fullWidth="true" type="text"/>
          </v-col>
        </div>
        <button-voicemod :loading="status === 'loading'" type="submit" title="Sign Up" :disabled="invalid"/>
      </form>
    </ValidationObserver>
    <p class="login" @click="$emit('change-auth-screen', 'Login')">Login</p>
    <p class="error-message" v-if="error">{{error}}</p>
  </div>
</template>

<script>

import TextInput from '../components/TextInput'
import SelectInput from '../components/SelectInput'
import ButtonVoicemod from '../components/ButtonVoicemod'
import { ValidationObserver } from 'vee-validate'
import { COUNTRIES } from '../utils/countries.js'

import { AUTH_SIGNUP } from '../store/actions/auth'

export default {
  name: 'SignUp',
  components: { TextInput, SelectInput, ButtonVoicemod, ValidationObserver },
  data: () => ({
    email: undefined,
    password: undefined,
    name: undefined,
    surname: undefined,
    country: undefined,
    postalCode: undefined,
    phone: undefined,
    error: undefined,
    countriesList: COUNTRIES
  }),
  computed: {
    status () {
      return this.$store.state.auth.status
    }
  },
  methods: {
    onSubmit () {
      const newUser = {
        email: this.email,
        password: this.password,
        name: this.name,
        surname: this.surname,
        country: this.country,
        phone: this.phone,
        postalCode: this.postalCode
      }
      this.$store.dispatch(AUTH_SIGNUP, newUser)
        .then(() => {
          this.$router.push({ path: '/home' })
        })
        .catch(() => {
          this.error = 'Something went wrong.. try with another email'
          setTimeout(() => {
            this.error = undefined
          }, 1500)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
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
    @include respond(xs) {
      padding: 20px 0 20px 0 !important;
    }
    &__row {
      display: flex;
      justify-content: space-between;
      width: 100%;
      @include respond(xs) {
        flex-direction: column;
      }
    }
  }
  span {
    width: 100%;
  }
</style>
