'use client';

import { useRdStationForm } from '@/hooks/use-rdstation-form';

const RDSTATION_FORM_ID = 'form-contato-site-cp-e16fa69f5771610a50c5';

export default function RdstationForm() {
  useRdStationForm(RDSTATION_FORM_ID);
  return <div role="main" id={RDSTATION_FORM_ID}></div>;
}
