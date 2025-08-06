'use client';

import { useEffect, useCallback } from 'react';

declare global {
  interface Window {
    RDStationForms: any;
  }
}

const SCRIPT_ID = 'rdstation-script';
const SCRIPT_SRC = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';

let isScriptLoading = false;
let isScriptLoaded = false;
const loadCallbacks: (() => void)[] = [];

function loadRdStationScript(callback: () => void) {
  if (isScriptLoaded) {
    callback();
    return;
  }
  loadCallbacks.push(callback);

  if (isScriptLoading) {
    return;
  }
  
  isScriptLoading = true;
  
  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.src = SCRIPT_SRC;
  script.async = true;
  script.onload = () => {
    isScriptLoaded = true;
    isScriptLoading = false;
    loadCallbacks.forEach((cb) => cb());
    loadCallbacks.length = 0; // Clear callbacks after execution
  };
  script.onerror = () => {
    isScriptLoading = false; // Allow retrying if script fails to load
  };

  document.body.appendChild(script);
}

export function useRdStationForm(formId: string) {
    const createForm = useCallback(() => {
        const formContainer = document.getElementById(formId);
        if (formContainer && typeof window.RDStationForms !== 'undefined') {
            // Limpa o contêiner para garantir que não haja conteúdo duplicado
            formContainer.innerHTML = '';
            new window.RDStationForms(formId, 'null').createForm();
        }
    }, [formId]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        if (document.getElementById(SCRIPT_ID) && isScriptLoaded) {
            createForm();
        } else {
            loadRdStationScript(createForm);
        }
    }, [createForm]);
}
