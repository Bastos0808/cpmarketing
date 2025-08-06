'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    RDStationForms: any;
  }
}

const RDSTATION_FORM_ID = 'form-podcast-site-cp-1b74a013bfb40aa609d8';

export default function PodcastRdstationForm() {
  useEffect(() => {
    const formContainer = document.getElementById(RDSTATION_FORM_ID);

    const initializeForm = () => {
      // Ensure the container exists and RDStationForms is available
      if (formContainer && window.RDStationForms) {
        // Clear any previous form to prevent duplication
        formContainer.innerHTML = '';
        new window.RDStationForms(RDSTATION_FORM_ID, 'null').createForm();
      }
    };

    const scriptId = 'rdstation-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
      script.async = true;
      script.onload = initializeForm;
      document.body.appendChild(script);
    } else if (window.RDStationForms) {
       // If script is already there, just try to initialize the form
      initializeForm();
    } else {
      // If script is there but might be loading, add an event listener
      script.addEventListener('load', initializeForm);
    }

    // Cleanup: remove the event listener when the component unmounts
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
