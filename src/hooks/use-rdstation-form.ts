'use client';

import { useEffect, useCallback } from 'react';

declare global {
  interface Window {
    RDStationForms: any;
  }
}

const SCRIPT_ID = 'rdstation-script';
const SCRIPT_SRC = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';

let isScriptLoaded = false;
let isScriptLoading = false;
const subscribers: (() => void)[] = [];

function loadScript(callback: () => void) {
  if (isScriptLoaded) {
    callback();
    return;
  }

  subscribers.push(callback);

  if (document.getElementById(SCRIPT_ID)) {
    if (window.RDStationForms) {
        isScriptLoaded = true;
        isScriptLoading = false;
        subscribers.forEach((cb) => cb());
        subscribers.length = 0; // Clear subscribers
        return;
    }
  }

  if (!isScriptLoading) {
    isScriptLoading = true;
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      isScriptLoaded = true;
      isScriptLoading = false;
      subscribers.forEach((cb) => cb());
      subscribers.length = 0; // Clear subscribers
    };
    script.onerror = () => {
      isScriptLoading = false;
    }
    document.body.appendChild(script);
  }
}

export function useRdStationForm(formId: string) {
  const initializeForm = useCallback(() => {
    const formContainer = document.getElementById(formId);

    if (formContainer && typeof window.RDStationForms !== 'undefined') {
      // Limpa o contêiner para evitar duplicação em re-renderizações
      formContainer.innerHTML = '';
      new window.RDStationForms(formId, 'null').createForm();
    }
  }, [formId]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // O script é carregado e, no callback, o formulário é inicializado.
    loadScript(initializeForm);

  }, [initializeForm]);
}
