<script lang="ts">
import { defineComponent } from "vue";
import { useNodeId } from "@vue-flow/core";

export default defineComponent({
  emits: ["addTrueFalse", "addSingleNode", "getNodeId"],
  setup() {
    const nodeId = useNodeId(); // Get the node ID
    return {
      nodeId,
    };
  },
});
</script>

<template>
  <div class="action-node">
    <p>Select a Action or a Condition</p>
    <button
      @click="
        $emit('getNodeId', nodeId);
        $emit('addSingleNode');
      "
    >
      Action
    </button>
    <button
      @click="
        $emit('getNodeId', nodeId);
        $emit('addTrueFalse');
      "
    >
      Condition
    </button>
  </div>
</template>

<style scoped>
.action-node {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid black;
  padding: 4px;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
</style>
