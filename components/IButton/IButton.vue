<script lang="ts" setup>
defineProps<{
  url: string
  type?: 'primary' | 'dashed'
}>()
</script>

<template>
  <button :class="['btn', type === 'dashed' ? 'btn-dash' : '']">
    <a :href="url">
      <slot>按钮</slot>
    </a>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  width: 200px;
  height: 50px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  background: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 30px;
    margin-top: 0;
    font-size: 12px;
  }

  &:active {
    transform: scale(0.9);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    //color: #000;
    color: #1677ff;
  }
}

.btn-dash {
  background: transparent;
  border: 1px #ffffff solid;

  a {
    color: #ffffff;
  }
}
</style>
