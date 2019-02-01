<template>
    <div>
        <p v-text="pm"></p>
        <navigation></navigation>
        <package-list></package-list>
        <package-browser></package-browser>
    </div>
</template>

<script>
  import Navigation from './PackageViewer/Navigation'
  import PackageList from './PackageViewer/PackageList'
  import PackageBrowser from './PackageViewer/PackageBrowser'
  export default {
    data() {
      return {
        pm: this.$route.params.pm
      }
    },
    components: {
      Navigation,
      PackageList,
      PackageBrowser
    }
  }
</script>

<style scoped>

</style>
