<template>
  <div :class="`text-input-wrapper ${getHeight ? 'text-input-wrapper--full' : ''}`">
    <p class="text-input-wrapper__label">{{label}}</p>
    <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
      <div class="input-container">
        <input
          v-model="inputVal"
          @change="$emit('change')"
          :class="`text-input-wrapper__input ${getHeight ? 'text-input-wrapper__input--full' : ''}`"
          :type="type"
        />
        <span style="color: white; margin-top: 5px">{{ errors[0] }}</span>
      </div>
    </ValidationProvider>
  </div>
</template>

<script>

import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm'

export default {
  name: 'TextInput',
  components: { ValidationProvider },
  props: ['value', 'label', 'rules', 'type', 'name', 'fullWidth'],
  computed: {
    /**
     * Gets if select input has full width
     */
    getHeight () {
      return this.fullWidth
    },
    /**
     * Getter / setter input
     */
    inputVal: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  span {
    width: 100%;
  }
  .text-input-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    &--full {
      width: 100%;
    }
    &__label {
      padding: 0 5px;
      color: white;
      align-self: start;
      margin-bottom: 10px;
      font-size: 2rem;
    }
    &__input {
      padding: 15px;
      background: rgba(255, 255, 255, 0.966);
      border-radius: 15px;
      font-size: 20px;
      font-family: 'Roboto';
      width: 20rem;
      &--full {
      width: 100%;
      }
    }
    &__input:focus {
      box-shadow: 0px 0px 7px 3px #22a3eb;
      transition: all .5s;
    }
  }
  .input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    span {
      font-family: 'Roboto';
    }
  }
</style>
