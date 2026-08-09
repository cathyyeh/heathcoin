document.addEventListener('DOMContentLoaded', () => {
  const taskRows = document.querySelectorAll('.task-row');

  taskRows.forEach((row, index) => {
    row.animate([
      { transform: 'translateY(12px)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 }
    ], {
      duration: 420,
      delay: 80 * index,
      easing: 'ease-out'
    });
  });

  const rewardCards = document.querySelectorAll('.case-card');
  rewardCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = '#4a927a';
      card.style.transform = 'translateY(-4px)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.borderColor = '#dcebec';
      card.style.transform = 'translateY(0)';
    });
  });

  const personaData = {
    work: {
      title: '30-50歲職場家庭族群',
      summary: '以工作與家庭雙重節奏為主，任務需短、可完成且帶有即時回饋。',
      coins: '+120',
      list: ['午間步數挑戰', '職場健康檢查追蹤', '家庭健康任務']
    },
    risk: {
      title: '50-65歲健康風險管理者',
      summary: '以慢性病與生活風險管理為主，任務偏向資料回填、風險追蹤與社區參與。',
      coins: '+180',
      list: ['慢性病追蹤通知', '健康風險追蹤回填', '社區健走活動']
    },
    elder: {
      title: '65-80歲長者與照護者',
      summary: '以長照支持與健康站互動為主，任務偏向陪伴、服務小時與關懷場域。',
      coins: '+240',
      list: ['長照服務小時登錄', '健康站關懷任務', '照護家屬任務加成']
    }
  };

  const personaButtons = document.querySelectorAll('[data-persona]');
  const title = document.getElementById('personaTitle');
  const summary = document.getElementById('personaSummary');
  const coins = document.getElementById('personaCoin');

  function updatePersona(personaKey) {
    const current = personaData[personaKey];
    if (!current) return;

    title.textContent = current.title;
    summary.textContent = current.summary;
    coins.textContent = current.coins;

    const listMap = {
      work: 'personaListWork',
      risk: 'personaListRisk',
      elder: 'personaListElder'
    };

    const listId = listMap[personaKey];
    const cardList = document.getElementById(listId);
    if (cardList) {
      cardList.innerHTML = current.list.map(item => `<li>${item}</li>`).join('');
    }
  }

  personaButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.getAttribute('data-persona');
      personaButtons.forEach(item => item.classList.toggle('active', item === button));
      updatePersona(selected);
    });
  });
});
