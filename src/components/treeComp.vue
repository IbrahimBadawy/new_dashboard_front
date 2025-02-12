<template>
    <div class="card">
        <!-- Locally registered components -->
        <Toast  style="z-index: -100;" />
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
            @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" @nodeExpand="onNodeExpand"
            @nodeCollapse="onNodeCollapse" class="w-full md:w-[30rem]" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { NodeService } from '..NodeService';

// Make sure these are imported for local registration
import Tree from 'primevue/tree';
import Toast from 'primevue/toast';

const nodes = ref([]);
const selectedKey = ref(null);
const toast = useToast();

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const onNodeSelect = (node) => {
    toast.add({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
};

const onNodeUnselect = (node) => {
    toast.add({ severity: 'warn', summary: 'Node Unselected', detail: node.label, life: 3000 });
};

const onNodeExpand = (node) => {
    toast.add({ severity: 'info', summary: 'Node Expanded', detail: node.label, life: 3000 });
};

const onNodeCollapse = (node) => {
    toast.add({ severity: 'info', summary: 'Node Collapsed', detail: node.label, life: 3000 });
};
</script>
