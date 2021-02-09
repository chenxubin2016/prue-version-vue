<template>
  <div class="main">
    <cmHeader/>
    <div class="container">
      <router-view/>
    </div>
    <cmFooter/>
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
  .main {
    height: 100%;
    @include flex(flex-start, center, column);
    .container {
      width: 100%;
      flex: 1;
      @include overflow(hidden,auto);
    }
  }

</style>
