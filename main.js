document.addEventListener('DOMContentLoaded', function () {

    function Filter() {

        let tabs = document.querySelectorAll('.title-item');
        let tabsList = document.querySelector('.main__works-title');

        let yearTabs = document.querySelectorAll('.content-year__item');
        let yearTabsList = document.querySelector('.content-year__list');

        let cards = document.querySelectorAll('.content-works__item');

        let arr = [tabs, yearTabs, cards];

        if (tabsList && yearTabsList) {

            const getDataType = () =>  _checkActive(arr[0]).getAttribute('data-type');
            const getDataYear = () =>  _checkActive(arr[1]).getAttribute('data-year');

            function _checkActive(collection){
                let active = '';
                collection.forEach(item => {
                    if(item.classList.contains('active')){
                        active = item;
                    }
                });
                return active;
            }

            function _checkAttributeTypeSimilar (elem) {
                return elem.getAttribute('data-type') === getDataType();
            }

            function _checkAttributeYearSimilar(elem) {
                return elem.getAttribute('data-year') === getDataYear();
            }

            function showCards(items){
                items.forEach(item => {
                    item.classList.remove('active');
                    if(_checkAttributeYearSimilar(item) && _checkActive(arr[0]).getAttribute('data-type') === 'all'){
                        item.classList.add('active');
                    }
                    else if (_checkAttributeYearSimilar(item) && _checkAttributeTypeSimilar (item)){
                        item.classList.add('active');
                    }
                });
            }

            tabsList.addEventListener('click', function (event) {
                for(let i = 0; i < tabsList.children.length; i++){
                    tabsList.children[i].classList.remove('active');
                }
                if(event.target.classList.contains('title-item') ){
                    event.target.classList.add('active');
                    showCards(arr[2]);
                }
            });

            yearTabsList.addEventListener('click', function (event) {
                for(let i = 0; i < yearTabsList.children.length; i++){
                    yearTabsList.children[i].classList.remove('active');
                }
                if(event.target.classList.contains('content-year__text')){
                    event.target.closest('.content-year__item').classList.add('active');
                    showCards(arr[2]);
                }
            });
        }
    }

    Filter();
});
