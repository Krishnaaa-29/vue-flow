<script setup lang="ts">
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { ref } from "vue";
import ActionNode from "./ActionNode.vue";
import { initialEdges, initialNodes } from "./elements.ts";

const { addNodes, nodes, addEdges, onConnect } = useVueFlow();

const Allnodes = ref(initialNodes);
const Alledges = ref(initialEdges);

let currentId = ref("");
let posX = ref(0);
let posY = ref(0);

const getNodeId = (id: string) => {
  currentId.value = id;
  const currentNode = initialNodes.filter(
    (item) => item.id === currentId.value
  );
  posX.value = currentNode[0].position.x;
  posY.value = currentNode[0].position.y;
  console.log([currentId.value, posX.value, posY.value]);
};

const addTrueFalse = () => {
  const len = nodes.value.length;
  const tNode = {
    id: `${len + 1}`,
    type: "custom",
    position: {
      x: posX.value - 225,
      y: posY.value + 150,
    },
  };

  const fNode = {
    id: `${len + 2}`,
    type: "custom",
    position: {
      x: posX.value + 225,
      y: posY.value + 150,
    },
  };

  addNodes([tNode, fNode]);
  addEdges([
    {
      id: `e${currentId.value}-${len + 1}`,
      source: `${currentId.value}`,
      target: `${len + 1}`,
      label: "True",
    },
    {
      id: `e${currentId.value}-${len + 2}`,
      source: `${currentId.value}`,
      target: `${len + 2}`,
      label: "False",
      animated: true,
    },
  ]);
  initialNodes.push(tNode);
  initialNodes.push(fNode);
};

const addSingleNode = () => {
  const len = nodes.value.length;
  // console.log([dimensions.value.width, "  ", dimensions.value.height]);
  const newNode = {
    id: `${len + 1}`,
    type: "custom",
    position: {
      x: posX.value,
      y: posY.value + 125,
    },
  };

  console.log(newNode);

  addNodes([newNode]);
  addEdges([
    {
      id: `e${currentId.value}-${len + 1}`,
      source: `${currentId.value}`,
      target: `${len + 1}`,
    },
  ]);

  initialNodes.push(newNode);
};

onConnect((params) => {
  addEdges([params]);
});
</script>

<template>
  <div class="vue-flow">
    <VueFlow :nodes="Allnodes" :edges="Alledges">
      <template #node-custom="customNodeProps">
        <ActionNode
          v-bind="customNodeProps"
          @addTrueFalse="addTrueFalse"
          @addSingleNode="addSingleNode"
          @getNodeId="getNodeId($event)"
        />
      </template>
      <Background pattern-color="#6460e8" :gap="8" />
    </VueFlow>
  </div>
</template>

<style>
/* import the necessary styles for Vue Flow to work */
@import "@vue-flow/core/dist/style.css";

/* import the default theme, this is optional but generally recommended */
@import "@vue-flow/core/dist/theme-default.css";

.vue-flow {
  height: 100vh;
  width: 75vw;
  /* background: red; */
}

.start-node {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
</style>
