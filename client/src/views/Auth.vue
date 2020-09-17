<template>
  <v-container class="login-wrapper">
    <v-row class="login-wrapper__row">
      <v-col class="login-wrapper__lcolumn">
        <logo />
      </v-col>
      <v-col class="login-wrapper__rcolumn">
        <!-- <transition name="slide-fade"> -->
          <component
            :is="activeAuth"
            @change-auth-screen="showAuth"
          />
        <!-- </transition> -->
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
  }
}
</script>

<style lang="scss" scoped>
  .login-wrapper {
    height: 100vh;
    &__row {
      height: 100%;
    }
    &__lcolumn {
      display: flex;
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
