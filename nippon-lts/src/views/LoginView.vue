<template>
  <LoginForm />
</template>

<script>
import { defineComponent } from "vue";

// Components
import LoginForm from "../components/LoginForm.vue";

export default defineComponent({
  name: "LoginView",

  components: {
    LoginForm,
  },
});
</script>
