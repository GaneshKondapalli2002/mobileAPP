declare module 'react-native-voice' {
  // Declare the types for the module as per your requirement
  interface Voice {
    onSpeechError: (e: any) => void;
    onSpeechRecognized: (e: any) => void;
    onSpeechStart: (e: any) => void;
    onSpeechResults: (event: any) => void;
    onSpeechEnd: () => void;
    start: (locale: string) => Promise<void>;
    stop: () => Promise<void>;
    destroy: () => Promise<void>;
    removeAllListeners: () => void;
  }

  const Voice: Voice;
  export default Voice;
}
