<template>
    <button :class="`button-voicemod ${setMode}`" type="button" :disabled="disabled" @click="$emit('click')">{{title}}</button>
</template>

<script>
export default {
  name: 'ButtonVoicemod',
  props: {
    title: {
      type: String,
      default: 'Button'
    },
    disabled: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    setMode () {
      switch (this.mode) {
        case 'normal':
          return 'button-voicemod--normal'
        case 'outliner':
          return 'button-voicemod--outliner'
        default:
          return 'button-voicemod--normal'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button-voicemod {
  padding: 15px;
  box-shadow: 0px 0px 5px 0px rgb(70, 70, 70);
  border-radius: 15px;
  font-size: 25px;
  font-family: 'Roboto';
  color: white;
  width: 100%;
  margin-bottom: 15px;
  height: 60px;
  &--outliner {
    background-color: white;
    color: #22a3eb;
    border: 3px solid #22a3eb;
  }
  &--normal {
    background-color: #22a3eb;
  }
}
</style>
