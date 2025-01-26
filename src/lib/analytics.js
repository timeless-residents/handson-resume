
export const GA_ID = 'G-1';
export const GTM_ID = 'GTM-MHHVNK3Z';

window.dataLayer = window.dataLayer || [];
function gtag() {window.dataLayer.push(arguments);}

export const initGA = () => {
  gtag('consent', 'default', {
    'analytics_storage': 'granted',
    'personalization_storage': 'denied',
    'functionality_storage': 'denied',
    'ad_storage': 'denied'
  });
  
  gtag('js', new Date());
  gtag('config', GA_ID, {
    send_page_view: false,
    client_storage: 'none',
    client_id: localStorage.getItem('ga_client_id')
  });
};