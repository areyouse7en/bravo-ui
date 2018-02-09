<template>
  <i :class="classes" :style="styles"></i>
</template>

<script>
import install from "@u/install";

export default {
  name: "Icon",
  install,
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
