import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "'w52IIbHhAc4BgvzJJennld8PDMvQsvqkRK0nSMcM'",
    authDomain: "dwf-mod6-333cf.firebaseapp.com",
    databaseURL: 'https://dwf-mod6-333cf-default-rtdb.firebaseio.com/',
    projectId: 'dwf-mod6-333cf',
};

const firebaseApp = initializeApp(firebaseConfig);

export {firebaseApp};
