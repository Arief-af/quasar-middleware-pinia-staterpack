<template>
  <q-page class="flex flex-center">
    username and password can be filled in anything
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input v-model="user.mame" type="text" label="Label" />
      <q-input v-model="user.password" type="text" label="Label" />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { useAuth } from "src/stores/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
let user = ref({});
const router = useRouter();
const store = useAuth();
const onSubmit = () => {
  store
    .getUser(user.value)
    .then((res) => {
      router.push({
        name: "home",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
