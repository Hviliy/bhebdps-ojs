document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const progress = document.getElementById('progress');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();
  
      xhr.open('POST', form.getAttribute('action'));
  
      xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
          const percent = event.loaded / event.total;
          progress.value = percent;
        }
      };
  
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log('Файл успешно загружен');
          progress.value = 0;
          form.reset();
        } else {
          console.error('Ошибка при загрузке файла:', xhr.status, xhr.statusText);
        }
      };
  
      xhr.onerror = function() {
        console.error('Произошла ошибка при загрузке.');
      };
  
      xhr.send(formData);
    });
  });
  