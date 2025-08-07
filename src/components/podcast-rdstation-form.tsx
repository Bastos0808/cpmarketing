"use client";

import React, { useEffect } from 'react';

const PodcastRdstationForm = () => {
  useEffect(() => {
    const formContainer = document.getElementById('form-container-podcast');
    if (!formContainer) return;

    // Limpa o contêiner para evitar duplicação
    formContainer.innerHTML = '';

    const formDiv = document.createElement('div');
    formDiv.setAttribute('role', 'main');
    formDiv.id = 'form-podcast-site-cp-1b74a013bfb40aa609d8';
    formContainer.appendChild(formDiv);

    const scriptUrl = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
    let script = document.querySelector(`script[src="${scriptUrl}"]`) as HTMLScriptElement;

    const initializeForm = () => {
        if (window.RDStationForms) {
            new window.RDStationForms('form-podcast-site-cp-1b74a013bfb40aa609d8', 'null').createForm();
        }
    };

    if (!script) {
      script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = scriptUrl;
      script.async = true;
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

  return <div id="form-container-podcast" />;
};

declare global {
    interface Window {
      RDStationForms: any;
    }
}

export default PodcastRdstationForm;
