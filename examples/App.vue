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
