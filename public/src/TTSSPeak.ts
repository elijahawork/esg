import say from 'say';

export default class TTSSPeak {
  static speak(words: string) {
    say.speak(words);
    say.stop()
  }
}