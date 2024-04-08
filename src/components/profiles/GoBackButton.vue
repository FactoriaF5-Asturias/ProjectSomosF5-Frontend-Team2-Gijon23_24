<template>
    <button class="goback" @click="goBack"></button>
  </template>
  
  <script setup >
  import { useRouter } from 'vue-router';
    function goBack(){
 
    const router = useRouter();
    const goBack = () => {
  window.history.length > 1 ? history.go(-1) : router.push('/');
}};
  </script>
  
  <style scoped>
  .goback {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back-up-double' width='44' height='44' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23a905b6' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13 14l-4 -4l4 -4' /%3E%3Cpath d='M8 14l-4 -4l4 -4' /%3E%3Cpath d='M9 10h7a4 4 0 1 1 0 8h-1' /%3E%3C/svg%3E");
    width: 65px;
    height: 45px;
    border: none;
    cursor: pointer;
    margin-left: 20px;
    background-size: cover;
  }
  </style>
  