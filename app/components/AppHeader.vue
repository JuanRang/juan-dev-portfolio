<script setup lang="ts"></script>

<template>
  <div class="profile">
    <div class="avatar">
<img src="/profile/juan.jpeg" width="120" height="120" class="profile-img" />    </div>
    <h1 id="nombre">Juan Rangel Neri</h1>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
}

.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.avatar {
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

#nombre {
  margin: 12px 0 0;
}
</style>