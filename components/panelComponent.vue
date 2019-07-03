<template>
  <div class="panel-component">
    <div class="panel-component-header">
      <slot name="header"></slot>
    </div>
    <div class="panel-component-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "panelComponent"
};
</script>
