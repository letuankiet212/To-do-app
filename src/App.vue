<template>
  <div id="app">

    <div class="app-content content" style="margin-left:unset">
      <div class="content-overlay"></div>
      <div class="content-area-wrapper" style="margin:unset">
        <SideBar></SideBar>
        <TodoContent></TodoContent>
      </div>
    </div>

  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import TodoContent from "@/view/TodoContent";

export default {
  name: "App",
  components: {
    TodoContent,
    SideBar,
  },
};
</script>

<style>
</style>
