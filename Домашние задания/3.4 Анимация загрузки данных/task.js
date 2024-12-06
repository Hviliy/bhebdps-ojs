document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');
    const localDataKey = 'currencyData';
  
    function renderData(data) {
      itemsContainer.innerHTML = '';
      const valutes = data.response.Valute;
  
      for (let key in valutes) {
        const valute = valutes[key];
        const item = document.createElement('div');
        item.classList.add('item');
        
        const codeDiv = document.createElement('div');
        codeDiv.classList.add('item__code');
        codeDiv.textContent = valute.CharCode;
        
        const valueDiv = document.createElement('div');
        valueDiv.classList.add('item__value');
        valueDiv.textContent = valute.Value;
        
        const currencyDiv = document.createElement('div');
        currencyDiv.classList.add('item__currency');
        currencyDiv.textContent = 'руб.';
        
        item.appendChild(codeDiv);
        item.appendChild(valueDiv);
        item.appendChild(currencyDiv);
        itemsContainer.appendChild(item);
      }
    }
  
    function loadDataFromServer() {
      fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
        .then(response => response.json())
        .then(data => {
          localStorage.setItem(localDataKey, JSON.stringify(data));
          renderData(data);
          loader.classList.remove('loader_active');
        })
        .catch(err => {
          console.error('Ошибка при загрузке данных:', err);
          loader.classList.remove('loader_active');
          itemsContainer.innerHTML = 'Не удалось загрузить данные. Попробуйте обновить страницу позже.';
        });
    }
  
    const cachedData = localStorage.getItem(localDataKey);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      renderData(parsedData);
      loadDataFromServer();
      loader.classList.remove('loader_active');
    } else {
      loader.classList.add('loader_active');
      loadDataFromServer();
    }
  });
  