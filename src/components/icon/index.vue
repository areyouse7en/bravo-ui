<template lang="pug">
  i(:class="classes",:style="styles")
</template>

<script>
export default {
  name: "Icon",
  props: {
    type: String,
    size: [Number, String],
    color: String
  },
  computed: {
    classes() {
      return `iconfont icon-${this.type}`;
    },
    styles() {
      let style = {};

      if (this.size) {
        style["font-size"] = `${this.size}px`;
      }

      if (this.color) {
        style.color = this.color;
      }

      return style;
    }
  }
};
</script>
