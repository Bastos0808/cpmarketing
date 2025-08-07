"use client";

import React, { useEffect } from 'react';

const RdstationForm = () => {
  useEffect(() => {
    const formContainer = document.getElementById('form-contato-container');
    if (!formContainer) return;

    // Limpa o contêiner para evitar duplicação em navegações do lado do cliente
    formContainer.innerHTML = '';

    const formDiv = document.createElement('div');
    formDiv.setAttribute('role', 'main');
    formDiv.id = 'form-contato-site-cp-e16fa69f5771610a50c5';
    formContainer.appendChild(formDiv);

    const scriptUrl = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
    let script = document.querySelector(`script[src="${scriptUrl}"]`) as HTMLScriptElement;

    const initializeForm = () => {
        if (window.RDStationForms) {
            new window.RDStationForms('form-contato-site-cp-e16fa69f5771610a50c5', 'null').createForm();
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
    
    // Função de limpeza
    return () => {
        if (formContainer) {
            formContainer.innerHTML = '';
        }
    };
  }, []);

  return <div id="form-contato-container" />;
};

declare global {
    interface Window {
      RDStationForms: any;
    }
}

export default RdstationForm;
