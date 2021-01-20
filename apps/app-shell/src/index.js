const appsRegistry = {
  landing: "http://localhost:3001",
  auth: "http://localhost:3002",
  catalog: "http://localhost:3003",
};

function loadApp() {
  const { pathname } = window.location;
  const appKey =
    Object.keys(appsRegistry).find((key) => pathname.startsWith(`/${key}`)) ||
    "landing";
  fetchApp(appsRegistry[appKey]);
}

async function fetchApp(url) {
  const response = await fetch(`${url}/manifest.json`);
  if (response.ok) {
    const manifest = await response.json();
    appendScript(manifest);
  }
}

function appendScript(manifest) {
  for (const entry of Object.entries(manifest)) {
    const script = document.createElement("script");
    script.src = entry[1];
    document.head.append(script);
  }
}

loadApp();
