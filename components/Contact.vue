<template>
  <footer class="mt-8">
    <Box
      box-type="fancy"
      custom-class="flex flex-col items-center py-[2.75rem] px-[4rem]"
    >
      <h4 class="title pb-[2.5rem]">Kapcsolat</h4>
      <form class="flex flex-col items-center">
        <Input
          type="text"
          name="name"
          placeholder="Név"
          custom-class="rounded-[4.375rem] mb-[1rem]"
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          custom-class="rounded-[4.375rem] mb-[1.25rem]"
        />
        <textarea
          class="textarea mb-[1.25rem]"
          name="uzenet"
          placeholder="Üzenet"
        />
        <input class="submit" type="submit" value="Küld" />
      </form>
    </Box>
  </footer>
</template>
<script setup></script>
<style scoped>
.title {
  color: #fff;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.submit {
  color: #fff;
  font-family: Space Grotesk;
  font-size: 0.5625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;

  width: 6.875rem;
  height: 1.4375rem;
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

  padding: 0.5rem 1rem;

  outline: none;
  border-radius: 1.25rem;
  border: 1px solid #000;
  background: rgba(72, 72, 72, 0.35);
  backdrop-filter: blur(2.5px);
}
::placeholder {
  color: rgba(255, 255, 255, 0.65);
  font-family: Space Grotesk;
  font-size: 0.6875rem;
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
</style>
