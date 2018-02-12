<template lang="pug">
transition(name="fade")
  .bravo-indicator(v-show="visible")
    .icon
      Icon(type="refresh",color="white")
</template>

<script>
import install from "@u/install";
export default {
  name: "Indicator",
  install,
  data() {
    return {
      visible: false
    };
  }
};
</script>
