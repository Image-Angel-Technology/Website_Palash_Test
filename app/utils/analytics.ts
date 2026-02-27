/**
 * ANALYTICS: Google Analytics 4 (GA4) implementation
 * Gated behind cookie consent
 * Custom event taxonomy for CTA tracking, form interactions, tab switches, etc.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 measurement ID

// Initialize GA4 (called only after consent)
export function initAnalytics() {
  if (typeof window === 'undefined') return;
  if (window.gtag) return; // Already initialized

  // Load GA4 script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer!.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  });

  console.log('[Analytics] GA4 initialized');
}

// Track pageview (call on route changes)
export function trackPageview(path: string, title?: string) {
  if (!window.gtag) return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
  });
}

// Track CTA click
export function trackCTAClick(label: string, page: string, position: string) {
  if (!window.gtag) return;

  window.gtag('event', 'cta_click', {
    label,
    page,
    position,
  });
}

// Track form start (first field focus)
export function trackFormStart(formName: string, page: string) {
  if (!window.gtag) return;

  window.gtag('event', 'form_start', {
    form_name: formName,
    page,
  });
}

// Track form step (multi-step transitions)
export function trackFormStep(formName: string, step: number, stepName: string) {
  if (!window.gtag) return;

  window.gtag('event', 'form_step', {
    form_name: formName,
    step,
    step_name: stepName,
  });
}

// Track form submission
export function trackFormSubmit(formName: string, page: string) {
  if (!window.gtag) return;

  window.gtag('event', 'form_submit', {
    form_name: formName,
    page,
  });
}

// Track form error
export function trackFormError(formName: string, fieldName: string, errorMessage: string) {
  if (!window.gtag) return;

  window.gtag('event', 'form_error', {
    form_name: formName,
    field_name: fieldName,
    error_message: errorMessage,
  });
}

// Track tab switch
export function trackTabSwitch(tabGroup: string, tabName: string) {
  if (!window.gtag) return;

  window.gtag('event', 'tab_switch', {
    tab_group: tabGroup,
    tab_name: tabName,
  });
}

// Track FAQ expand
export function trackFAQExpand(question: string, page: string) {
  if (!window.gtag) return;

  window.gtag('event', 'faq_expand', {
    question,
    page,
  });
}

// Track document download
export function trackDocDownload(documentName: string, documentType: string) {
  if (!window.gtag) return;

  window.gtag('event', 'doc_download', {
    document_name: documentName,
    document_type: documentType,
  });
}

// Listen for consent event
if (typeof window !== 'undefined') {
  window.addEventListener('analytics:init', initAnalytics);
}
