(() => {
  const products = {
    'https://pay.wiapy.com/yhtHl0yRZTdk': { name: 'Guia Off Grid — Apostila', value: 29.90 }
  };
  const parameters = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'src', 'sck', 'fbclid', 'gclid'];
  const incoming = new URLSearchParams(window.location.search);
  document.querySelectorAll('a[href*="pay.wiapy.com"]').forEach(link => {
    const destination = new URL(link.href);
    const product = products[destination.origin + destination.pathname];
    if (!product) return;
    parameters.forEach(parameter => {
      const value = incoming.get(parameter);
      if (value) destination.searchParams.set(parameter, value);
    });
    link.href = destination.toString();
    link.addEventListener('click', event => {
      if (event.defaultPrevented) return;
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'InitiateCheckout', { content_name: product.name, value: product.value, currency: 'BRL' });
      }
    });
  });
})();
