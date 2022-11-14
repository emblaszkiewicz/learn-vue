<script setup lang="ts">
const books = [
  {
    id: "634eb35e9983786fd4339f39",
    bookAuthor: "Jessica Sorensen",
    bookTitle: "The Underworld",
    bookDesc: "Donec feugiat magna.",
    genre: "drama"
  },
  {
    id: "634eb3719983786fd4339f3a",
    bookAuthor: "Scott Westerfeld",
    bookTitle: "Behemoth",
    bookDesc: "Aliquam erat volutpat.",
    genre: "thriller"
  },
  {
    id: "634eb3849983786fd4339f3b",
    bookAuthor: "Tom Clancy",
    bookTitle: "Red Rabbit",
    bookDesc: "Sed id felis.",
    genre: "fiction"
  },
  {
    id: "634eb3949983786fd4339f3c",
    bookAuthor: "Robin Hobb",
    bookTitle: "Ship of Magic",
    bookDesc: "Sed auctor neque.",
    genre: "drama"
  },
  {
    id: "634eb3a89983786fd4339f3d",
    bookAuthor: "Pat Barker",
    bookTitle: "Regeneration",
    bookDesc: "In quis augue.",
    genre: "thriller"
  },
  {
    id: "63511f2cc83477d9c9dbfb5b",
    bookAuthor: "Stephen King",
    bookTitle: "Shadowland",
    bookDesc: "Lorem et sapien.",
    genre: "fiction"
  },
  {
    id: "63511f60c83477d9c9dbfb5c",
    bookAuthor: "Stephen King",
    bookTitle: "A Civil Campaign",
    bookDesc: "Nunc vitae dui.",
    genre: "thriller"
  },
  {
    id: "63511f7ac83477d9c9dbfb5d",
    bookAuthor: "Jo Nesbo",
    bookTitle: "The 5th Wave",
    bookDesc: "Lorem vitae ipsum.",
    genre: "drama"
  },
  {
    id: "63511fb5c83477d9c9dbfb5e",
    bookAuthor: "Jo Nesbo",
    bookTitle: "The Winter's Tale",
    bookDesc: "Sapiens vel dolor.",
    genre: "thriller"
  },
  {
    id: "63511fd4c83477d9c9dbfb5f",
    bookAuthor: "Laura Kaye",
    bookTitle: "To Challenge a Dragon",
    bookDesc: "Maecenas et nunc.",
    genre: "fiction",
  }
]
</script>
<template>
  <h2>Books list!</h2>
  <ul>
    <li v-for="book in books" :key="book.id">
      <div>
        Author: {{ book.bookAuthor}}
        Title: {{ book.bookTitle}}
        Description: {{ book.bookDesc}}
        Genre: {{ book.genre}}
      </div>
    </li>
  </ul>
</template>
<style scoped></style>