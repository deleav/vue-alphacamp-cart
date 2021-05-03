<template>
  <div id="main">
    <div id="title-area">結帳</div>
    <div id="step-area"><StepContainer :currentStep="step" /></div>
    <div id="router-area">
      <router-view
        v-bind="form"
        @formChange="form[$event.name] = $event.value"
      />
    </div>
    <div id="footer-area">
      <Footer :step="step" :handleSubmit="handleSubmit" />
    </div>
    <div id="cart-area">
      <Cart
        :shippingFee="form.shippingFee"
        @change="form.totalPrice = $event"
      />
    </div>
    <Modal v-if="openModal" :onClose="handleCloseModal">
      <div id="result-json">{{ prettyFormString }}</div>
    </Modal>
  </div>
</template>

<script>
import safeParseJSON from '../utils/safeParseJSON';
import CartVue from './cart/Cart.vue';
import FooterVue from './footer/Footer.vue';
import ModalVue from './modal/Modal.vue';
import StepContainerVue from './step/StepContainer.vue';

const initialValues = {
  salutation: 'Mr.',
  username: '',
  phone: '',
  email: '',
  city: '',
  addr: '',
  shippingFee: 0,
  ccname: '',
  cardnumber: '',
  expdate: '',
  cvv: '',
  totalPrice: 0,
};

export default {
  name: 'App',
  components: {
    StepContainer: StepContainerVue,
    Footer: FooterVue,
    Cart: CartVue,
    Modal: ModalVue,
  },
  data: function () {
    return {
      form: initialValues,
      openModal: false,
      prettyFormString: '',
    };
  },
  methods: {
    handleSubmit() {
      const str = JSON.stringify(this.form, null, 2);
      // for console
      console.log(str);
      // for modal
      this.prettyFormString = str;
      this.handleOpenModal();
      this.form = initialValues;
    },
    handleOpenModal() {
      this.openModal = true;
    },
    handleCloseModal() {
      this.openModal = false;
    },
  },
  computed: {
    step() {
      return +this.$route.path.split('/')[1];
    },
  },
  watch: {
    form: {
      deep: true,
      handler() {
        localStorage.setItem('form', JSON.stringify(this.form));
      },
    },
  },
  created() {
    this.form = safeParseJSON(localStorage.getItem('form'));
  },
};
</script>

<style scoped>
#main {
  display: grid;
  margin: auto;
  width: fit-content;
  padding: 40px;
  column-gap: 130px;
  grid-template-columns: 540px 440px;
  grid-template-rows: 38px 48px 24px 64px 336px 70px;
  grid-template-areas:
    'title .'
    '. .'
    'step cart'
    '. cart'
    'router cart'
    'footer cart';
}

#title-area {
  grid-area: title;
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
}

#step-area {
  grid-area: step;
  display: flex;
  align-items: center;
}

#router-area {
  grid-area: router;
}

#footer-area {
  grid-area: footer;
}

#cart-area {
  grid-area: cart;
}

#result-json {
  white-space: pre;
}
</style>
