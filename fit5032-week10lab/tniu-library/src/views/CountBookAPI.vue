<template>
  <div>
    <!-- Display the fetched JSON data, or error, or loading message -->
    <pre v-if="jsondata">{{ jsondata }}</pre>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <p v-else>Loading data...</p>
  </div>
</template>

<script>
import axios from 'axios'; // Make sure axios is installed and imported

export default {
  data() {
    return {
      jsondata: null,  // This will store the API response
      error: null      // This will store any error encountered
    };
  },
  methods: {
    async getBookCountAPI() {
      try {
        // Fetch data from your Cloud Function API
        const response = await axios.get('https://us-central1-fit5032-week7-tniulibrary.cloudfunctions.net/countBooks');
        if (response && response.data) {
          this.jsondata = response.data;  // Set the received data
        } else {
          this.jsondata = 'No data found';  // If no data received
        }
        this.error = null;
      } catch (error) {
        // Handle the error and log it to console
        console.error('Error fetching book count:', error);
        this.error = error;
        this.jsondata = null;
      }
    }
  },
  mounted() {
    // Call the API once the component is mounted
    this.getBookCountAPI();
  }
};
</script>
