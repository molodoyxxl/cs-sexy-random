const players = [
    { name: "CoRtEz", avatar: "https://cs-sexy.ru/files/avatars/1749473691.jpg?v=4561" },
    { name: "laur Weaknesses", avatar: "https://cs-sexy.ru/files/avatars/1717087965.jpg?v=4561" },
    { name: "Rest in pieces", avatar: "https://cs-sexy.ru/files/avatars/1708983648.jpg?v=4561" },
    { name: "N1kezz", avatar: "https://cs-sexy.ru/files/avatars/1751556997.jpg?v=4561" },
    { name: "Rishi", avatar: "https://cs-sexy.ru/files/avatars/1720705137.jpg?v=4561" },
    { name: "Smoke", avatar: "https://cs-sexy.ru/files/avatars/1723837145.jpg?v=4561" },
    { name: "Yoruichi", avatar: "https://cs-sexy.ru/files/avatars/1738948441.jpg?v=4561" },
    { name: "moistrashniqson", avatar: "https://cs-sexy.ru/files/avatars/1749267888.jpg?v=4561" },
    { name: "XXL", avatar: "https://cs-sexy.ru/files/avatars/1753216621.jpg?v=4561" },
    { name: "paradox812", avatar: "https://cs-sexy.ru/files/avatars/1749890306.jpg?v=4561" },
]
  const input = document.getElementById('userInput');
  const button = document.getElementById('submitBtn');
  const response = document.getElementById('response');
  const playerName = document.getElementById('playerName');
  const playerAvatar = document.getElementById('playerAvatar');
  
  button.addEventListener('click', () => {
    const text = input.value.trim();
    if (text.length === 0) {
      alert("Пожалуйста, введите вопрос.");
      return;
    }
  
    // Выбираем случайного игрока
    const randomIndex = Math.floor(Math.random() * players.length);
    const player = players[randomIndex];
  
    // Показываем имя и аватар
    playerName.textContent = player.name;
    playerAvatar.src = player.avatar;
    playerAvatar.alt = player.name;
  
    // Показываем блок с ответом
    response.classList.remove('hidden');
  });
  


 
  //ПРИВИЛЕГИЮ ПОЛУЧИТЬ

  const modal = document.getElementById('modal');
const privilegeBtn = document.getElementById('privilegeBtn');

privilegeBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');

  setTimeout(() => {
    modal.classList.add('hidden');
  }, 1000);
});

