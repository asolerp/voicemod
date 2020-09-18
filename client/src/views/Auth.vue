<template>
  <v-container class="login-wrapper">
    <v-row class="login-wrapper__row">
      <v-col class="login-wrapper__lcolumn">
        <logo />
        <h1 style="color: white">{{getTitle}}</h1>
      </v-col>
      <v-col class="login-wrapper__rcolumn">
          <component
            :is="activeAuth"
            @change-auth-screen="showAuth"
          />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import TextInput from '../components/TextInput'
import Logo from '../components/Logo'
import Login from './Login'
import SignUp from './SignUp'

export default {
  name: 'Auth',
  components: { TextInput, Logo, Login, SignUp },
  data: () => ({
    activeAuth: 'Login'
  }),
  methods: {
    showAuth (view) {
      this.activeAuth = view
    }
  },
  computed: {
    getTitle () {
      return this.activeAuth
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-wrapper {
    height: 100%;
    &__row {
      height: 100%;
    }
    &__lcolumn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &__rcolumn {
      padding: 0 10%;
    }
    &__row3 {
      display: flex;
      justify-content: space-between;
      width: 100%
    }
  }
</style>
