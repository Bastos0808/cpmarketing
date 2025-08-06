"use client";

import React, { useEffect } from 'react';

const GUEST_FORM_ID = 'form-prospec-podcast-site-cp-51ad21433cf511747405';

const PodcastGuestRdstationForm = () => {
  useEffect(() => {
    const formContainer = document.getElementById('form-container-guest');
    if (!formContainer) return;

    // Limpa o contêiner para evitar duplicação em navegações do lado do cliente
    if (formContainer.childElementCount > 0) {
        return;
    }

    const formDiv = document.createElement('div');
    formDiv.setAttribute('role', 'main');
    formDiv.id = GUEST_FORM_ID;
    formContainer.appendChild(formDiv);

    const scriptUrl = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
    let script = document.querySelector(`script[src="${scriptUrl}"]`) as HTMLScriptElement;

    const initializeForm = () => {
        if (window.RDStationForms) {
            new window.RDStationForms(GUEST_FORM_ID, 'null').createForm();
        }
    };

    if (!script) {
      script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = scriptUrl;
      script.onload = initializeForm;
      document.body.appendChild(script);
    } else {
        // Se o script já existe, apenas inicializa o formulário
        initializeForm();
    }
  }, []);

  return <div id="form-container-guest" />;
};

declare global {
    interface Window {
      RDStationForms: any;
    }
}

export default PodcastGuestRdstationForm;
