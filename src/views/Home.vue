<template>
  <button
    class="btn btn-primary mb-3"
    id="toastBasicTrigger"
    @click="showToast()"
  >
    Toast Demo
  </button>

  <!-- Toast container -->
  <div style="position: absolute; bottom: 1rem; right: 1rem">
    <!-- Toast -->
    <div
      class="toast"
      id="toastBasic"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-delay="3000"
    >
      <div class="toast-header">
        <i data-feather="bell"></i>
        <strong class="mr-auto">Toast with Autohide</strong>
        <small class="text-muted ml-2">just now</small>
        <button
          class="ml-2 mb-1 btn-close"
          type="button"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">
        This is an example toast alert, it will dismiss automatically, or you
        can dismiss it manually.
      </div>
      <div v-html="showToast()" /> 
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showToast() {
      alert('HELL');
      return `<span> Hello </span>`
    },
  },
};
</script>
