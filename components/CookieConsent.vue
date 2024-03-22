<template>
  <div v-if="isHidden" class="container">
    <h1 class="title">Sütiket használunk</h1>
    <p class="desc">
      Ez a weboldal sütiket használ annak érdekében, hogy a legjobb élményt
      nyújtsuk Önnek.
      <a href="/nyilatkozat/adatkezelesi-nyilatkozat.pdf" target="_blank"
        >Tudjon meg többet.</a
      >
    </p>
    <p class="desc pt-2">Elfogadja a sütiket?</p>
    <div class="flex justify-center items-center gap-16 py-8">
      <button class="denied" @click="reject">Nem</button>
      <button class="granted" @click="accept">Igen</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useGtm } from "@gtm-support/vue-gtm";
const gtm = useGtm();
const CONSENT_KEY = "consent_accepted";
const isHidden = ref(true);

function consentPermission(permission) {
  gtm.trackEvent({
    event: "consent",
    consent: {
      ad_storage: permission,
      analytics_storage: permission,
    },
  });
}

onMounted(() => {
  consentPermission("denied");
  const consented = localStorage.getItem(CONSENT_KEY);
  if (consented === null) {
    isHidden.value = false;
  } else if (consented === "true") {
    consentPermission("granted");
  }
});

const reject = () => {
  isHidden.value = true;
  localStorage.setItem(CONSENT_KEY, "false");
};

const accept = () => {
  isHidden.value = true;
  consentPermission("granted");
  localStorage.setItem(CONSENT_KEY, "true");
};
</script>

<style scoped>
.container {
  position: fixed;
  bottom: 20px;
  right: 0px;
  left: 0px;
  z-index: 99999;
  width: 100%;
  border-radius: 1.25rem;
  border: 2px solid #943fe6;
  background-color: black;
  color: #ffffff;
  padding-top: 0.75rem;
  padding-bottom: 0.5rem;
}
.title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  text-align: center;
}
.desc {
  text-align: center;
}
.desc a {
  text-decoration: underline;
}
.denied {
  border: 2px solid #943fe6;
  padding: 0.25rem 1.25rem 0.25rem 1.25rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.granted {
  border: 2px solid #943fe6;
  padding: 0.25rem 1.25rem 0.25rem 1.25rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #943fe6;
  color: #ffffff;
}

.denied:hover {
  background-color: #8400ff;
}

.granted:hover {
  background-color: #8400ff;
}

@media only screen and (min-width: 1024px) {
  .container {
    bottom: 20px;
    right: 0.75rem;
    left: auto;
    z-index: 99999;
    width: 40%;
  }
}
</style>
