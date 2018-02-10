<template lang="pug">
div
  .item(v-for="(icon,index) in icons",:key="index")
    .icon
      Icon(:type="icon")
    .name {{icon}}
</template>

<script>
export default {
  data() {
    return {
      icons: [
        "all",
        "cart",
        "category",
        "close",
        "comments",
        "cry",
        "delete",
        "edit",
        "email",
        "favorite",
        "form",
        "help",
        "information",
        "left",
        "down",
        "up",
        "right",
        "pic",
        "qrcode",
        "refresh",
        "rfq",
        "search",
        "selected",
        "set",
        "smile",
        "success",
        "survey",
        "training",
        "viewgallery",
        "viewlist",
        "warning",
        "wrong",
        "account",
        "add",
        "atm",
        "clock",
        "remind",
        "calendar",
        "attachment",
        "discount",
        "service",
        "print",
        "box",
        "process",
        "beauty",
        "electrical",
        "home",
        "electronics",
        "gifts",
        "lights"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: inline-block;
  margin: 5px;
  width: 100px;
  text-align: center;
  .icon {
    width: 50px;
    height: 50px;
    margin: 5px auto;
    display: block;
    border: 1px solid #ccc;
    line-height: 50px;
  }
}
</style>

