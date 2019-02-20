<template>
    <div>
        <p>PackageExplorer</p>
        <global-tab></global-tab>
        <package-browser></package-browser>
    </div>
</template>

<script>
  import PackageBrowser from './PackageExplorer/PackageBrowser'
  import GlobalTab from './PackageExplorer/GlobalTab'
  import HomeTab from './PackageExplorer/HomeTab'
  import ProjectTab from './PackageExplorer/ProjectTab'

  export default {
    name: 'PackageExplorer',
    components: {
      PackageBrowser,
      GlobalTab,
      HomeTab,
      ProjectTab
    }
  }
</script>

<style scoped>

</style>
