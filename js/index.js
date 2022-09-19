////////////////////////ASSIDE////////////////////////////////////////////
(function() {
    const main = document.querySelector('main');
    const aside = document.querySelector('aside');
    const asideItems = document.querySelectorAll('.aside__list li');
    const links = document.querySelectorAll('.aside__link');
    const btnBack = document.querySelector('.main__back');
    const w = window.innerWidth;
    if(w > 769) {
        asideItems[2].classList.add('active');
        asideItems.forEach(el => el.classList.remove('active'));
    } else {
        asideItems.forEach(el => {
            el.addEventListener('click', function(e) {
                aside.classList.add('hidden');
                main.classList.add('show')
            })
        });
        btnBack.addEventListener('click', function() {
            asideItems.forEach(el => el.classList.remove('active'));
            aside.classList.remove('hidden');
            main.classList.remove('show')
        })
    }

    links.forEach(el => {
        el.addEventListener('click', function(e){
            e.preventDefault();
        })
    });
    
    asideItems.forEach(el => {
        el.addEventListener('click', function(e) {
            asideItems.forEach(el => el.classList.remove('active'));
            el.classList.add('active');
        })
    });
})();

////////////////////////MAIN////////////////////////////////////////////
(function() {
    let curPage = 1;
    const users = 320;
    const perPage = 8;
    let pages = Math.ceil(users / perPage);
    const nextbtn = document.querySelector('.main__pagination-arrow.next');
    const prevBtn = document.querySelector('.main__pagination-arrow.prev');
    const paginationArea = document.querySelector('.main__pagination-items');

    paginationArea.innerHTML = pagCreator(pages, curPage);

    function pagCreator(pages, curPage) {
        let spanTag = '';
        let active;
        let beforePage = curPage - 1;
        let afterPage = curPage + 1;

        if(curPage > 2){
            spanTag += `<span class="main__pagination-item">1</span>`;
            if(curPage > 3){
                spanTag += `<span class="dots">...</span>`;
            }
        }

        if (curPage === pages) {
            beforePage = beforePage - 2;
        } else if (curPage === pages - 1) {
            beforePage = beforePage - 1;
        }

        if (curPage === 1) {
            afterPage = afterPage + 2;
        } else if (curPage === 2) {
            afterPage  = afterPage + 1;
        }

        for (var plength = beforePage; plength <= afterPage; plength++) {
            if (plength > pages) {
              continue;
            }
            if (plength === 0) {
              plength = plength + 1;
            }
            if(curPage === plength) {
              active = "active";
            } else {
              active = "";
            }
            spanTag += `<span class="main__pagination-item ${active}">${plength}</span>`;
        }

        if(curPage < pages - 1){
            if(curPage < pages - 2){
                spanTag += `<span class="dots">...</span>`;
            }
            spanTag += `<span class="main__pagination-item">${pages}</span>`;
        }


        paginationArea.innerHTML = spanTag;
        return spanTag;
    }

    nextbtn.addEventListener('click', function() {
        if(curPage === pages) {
            curPage = 1; 
            pagCreator(pages, curPage); 
        } else {
            curPage++;
            pagCreator(pages, curPage); 
        }
    })

    prevBtn.addEventListener('click', function() {
        if(curPage === 1) {
            curPage = pages;
            pagCreator(pages, curPage); 
        } else {
            curPage--;
            pagCreator(pages, curPage); 
        }
    })
})();