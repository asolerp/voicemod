<template>
  <div :class="`text-input-wrapper ${fullHeight ? 'text-input-wrapper--full' : ''}`">
    <p class="text-input-wrapper__label">{{label}}</p>
    <input :class="`text-input-wrapper__input ${fullHeight ? 'text-input-wrapper__input--full' : ''}`" type="text" />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    label: {
      type: String,
      required: false
    },
    fullHeight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .text-input-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
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
      box-shadow: 0px 0px 7px 2px #22a3eb;
      border-radius: 15px;
      font-size: 20px;
      font-family: 'Roboto';
      width: 20rem;
      &--full {
      width: 100%;
      }
    }
  }
</style>
