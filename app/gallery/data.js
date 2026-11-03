// To add media, drop the file into public/gallery and add an entry here.
// type: 'image' | 'video'. Videos accept an optional `poster`.
export const categories = [
  { id: 'billing', label: 'Billing System (Centipid Dashboard)' },
  { id: 'access-point', label: 'Access Point Setup' },
  { id: 'starlink', label: 'Starlink Setup' },
  { id: 'rack', label: 'Network Rack & Cabling' },
];

export const media = [
  { type: 'image', category: 'billing', src: '/gallery/billing-overview.jpeg', width: 1600, height: 732, title: 'Dashboard overview', alt: 'AirFiber billing dashboard overview with revenue, subscriptions and live sessions' },
  { type: 'image', category: 'billing', src: '/gallery/billing-packages.jpeg', width: 1600, height: 732, title: 'Packages and plans', alt: 'AirFiber billing system packages page listing Wi-Fi bundle plans' },
  { type: 'image', category: 'billing', src: '/gallery/billing-routers.jpeg', width: 1600, height: 732, title: 'NAS and routers', alt: 'AirFiber billing system NAS and routers page showing MikroTik devices' },
  { type: 'image', category: 'billing', src: '/gallery/billing-payments.jpeg', width: 1600, height: 732, title: 'Payments ledger', alt: 'AirFiber billing system payments ledger with Paystack hotspot transactions' },

  { type: 'image', category: 'access-point', src: '/gallery/ap-ceiling-install.jpeg', width: 768, height: 1024, title: 'Ceiling-mounted access point', alt: 'Access point mounted on a ceiling' },
  { type: 'image', category: 'access-point', src: '/gallery/ap-litebeam-link.jpeg', width: 1426, height: 768, title: 'LiteBeam 5AC point-to-point link', alt: 'airOS 8 dashboard of a LiteBeam 5AC link to a LiteAP AC' },
  { type: 'image', category: 'access-point', src: '/gallery/ap-litebeam-details.jpeg', width: 1426, height: 768, title: 'LiteBeam link throughput and details', alt: 'airOS 8 capacity, throughput and wireless details for both ends of a PtP link' },
  { type: 'image', category: 'access-point', src: '/gallery/ap-ruijie-topology.jpeg', width: 1426, height: 768, title: 'Ruijie Reyee access point', alt: 'Ruijie Reyee web management showing a RAP6262 access point topology' },
  { type: 'image', category: 'access-point', src: '/gallery/ap-nanostation-m5.jpeg', width: 1237, height: 768, title: 'NanoStation M5 backhaul AP', alt: 'airOS status page of a NanoStation M5 in Access Point WDS mode' },
  { type: 'image', category: 'access-point', src: '/gallery/ap-powerbeam-m5.jpeg', width: 1600, height: 732, title: 'PowerBeam M5 backhaul station', alt: 'airOS status page of a PowerBeam M5 400 in Station WDS mode' },

  { type: 'image', category: 'starlink', src: '/gallery/starlink-dish-install.jpeg', width: 768, height: 1023, title: 'Starlink dish installation', alt: 'Starlink dish mounted under a roof eave with a ladder' },
  { type: 'image', category: 'starlink', src: '/gallery/starlink-dashboard.jpeg', width: 1523, height: 768, title: 'Monitoring dashboard', alt: 'Starlink monitoring dashboard with throughput, latency and obstruction map' },
  { type: 'image', category: 'starlink', src: '/gallery/starlink-data-usage.jpeg', width: 1523, height: 768, title: 'Data usage per device', alt: 'Starlink data usage chart with a per-device breakdown' },
  { type: 'image', category: 'starlink', src: '/gallery/starlink-ping-success.jpeg', width: 1523, height: 768, title: 'Ping success', alt: 'Starlink and router ping success charts' },
  { type: 'image', category: 'starlink', src: '/gallery/starlink-satellite-view.jpeg', width: 1523, height: 768, title: 'Live satellite view', alt: 'Live satellite view showing an unobstructed Starlink sky map' },

  { type: 'image', category: 'rack', src: '/gallery/mikrotik-router.jpeg', width: 720, height: 1280, title: 'MikroTik router with LTE antennas', alt: 'Red MikroTik router with two antennas and active Ethernet ports' },
  { type: 'image', category: 'rack', src: '/gallery/rack-patch-panel.jpeg', width: 768, height: 1023, title: 'Patch panel and switching', alt: 'Network rack with patch panels, a MikroTik router and switches' },
  { type: 'image', category: 'rack', src: '/gallery/rack-maintenance.jpeg', width: 768, height: 1024, title: 'Rack maintenance', alt: 'Ephraim working on a wall-mounted network rack' },
];
