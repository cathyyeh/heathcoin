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
  rewardCards.forEach((card) => {
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
      summary: '以工作與家庭節奏為主，任務短而可持續，強調每天小步驟累積健康時間。',
      value: '＋6週連續行動',
      list: ['午間步數與作息管理', '家庭陪伴時段', '社區健康任務']
    },
    risk: {
      title: '50-65歲健康風險管理者',
      summary: '以慢性病與生活風險管理為主，任務偏向追蹤、照護與社區參與。',
      value: '＋4小時社區支持',
      list: ['慢性病追蹤回填', '社區健康站參與', '照護服務時數']
    },
    elder: {
      title: '65-80歲長者與照護者',
      summary: '以陪伴、服務與健康站互動為主，任務偏向關懷、照護與社區支持。',
      value: '＋2小時家庭陪伴',
      list: ['陪伴與關懷任務', '照護家屬支持', '社區服務認證']
    }
  };

  const personaButtons = document.querySelectorAll('[data-persona]');
  const title = document.getElementById('personaTitle');
  const summary = document.getElementById('personaSummary');
  const value = document.getElementById('personaCoin');

  function updatePersona(personaKey) {
    const current = personaData[personaKey];
    if (!current) return;

    title.textContent = current.title;
    summary.textContent = current.summary;
    value.textContent = current.value;

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
