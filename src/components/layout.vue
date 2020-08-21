<template>
  <div class="main">
    <cmHeader/>
    <router-view/>
    <cm-footer/>
  </div>
</template>

<script>
import cmHeader from './common/cmHeader';
import cmFooter from './common/cmFooter';

export default {
  name: 'layout',
  components: {cmHeader, cmFooter}
};
</script>

<style lang="scss" scoped>
  @import "../assets/scss/style";

</style>
