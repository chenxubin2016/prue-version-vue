<template>
  <div class="cm-footer">footer</div>
</template>

<script>
export default {
  name: 'cmFooter'
};
</script>

<style lang="scss" scoped>
  .cm-footer {
    width: 100%;
    height: 90px;
    background-color: darkslateblue;
    @include flex(center);
    color: $white;
  }
</style>
