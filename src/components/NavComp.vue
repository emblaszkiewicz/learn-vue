<script setup lang="ts"></script>

<template>
  <nav class="navi">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/add">Add post</router-link>
    <router-link class="link" to="/sort">Filter</router-link>
  </nav>
</template>

<style scoped>
.navi {
  background: #40739e;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: right;
  margin-bottom: 40px;
}
.link {
  color: #ffffff;
  text-decoration: none;
  padding-left: 15px;
}
</style>
