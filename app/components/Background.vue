<template>
  <div class="jp-rain">
    <span
      v-for="(char, i) in characters"
      :key="i"
      :style="{ animationDelay: randomDelay() + 's' }"
    >
      {{ char }}
    </span>
  </div>
</template>

<script setup>
const kana = [
  "ア","イ","ウ","エ","オ",
  "カ","キ","ク","ケ","コ",
  "サ","シ","ス","セ","ソ",
  "タ","チ","ツ","テ","ト",
  "ナ","ニ","ヌ","ネ","ノ",
  "ハ","ヒ","フ","ヘ","ホ",
  "マ","ミ","ム","メ","モ",
  "ヤ","ユ","ヨ",
  "ラ","リ","ル","レ","ロ",
  "ワ","ヲ","ン"
]

const characters = Array.from({ length: 200 }, () =>
  kana[Math.floor(Math.random() * kana.length)]
)

const randomDelay = () => Math.random() * 5
</script>

<style>
.jp-rain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 20px);
  font-family: monospace;
  overflow: hidden;
  z-index: -1;
  background: #f4f4f4;
}

.jp-rain span {
  color: #006644;
  font-size: 18px;
  text-shadow: 0 0 6px rgba(0,100,70,0.6);
  animation: fall linear infinite;
  animation-duration: 4s;
}

/* modo oscuro */
.dark .jp-rain {
  background: black;
}

.dark .jp-rain span {
  color: #00ff9c;
  text-shadow: 0 0 10px #00ff9c;
}

@keyframes fall {
  0% { transform: translateY(-100vh); opacity:0; }
  20% { opacity:1; }
  100% { transform: translateY(100vh); opacity:0; }
}
</style>