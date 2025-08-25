class SoundManager {
  private audioCache: Map<string, HTMLAudioElement> = new Map();

  playAudio(url: string) {
    if (typeof window === "undefined") return;

    let audio = this.audioCache.get(url);

    if (!audio) {
      audio = new Audio(url);
      audio.preload = "auto";
      this.audioCache.set(url, audio);
    }

    audio.currentTime = 0;
    audio.play().catch((err) => {
      console.warn(`Audio play failed for ${url}:`, err);
    });
  }

  playClick() {
    // Audio functionality disabled - no external audio assets
    // this.playAudio("https://assets.shubhamkr-047portfolio.vercel.app/audio/ui-sounds/click.wav");
  }
}

const soundManager = new SoundManager();

export default soundManager;
