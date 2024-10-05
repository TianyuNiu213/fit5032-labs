<template>
  <div class="books-container">
    <h1>All Books</h1>
    <pre>{{ books }}</pre>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GetAllBookAPI',
  data() {
    return {
      books: null 
    };
  },
  mounted() {
    this.fetchAllBooks();
  },
  methods: {
    async fetchAllBooks() {
      try {
        const response = await axios.get('https://getallbooks-xbuh7vzecq-uc.a.run.app'); 
        this.books = response.data;
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }
  }
};
</script>

<style scoped>
.books-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; /* Center the text in the h1 and pre tag */
}
pre {
  white-space: pre-wrap; /* Ensure long JSON strings wrap to the next line */
  word-break: break-word; /* Break words if they are too long */
}
</style>
