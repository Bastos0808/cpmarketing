'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    RDStationForms: any;
  }
}

const RDSTATION_FORM_ID = 'form-podcast-site-cp-1b74a013bfb40aa609d8';

export default function PodcastRdstationForm() {
  useEffect(() => {
    const initializeForm = () => {
      // Check if the form container is in the DOM
      if (document.getElementById(RDSTATION_FORM_ID) && window.RDStationForms) {
        new window.RDStationForms(RDSTATION_FORM_ID, 'null').createForm();
      }
    };

    const scriptId = 'rdstation-script';
    let script = document.getElementById(scriptId);

    if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
        script.async = true;
        script.onload = initializeForm;
        document.body.appendChild(script);
    } else if (window.RDStationForms) {
      initializeForm();
    } else {
      script.addEventListener('load', initializeForm);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (script) {
        script.removeEventListener('load', initializeForm);
      }
    };
  }, []);

  return (
    <div role="main" id={RDSTATION_FORM_ID}></div>
  );
}
