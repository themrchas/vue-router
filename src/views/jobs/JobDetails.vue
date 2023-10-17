<template>
    <h1>Job Details</h1>
 <!--   <p>The route object is {{ $route }}</p>> -->
 <p>The route paramter id is {{ id }}and name is {{ name }}</p>
    

</template>

<script>

export default {
  name: 'JobDetails',
  props: ['id', 'name'], //Routing params are accepted as props to the component
  components: { },

  //Do not require this - props above replaces this.
 /* data() {
    return {
        id: this.$route.params.id
        
    }
  } */
}

</script>