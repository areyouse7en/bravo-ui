<template lang="pug">
  div
    button(@click="Show") show
</template>

<script>
export default {
  methods: {
    Show() {
      console.log(3421);
      this.$Indicator.open();
      setTimeout(() => {
        this.$Indicator.close();
      }, 3000);
    }
  }
};
</script>

