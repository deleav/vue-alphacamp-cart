<template>
  <div id="modal-overlay" @click="onClose">
    <div id="modal-container">
      <div id="modal"><slot /></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onClose: {
      typs: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
@keyframes background-color-in {
  from {
    background-color: transparent;
  }
  to {
    background-color: rgba(0, 0, 0, 0.4);
  }
}
#modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  z-index: 9999;
  animation: background-color-in 0.1s linear;
}

#modal-container {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
}

@keyframes scale-in {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}

#modal {
  padding: 40px;
  background-color: #fff;
  border-radius: 12px;
  min-height: 200px;
  min-width: 300px;
  margin: 80px;

  animation: scale-in 0.1s linear;
}
</style>
