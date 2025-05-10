(function () {
  const scriptTag = document.currentScript;
  const projectId = scriptTag?.dataset.projectId || "default_project";
  const tags = (scriptTag?.dataset.tags || "").split(",");
  const iframe = document.createElement("iframe");
  iframe.src = `https://yourdomain.com/widget?project_id= ${projectId}&tags=${encodeURIComponent(tags.join(","))}`;
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "400px";
  iframe.style.height = "500px";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999999999";
  iframe.style.borderRadius = "12px";
  iframe.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
  document.body.appendChild(iframe);
})();