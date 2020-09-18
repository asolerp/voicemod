<template>
    <button :class="[`button-voicemod ${setMode}`, disabled && 'disabled']" type="button" :disabled="disabled" @click="$emit('click')">
      <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
    ></v-progress-circular>
    <span v-else>{{title}}</span>
    </button>
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
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    setMode () {
      switch (this.mode) {
        case 'normal':
          return 'button-voicemod--normal'
        case 'outliner':
          return 'button-voicemod--outliner'
        case 'delete':
          return 'button-voicemod--delete'
        default:
          return 'button-voicemod--normal'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.disabled {
  opacity: 0.3;
}
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
  &--delete {
    background-color: #850a14;
  }
}
</style>
