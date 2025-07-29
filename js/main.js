function trackRedirect(element) {
  const platform = element.dataset.platform;
  const productId = element.dataset.productid;
  const trackingId = element.dataset.trackingid;

  console.log("Tracking redirect:", {
    platform,
    productId,
    trackingId,
    timestamp: new Date().toISOString()
  });

  // Para rastrear: envie dados para seu sistema ou planilha
  // fetch('https://seuscript.app/endpoint', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     platform,
  //     productId,
  //     trackingId,
  //     timestamp: new Date().toISOString()
  //   })
  // });
}
