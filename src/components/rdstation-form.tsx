'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    RDStationForms: any;
  }
}

const RDSTATION_FORM_ID = 'form-contato-site-cp-e16fa69f5771610a50c5';

export default function RdstationForm() {
  useEffect(() => {
    const initializeForm = () => {
      if (window.RDStationForms) {
        new window.RDStationForms(RDSTATION_FORM_ID, 'null').createForm();
      }
    };

    // If script is already loaded, initialize immediately.
    if (window.RDStationForms) {
      initializeForm();
    } 
    // Otherwise, the `onLoad` on the Script component will handle it.
  }, []);

  return (
    <>
      <div role="main" id={RDSTATION_FORM_ID}></div>
      <Script
        type="text/javascript"
        src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.RDStationForms) {
            new window.RDStationForms(RDSTATION_FORM_ID, 'null').createForm();
          }
        }}
      />
    </>
  );
}
