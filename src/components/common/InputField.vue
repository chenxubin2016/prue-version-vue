<template>
  <div class="input-field">
    <label :for="id"></label>
    <input :name="id" type="text">
  </div>
</template>

<script>
export default {
  name: 'InputField',
  data () {
    return {
      id: Math.random() * 10e9
    };
  }
};
</script>

<style scoped>

</style>
