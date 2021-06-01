<template>
  <div class="flex items-center justify-center p-4 mb-4">
    <div class="w-32 text-center">
      <slot name="general"></slot>
    </div>
    <div class="flex-1 text-sm divide-y divide-gray-100 px-4">
      <slot name="list"></slot>
    </div>
  </div>
</template>
