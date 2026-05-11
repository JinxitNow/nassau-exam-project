<script setup>
import { ref, onMounted } from "vue";

const showBubble = ref(false);

onMounted(() => {
  setTimeout(() => {
    showBubble.value = true;
  }, 2000);
});

function toggleBubble() {
  showBubble.value = !showBubble.value;
}
</script>

<template>
  <div class="chat-wrapper">
    <!-- CHAT BUTTON -->
    <button class="chat-btn" @click="toggleBubble">
      💬
    </button>

    <!-- SPEECH BUBBLE -->
    <div class="bubble" v-if="showBubble">
      <p>
        Ring eller skriv til os,<br>
        vi sidder klar
      </p>

      <div class="phone">62 62 23 46</div>

      <button class="close" @click="showBubble = false">×</button>
    </div>
  </div>
</template>

<style scoped>
.chat-wrapper {
  position: fixed;
  right: 40px;
  bottom: 100px;
  z-index: 9999;
}

/* CHAT BUTTON */
.chat-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: var(--color-cta-red);
  font-size: 22px;
  cursor: pointer;

  color: var(--color-cta-red);
  box-shadow: inset 0 0 0 3px var(--color-cta-red);

  transition: 0.2s ease;
}

.chat-btn:hover {
  opacity: 0.8;
}

/* SPEECH BUBBLE — horizontal, auto width, controlled line breaks */
.bubble {
  position: absolute;
  right: 0;
  bottom: 60px;

  background: var(--color-cta-red);
  color: var(--color-cta-red);

  padding: 18px 18px;
  border-radius: 12px;

  width: fit-content;
  min-width: 180px;     /* sorgt dafür, dass "os," oben bleibt */
  max-width: 240px;     /* verhindert zu breite Bubble */

  display: flex;
  flex-direction: column;
  gap: 6px;

  font-size: 14px;
  line-height: 1.3;

  animation: fadeIn 0.3s ease;
}

/* Text */
.bubble p {
  margin: 0;
  color: var(--color-white);
  font-size: 14px;
  font-weight: 400;
  text-align: left;
}

/* Phone number */
.phone {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-white);
}

/* Close Button */
.close {
  position: absolute;
  top: -8px;
  right: -8px;

  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: none;

  background: var(--color-cta-red);
  color: var(--color-white);

  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
}

/* MOBILE */
@media (max-width: 768px) {
  .chat-wrapper {
    right: 16px;
    bottom: 90px;
  }

  .chat-btn {
    width: 38px;
    height: 38px;
    font-size: 16px;
  }

  .bubble {
    min-width: 180px;
    max-width: 220px;
    bottom: 55px;
    font-size: 12px;
  }

  .phone {
    font-size: 18px;
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
