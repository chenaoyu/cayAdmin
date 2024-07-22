<template>
  <div class="Container">
    <aside class="l"> <slot name="aside"/> </aside>
    <section class="r">
      <header class="h"> <slot name="header"/>  </header>
      <main class="m"> <slot/> </main>
    </section>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.Container {
  width: 100%;
  height: 100%;
  display: flex;

  .l {
    height: 100%;
  }

  .r {
    flex: 1;
    display: flex;
    flex-direction: column;

    .m {
      position: relative;
      flex: 1;
      overflow: auto;
      display: flex;
      padding: 10px;
    }
  }
}
</style>