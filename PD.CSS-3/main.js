
window.addEventListener('DOMContentLoaded', (event) => {
    alertFn();
});

const alertFn = () => {
    const button = document.querySelectorAll('.btn-1');
    const search = document.querySelectorAll('.search-input');

    button.forEach(item => {
        item.addEventListener('click', (event) => {
            alert('Buton Çalışıyor')
        });
    });


    search.forEach(item => {
        item.addEventListener('click', (event) => {
            alert('Arama yapabilirsiniz')
        });
    });

    
 }