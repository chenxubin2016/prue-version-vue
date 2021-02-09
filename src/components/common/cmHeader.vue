<template>
  <div class="cm-header">header</div>
</template>

<script>
export default {
  name: 'cmHeader'
};
</script>

<style lang="scss" scoped>
  .cm-header {
    width: 100%;
    height: 90px;
    background-color: aquamarine;
    @include flex(center);
  }
</style>
