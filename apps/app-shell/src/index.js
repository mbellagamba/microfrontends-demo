const appsRegistry = {
  landing: "http://localhost:3001",
  auth: "http://localhost:3002",
  catalog: "http://localhost:3003",
};

function renderApp() {
  const { pathname } = window.location;
  const appKey =
    Object.keys(appsRegistry).find((key) => pathname.startsWith(`/${key}`)) ||
    "landing";
  fetchMicrofrontend(appsRegistry[appKey]);
}

async function fetchMicrofrontend(url) {
  const response = await fetch(`${url}/manifest.json`);
  if (response.ok) {
    const manifest = await response.json();
    appendScript(manifest);
  }
}

function appendScript(manifest) {
  for (const scriptUrl of Object.values(manifest)) {
    const script = document.createElement("script");
    script.src = scriptUrl;
    document.head.append(script);
  }
}

renderApp();
