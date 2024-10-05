<template>
  <div class="json-container">
    <pre>{{ jsondata }}</pre>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      jsondata: null,
      error: null,
    };
  },
  mounted(){
    this.getBookCountAPI();   
  },
  methods: {
    async getBookCountAPI() {
      try {
        const response = await axios.get('https://us-central1-fit5032-week7-tniulibrary.cloudfunctions.net/countBooks');
        this.jsondata = response.data;
        this.error = null;
      } catch (error) {
        console.error('Error fetching book count:', error);
        this.error = error;
        this.jsondata = null;
      }
    },
  },
};
</script>

<style scoped>
.json-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; /* Center the text inside the pre tag */
}
pre {
  white-space: pre-wrap; /* Ensure long JSON strings wrap to the next line */
  word-break: break-word; /* Break words if they are too long */
}
</style>
