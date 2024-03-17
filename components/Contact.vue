<template>
  <footer id="contact" class="mt-8">
    <Box
      box-type="fancy"
      custom-class="relative flex flex-col items-center mb-[1rem] pt-[2.75rem] md:pt-[4rem]"
    >
      <h4 class="title pb-[2.5rem]">Kapcsolat</h4>
      <div v-if="hideContact">
        <h1>Email sikeresen elküldve!</h1>
      </div>
      <form
        v-if="!hideContact"
        class="w-full flex flex-col items-center px-[2rem] md:px-[10rem] lg:w-[700px]"
        @submit.prevent="sendEmail"
        ref="form"
      >
        <Input
          type="text"
          name="user_name"
          placeholder="Név"
          custom-class="rounded-[4.375rem] mb-[1rem]"
          v-model="user_name"
        />
        <Input
          type="email"
          name="user_email"
          placeholder="Email"
          custom-class="rounded-[4.375rem] mb-[1.25rem]"
          v-model="user_email"
        />
        <textarea
          class="textarea mb-[1.25rem]"
          name="user_message"
          placeholder="Üzenet"
          v-model="user_message"
        />
        <input class="submit" type="submit" value="Küld" />
        <p class="adatkezeles mt-[1.25rem]">
          A “KÜLD” gomb megnyomásával elfogadja az
          <a href="/nyilatkozat/adatkezelesi-nyilatkozat.pdf" download
            >adatkezelési tájékoztatót</a
          >.
        </p>
      </form>

      <div class="idea-box relative w-full mt-16 py-[4rem]">
        <div class="idea-box-blur absolute top-0 left-0 w-full h-full"></div>
        <div class="grid grid-cols-2 gap-10 px-6 md:flex md:pl-16">
          <div>
            <h5 class="contact-title pb-[0.7rem]">Design / Webdev</h5>
            <div class="contact-info pb-[1rem]">
              <p>Kiss Csaba</p>
              <p>06 30 875 4438</p>
            </div>
            <div class="contact-info pb-[1rem]">
              <p>Bakos János</p>
              <p>06 70 318 8418</p>
            </div>
            <p class="contact-info">info@whiz.hu</p>
          </div>
          <div>
            <h5 class="contact-title pb-[0.7rem]">Pénzügy</h5>
            <div class="contact-info pb-[1rem]">
              <p>Tekes-Szabó Krisztina</p>
              <p>06 30 229 6231</p>
            </div>
            <p class="contact-info">info@whiz.hu</p>
          </div>
        </div>

        <div class="hidden lg:block w-full mt-12">
          <ul
            class="w-full flex justify-around text-white text-[1rem] font-light"
          >
            <li><a href="/">Főoldal</a></li>
            <li><a href="/dev">Dev</a></li>
            <li><a href="/design">Design</a></li>
            <li><a href="/penzugy">Pénzügy</a></li>
          </ul>
        </div>

        <div class="flex justify-center items-center pt-12">
          <img src="/icons/whiz-logo.svg" alt="Whiz Company's Logo" />
        </div>
      </div>
    </Box>
  </footer>
</template>
<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";
const config = useRuntimeConfig();

const form = ref();
let user_name = ref("");
let user_email = ref("");
let user_message = ref("");

let hideContact = false;

function sendEmail() {
  emailjs
    .sendForm("service_kn49xyk", "template_97d1nf5", form.value, {
      publicKey: "BxnGjPiCOCfZXuHP_",
    })
    .then(
      () => {
        user_email = "";
        user_name = "";
        user_message = "";
        hideContact = true;
        setTimeout(() => {
          hideContact = false;
        }, 4000);
      },
      (error) => {
        user_email = "";
        user_name = "";
        user_message = "";
        alert("Üzenet küldés sikertelen!");
      }
    );
}
</script>
<style scoped>
.idea-box {
  background: linear-gradient(
    72deg,
    #000 15.56%,
    #773090 78.62%,
    #c451cf 96.97%,
    #943fe6 116.14%,
    #5e2bff 123.58%
  );
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);

  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
}
.idea-box-blur {
  z-index: -9999;

  background-color: rgba(39, 36, 36, 0.75);
  backdrop-filter: blur(12.5px);

  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
}
.title {
  color: #fff;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.submit {
  color: #fff;
  font-family: Space Grotesk;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;

  width: 8rem;
  height: 2rem;
  flex-shrink: 0;

  border-radius: 4.375rem;
  border: 1px solid #6d6d6d;
  background: rgba(72, 72, 72, 0.75);
  backdrop-filter: blur(2px);

  transition: all 0.1s ease-in-out;
}

.submit:hover {
  background-color: #5f2bfd;
  border: 1px solid #5f2bfd;
}

.textarea {
  width: 100%;
  height: 5rem;
  flex-shrink: 0;
  resize: none;

  color: #fff;
  font-size: 0.75rem;

  padding: 0.5rem 1rem;

  outline: none;
  border-radius: 1.25rem;
  border: 1px solid #000;
  background: rgba(72, 72, 72, 0.35);
  backdrop-filter: blur(2.5px);
}
.textarea::placeholder {
  color: rgba(255, 255, 255, 0.65);
  font-family: Space Grotesk;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.textarea:focus {
  border: 1px solid #5f2bfd;
}
.textarea:active {
  border: 1px solid #5f2bfd;
}

.adatkezeles {
  color: #fff;
  text-align: center;
  font-family: Space Grotesk;
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 12.875rem;

  a {
    color: #fff;
    font-family: Space Grotesk;
    font-size: 0.65rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}

.contact-title {
  color: #fff;
  font-family: Space Grotesk;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.contact-info {
  color: #fff;
  font-family: Space Grotesk;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media only screen and (min-width: 1024px) {
  .title {
    font-size: 3rem;
  }
  .adatkezeles {
    width: 18rem;
    font-size: 0.85rem;

    a {
      font-size: 0.85rem;
    }
  }
  .contact-title {
    font-size: 1rem;
  }
  .contact-info {
    font-size: 1rem;
  }
  .textarea {
    height: 8rem;
    font-size: 0.9rem;
  }
  .submit {
    font-size: 0.9rem;
    width: 10rem;
    height: 2rem;
  }
}
</style>
