javascript: (function () {
  fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo",
      "prompt": window.getSelection(),
      "temperature": 0.7,
      "max_tokens": 4000,
      "top_p": 1,
      "frequency_penalty": 0,
      "presence_penalty": 0
    })
  }).then(res => res.json()).then(data => {
    const summary = data.choices[0].text;
    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.left = '0';
    banner.style.right = '0';
    banner.style.top = '0';
    banner.style.zIndex = 999999999;
    banner.style.background = '#000';
    banner.style.color = '#fff';
    banner.style.padding = '15px';
    banner.innerHTML = summary;
    document.body.appendChild(banner);
  });
})();
