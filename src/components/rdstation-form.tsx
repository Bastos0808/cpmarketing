"use client";

import React, { useEffect } from 'react';

const RdstationForm = () => {
  useEffect(() => {
    const formContainer = document.getElementById('form-contato-container');
    if (!formContainer) return;

    // Evita múltiplas renderizações
    if (formContainer.childElementCount > 0) {
        return;
    }

    const formDiv = document.createElement('div');
    formDiv.setAttribute('role', 'main');
    formDiv.id = 'form-contato-site-cp-e16fa69f5771610a50c5';
    formContainer.appendChild(formDiv);

    const scriptUrl = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
    
    const initializeForm = () => {
        if (window.RDStationForms) {
             new window.RDStationForms('form-contato-site-cp-e16fa69f5771610a50c5', 'null').createForm();
        }
    };

    let script = document.querySelector(`script[src="${scriptUrl}"]`) as HTMLScriptElement;

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

  return <div id="form-contato-container" />;
};

declare global {
    interface Window {
      RDStationForms: any;
    }
}

export default RdstationForm;
