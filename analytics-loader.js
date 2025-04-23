fetch("analytics.html")
  .then(res => res.text())
  .then(code => {
    const temp = document.createElement("div");
    temp.innerHTML = code;

    // Loop through and manually append each <script> inside analytics.html
    temp.querySelectorAll("script").forEach((oldScript) => {
      const newScript = document.createElement("script");
      if (oldScript.src) {
        newScript.src = oldScript.src;
        newScript.async = oldScript.async;
      } else {
        newScript.textContent = oldScript.textContent;
      }
      document.head.appendChild(newScript);
    });
  });
