<template>
    <div>
        <p>SearchResults</p>
        <results-list></results-list>
    </div>
</template>

<script>
  import ResultsList from './SearchResults/ResultsList'
  import PackageDescription from './SearchResults/PackageDescription'

  export default {
    name: 'SearchResults',
    components: {
      ResultsList,
      PackageDescription
    }
  }
</script>

<style scoped>

</style>
