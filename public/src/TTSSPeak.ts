const synth = window.speechSynthesis;
export default class TSpeak {
  static speak(words: string) {
    synth.speak(new SpeechSynthesisUtterance(words));
  }
}
