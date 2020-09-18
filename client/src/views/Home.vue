<template>
  <v-container class='home-wrapper'>
    <h2 class="home-wrapper__logout">Logout</h2>
    <img class="home-wrapper__image" alt='Vue logo' src='../assets/logo.png'>
    <v-row class="home-wrapper__row">
      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="onSubmit">
          <text-input v-model="user.email" label="Email" :fullWidth="true" name="email" rules="email" type="text" />
          <div class="login-wrapper__row">
            <v-col class="mr">
              <text-input v-model="user.password" :fullWidth="true" label="Password" name="password" rules="min:4|max:20" type="password"/>
              <button-voicemod type="submit" title="Update password" :disabled="!user.password" mode="outliner"/>
            </v-col>
          </div>
          <div class="login-wrapper__row">
            <v-col class="mr">
              <text-input v-model="user.name" :fullWidth="true" name="name" rules="" label="Nombre" type="text"/>
            </v-col>
             <v-col class="ml">
              <text-input v-model="user.surname" :fullWidth="true" name="surname" rules="" label="Apellido" type="text"/>
            </v-col>
          </div>
          <div class="login-wrapper__row">
            <v-col class="mr">
              <text-input v-model="user.phone" :fullWidth="true" name="phone" rules="" label="Teléfono" type="text"/>
            </v-col>
             <v-col class="ml" />
          </div>
          <div class="login-wrapper__row">
            <v-col class="mr">
              <text-input v-model="user.country" :fullWidth="true" name="country" rules="" label="País" type="text"/>
            </v-col>
            <v-col class="ml">
              <text-input v-model="user.postalCode" :fullWidth="true" name="postalCode" rules="" label="Código Postal" type="text"/>
            </v-col>
          </div>
          <button-voicemod type="submit" title="Sign Up" :disabled="invalid"/>
        </form>
      </ValidationObserver>
    </v-row>
  </v-container>
</template>

<script>

import TextInput from '../components/TextInput'
import ButtonVoicemod from '../components/ButtonVoicemod'
import { ValidationObserver } from 'vee-validate'
import { mapState } from 'vuex'

// ACTIONS
import { AUTH_LOGOUT } from '../store/actions/auth'

export default {
  name: 'Home',
  components: { TextInput, ButtonVoicemod, ValidationObserver },
  computed: mapState({ profile: state => state.user.profile }),
  methods: {
    logout () {
      this.dispatch(AUTH_LOGOUT).then(() => {
        console.log('Logged Out')
        this.$router.push({ path: '/' })
      })
    }
  },
  data: () => ({
    user: {
      email: undefined,
      password: undefined,
      name: undefined,
      surname: undefined,
      country: undefined,
      postalCode: undefined,
      phone: undefined
    }
  }),
  mounted () {
    console.log(this.lodash)
    // this.user = this.lodash.cloneDeep(this.profile)
  }
}
</script>

<style lang="scss" scoped>
  .home-wrapper {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__logout {
      position: absolute;
      top: 30px;
      right: 0px;
      color: white;
      cursor: pointer;
    }
    &__image {
      width: 100px;
      height: 100px;
      margin-top: 20px;
    }
    &__row {
      width: 50%
    }
  }
  .login-wrapper {
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
