<template>
    <div>
        <p>PackageBrowser</p>
        <search-bar></search-bar>
        <search-results></search-results>
    </div>
</template>

<script>
  import SearchBar from './PackageBrowser/SearchBar'
  import SearchResults from './PackageBrowser/SearchResults'

  export default {
    name: 'PackageBrowser',
    components: {
      SearchBar,
      SearchResults
    }
  }
</script>

<style scoped>

</style>
