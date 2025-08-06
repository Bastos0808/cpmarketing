// src/hooks/use-rdstation-form.ts
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
    };
    document.body.appendChild(script);
  }
}

export function useRdStationForm(formId: string) {
  const initializeForm = useCallback(() => {
    const formContainer = document.getElementById(formId);

    if (formContainer && window.RDStationForms) {
      // Clean up previous form instances in this specific container
      formContainer.innerHTML = '';
      new window.RDStationForms(formId, 'null').createForm();
    }
  }, [formId]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    loadScript(initializeForm);

  }, [initializeForm]);

  return {
    rerender: initializeForm
  };
}
