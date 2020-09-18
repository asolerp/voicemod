<template>
  <div class="login-wrapper">
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="onSubmit">
        <text-input v-model="email" label="Email" :fullWidth="true" name="email" rules="required|email" type="text" />
        <text-input v-model="password" label="Password" :fullWidth="true" name="password" rules="required|min:4|max:20" type="password"/>
        <div class="login-wrapper__row">
          <text-input v-model="name" name="name" rules="required" label="Nombre" type="text"/>
          <text-input v-model="surname" name="surname" rules="required" label="Apellido" type="text"/>
        </div>
          <text-input v-model="phone" name="phone" rules="required" label="Teléfono" type="text"/>
        <div class="login-wrapper__row">
          <text-input v-model="country" name="country" rules="required" label="País" type="text"/>
          <text-input v-model="postalCode" name="postalCode" rules="required" label="Código Postal" type="text"/>
        </div>
        <button-voicemod type="submit" title="Sign Up" :disabled="invalid"/>
      </form>
    </ValidationObserver>
    <p style="color: white; cursor: pointer" @click="$emit('change-auth-screen', 'Login')">Login</p>
  </div>
</template>

<script>

import TextInput from '../components/TextInput'
import ButtonVoicemod from '../components/ButtonVoicemod'
import { ValidationObserver } from 'vee-validate'

export default {
  name: 'SignUp',
  components: { TextInput, ButtonVoicemod, ValidationObserver },
  data: () => ({
    email: undefined,
    password: undefined,
    name: undefined,
    surname: undefined,
    country: undefined,
    postalCode: undefined,
    phone: undefined
  }),
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
      this.axios.post('/users/signup', newUser).then(response => console.log(response))
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
    align-items: center;;
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
