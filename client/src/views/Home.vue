<template>
  <v-container class='home-wrapper'>
    <div class="home-wrapper__logout">
      <img class="home-wrapper__image" alt='Vue logo' src='../assets/logo.png'>
      <h2 class="" @click="logout">Logout</h2>
    </div>
    <v-row class="home-wrapper__row">
      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="updateUser">
          <text-input v-model="email" label="Email" :fullWidth="true" name="email" rules="required|email" type="text" />
          <div class="login-wrapper__row">
            <v-col class="mr">
              <text-input v-model="password" :fullWidth="true" label="Password" name="password" type="password"/>
              <button-voicemod title="Update password" :disabled="!password" mode="outliner" @click="updatePassword" />
            </v-col>
          </div>
          <div class="login-wrapper__row">
            <v-col class="mr">
              <text-input v-model="name" :fullWidth="true" name="name" rules="required" label="Name" type="text"/>
            </v-col>
             <v-col class="ml">
              <text-input v-model="surname" :fullWidth="true" name="surname" rules="required" label="Surname" type="text"/>
            </v-col>
          </div>
          <div class="login-wrapper__row">
            <v-col class="mr">
              <text-input v-model="phone" :fullWidth="true" name="phone" rules="required" label="Phone" type="text"/>
            </v-col>
             <v-col class="ml" />
          </div>
          <div class="login-wrapper__row">
            <v-col class="mr">
              <text-input v-model="country" :fullWidth="true" name="country" rules="required" label="Country" type="text"/>
            </v-col>
            <v-col class="ml">
              <text-input v-model="postalCode" :fullWidth="true" name="postalCode" rules="required" label="Postal Code" type="text"/>
            </v-col>
          </div>
          <button-voicemod :loading="status === 'loading'" type="submit" title="Update" :disabled="invalid"/>
            <button-voicemod v-if="!sdelete" :loading="status === 'loading'" mode="delete" title="Delete User" @click="toggleDelete"/>
            <div v-if="sdelete" class="login-wrapper__row">
              <v-col class="mr">
                <button-voicemod :loading="status === 'loading'" mode="delete" title="No" :disabled="false" @click="toggleDelete"/>
              </v-col>
              <v-col class="ml">
              <button-voicemod :loading="status === 'loading'"  title="Yes" :disabled="false" @click="deleteUser"/>
              </v-col>
            </div>
        </form>
      </ValidationObserver>
    </v-row>
  </v-container>
</template>

<script>

import TextInput from '../components/TextInput'
import ButtonVoicemod from '../components/ButtonVoicemod'
import { ValidationObserver } from 'vee-validate'

// ACTIONS
import { AUTH_LOGOUT } from '../store/actions/auth'
import { USER_UPDATE, USER_UPDATE_REQUEST, USER_DELETE_REQUEST, USER_UPDATE_PASSWORD_REQUEST } from '../store/actions/user'

export default {
  name: 'Home',
  components: { TextInput, ButtonVoicemod, ValidationObserver },
  computed: {
    getSdelete () {
      return this.sdelete
    },
    status () {
      return this.$store.state.user.status
    },
    email: {
      get () {
        return this.$store.state.user.profile.email
      },
      set (value) {
        console.log('setting')
        this.$store.commit(USER_UPDATE, { key: 'email', value })
      }
    },
    name: {
      get () {
        return this.$store.state.user.profile.name
      },
      set (value) {
        console.log('setting')
        this.$store.commit(USER_UPDATE, { key: 'name', value })
      }
    },
    surname: {
      get () {
        return this.$store.state.user.profile.surname
      },
      set (value) {
        console.log('setting')
        this.$store.commit(USER_UPDATE, { key: 'surname', value })
      }
    },
    country: {
      get () {
        return this.$store.state.user.profile.country
      },
      set (value) {
        console.log('setting')
        this.$store.commit(USER_UPDATE, { key: 'country', value })
      }
    },
    phone: {
      get () {
        return this.$store.state.user.profile.phone
      },
      set (value) {
        console.log('setting')
        this.$store.commit(USER_UPDATE, { key: 'phone', value })
      }
    },
    postalCode: {
      get () {
        return this.$store.state.user.profile.postalCode
      },
      set (value) {
        console.log('setting')
        this.$store.commit(USER_UPDATE, { key: 'postalCode', value })
      }
    }
  },
  data: () => ({
    password: '',
    sdelete: false
  }),
  methods: {
    toggleDelete () {
      this.sdelete = !this.sdelete
    },
    deleteUser () {
      this.$store.dispatch(USER_DELETE_REQUEST).then(() => {
        console.log('User deleted')
      })
    },
    updatePassword () {
      this.$store.dispatch(USER_UPDATE_PASSWORD_REQUEST, this.password)
    },
    updateUser () {
      const updatedUser = {
        email: this.email,
        name: this.name,
        surname: this.surname,
        country: this.country,
        phone: this.phone,
        postalCode: this.postalCode
      }
      this.$store.dispatch(USER_UPDATE_REQUEST, updatedUser)
        .then(() => {
          this.$toast.open({
            message: '<span style="font-weight: 500; font-size: 20px; font-family: Roboto">User updated</span>',
            type: 'success'
          })
        })
        .catch(() => {
          this.$toast.open({
            message: '<span style="font-weight: 500; font-size: 20px; font-family: Roboto">Something went wrong..</span>',
            type: 'error'
          })
        })
    },
    logout () {
      this.$store.dispatch(AUTH_LOGOUT).then(() => {
        console.log('Logged Out')
        this.$router.push({ name: 'Auth' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-toast-success {
    p {
      font-size: 20px !important;
      font-family: 'Roboto' !important;
    }
  }
  .toast {
    font-family: 'Roboto' !important;
    font-size: 20px;
    color: #000;
  }
  .home-wrapper {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__logout {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 30px;
      right: 0px;
      color: white;
      cursor: pointer;
    }
    &__image {
      width: 100px;
      height: 100px;
      margin-bottom: 10px;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
