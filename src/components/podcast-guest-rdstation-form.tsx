"use client";

import React, { useEffect } from 'react';

// IMPORTANTE: Substitua este ID pelo ID real do seu novo formulário do RD Station.
const GUEST_FORM_ID = 'form-podcast-guest-a1b2c3d4e5f6g7h8i9j0';

const PodcastGuestRdstationForm = () => {
  useEffect(() => {
    const formContainer = document.getElementById('form-container-guest');
    if (!formContainer) return;

    // Limpa o contêiner para evitar duplicação em navegações do lado do cliente
    formContainer.innerHTML = '';

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

    // Função de limpeza para quando o componente for desmontado
    return () => {
        if (formContainer) {
            formContainer.innerHTML = '';
        }
    };
  }, []);

  return <div id="form-container-guest" />;
};

declare global {
    interface Window {
      RDStationForms: any;
    }
}

export default PodcastGuestRdstationForm;
