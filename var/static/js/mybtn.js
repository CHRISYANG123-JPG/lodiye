
  function goToRandomWhatsApp() {
    const links = [
      "https://t.me/Anita95219",
      "https://t.me/Adriana1437",
      "https://t.me/Maria14561",
      "https://t.me/camila258369" // 替换为你的第一个号
      
    ];
    const randomIndex = Math.floor(Math.random() * links.length);
    window.location.href = links[randomIndex];
  }
