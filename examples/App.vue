<template lang="pug">
  #app
    nav
      ul
        li
          router-link(to="/icon") icon
        li
          router-link(to="/indicator") indicator
    router-view
</template>

<style lang="scss" scoped>
nav {
  border-bottom: 1px dashed #ccc;
  ul {
    list-style: none;
    display: flex;
    li {
      margin-right: 12px;
    }
  }
}
</style>
