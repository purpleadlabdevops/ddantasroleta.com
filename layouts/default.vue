<template>
  <div class="layout layout__presell">
    <Nuxt />
  </div>
</template>

<script>
export default{
  name: 'roleta',
  head() {
    return {
      bodyAttrs: {
        class: 'body__roleta'
      },
    }
  },
}
</script>

<style lang="scss">
@import '@/styles/roleta.scss';
</style>