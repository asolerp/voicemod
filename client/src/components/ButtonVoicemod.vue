<template>
    <button class="button-voicemod" type="button" :disabled="disabled" @click="$emit('click')">{{title}}</button>
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
  background-color: #22a3eb;
  width: 100%;
  margin-bottom: 15px;
}
</style>
