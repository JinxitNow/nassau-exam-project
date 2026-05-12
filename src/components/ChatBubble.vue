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
      <img src="/icons/chatbubble.svg" class="chat-icon" alt="Chat icon" />
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

    <!-- TAIL BUBBLE (2 circles) -->
    <div class="bubble-tail" v-if="showBubble"></div>
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
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: inset 0 0 0 3px var(--color-cta-red);
  transition: 0.2s ease;
}

.chat-btn:hover {
  opacity: 0.8;
}

/* SVG ICON */
.chat-icon {
  width: 22px;
  height: 22px;
  pointer-events: none;
  display: block;

  /* optische Zentrierung */
  transform: translateY(1px);
}

/* SPEECH BUBBLE */
.bubble {
  position: absolute;
  right: 0;
  bottom: 60px;

  background: var(--color-cta-red);
  color: var(--color-white);

  padding: 18px 18px;
  border-radius: 12px;

  width: fit-content;
  min-width: 180px;
  max-width: 240px;

  display: flex;
  flex-direction: column;
  gap: 6px;

  font-size: 14px;
  line-height: 1.3;

  animation: fadeIn 0.3s ease;
}

.bubble p {
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: var(--color-white);
}

.phone {
  font-size: 20px;
  font-weight: 700;
}

/* CLOSE BUTTON */
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
/* TAIL BUBBLE (2 circles) */
.bubble-tail {
  position: absolute;
  right: 40px;        /* leicht nach links vom Button */
  bottom: 46px;       /* sitzt direkt unter der Bubble */

  width: 16px;
  height: 16px;
  background: var(--color-cta-red);
  border-radius: 50%;

  z-index: 10000;     /* WICHTIG: über der Bubble */
}

.bubble-tail::after {
  content: "";
  position: absolute;
  right: 4px;
  bottom: -10px;

  width: 10px;
  height: 10px;
  background: var(--color-cta-red);
  border-radius: 50%;

  z-index: 10000;     /* auch über der Bubble */
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
  }

  .chat-icon {
    width: 18px;
    height: 18px;
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

  .bubble-tail {
    right: 14px;
    bottom: 38px;
    width: 14px;
    height: 14px;
  }

  .bubble-tail::after {
    width: 8px;
    height: 8px;
    bottom: -8px;
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
