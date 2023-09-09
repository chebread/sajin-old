import React from 'react';
import ReactDOM from 'react-dom/client';
// import { loadableReady } from '@loadable/component';
import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';
import GlobalStyles from 'GlobalStyles';
import App from 'App';

// const nodeMode = process.env.NODE_ENV;
const targetDom = document.getElementById('root');

// if (nodeMode === 'production') {
//   const hydrateRoot = ReactDOM.hydrateRoot(targetDom);
//   loadableReady(() => {
//     hydrateRoot.render(
//       <HelmetProvider>
//         <RecoilRoot>
//           <Toaster
//             position="bottom-center"
//             toastOptions={{
//               duration: 1500,
//             }}
//           />
//           <GlobalStyles />
//           <App />
//         </RecoilRoot>
//       </HelmetProvider>
//     );
//   });
// } else {
console.log(1);
const root = ReactDOM.createRoot(targetDom);
root.render(
  <HelmetProvider>
    <RecoilRoot>
      <GlobalStyles />
      <App />
    </RecoilRoot>
  </HelmetProvider>
);
// }
