'use client';

import { useRdStationForm } from '@/hooks/use-rdstation-form';

const RDSTATION_FORM_ID = 'form-podcast-site-cp-1b74a013bfb40aa609d8';

export default function PodcastRdstationForm() {
  useRdStationForm(RDSTATION_FORM_ID);
  return <div role="main" id={RDSTATION_FORM_ID}></div>;
}
