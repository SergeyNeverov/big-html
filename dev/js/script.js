document.addEventListener('DOMContentLoaded',function(){
    const cards = document.querySelectorAll('[data-card=""]'),
          tabs = document.querySelectorAll('[data-tab-open]')

    if(cards){
        cards.forEach(card => {
            card.addEventListener('mousemove', startMove);
            card.addEventListener('mouseout', stopMove);
            function startMove (e){
                const height = this.offsetHeight,
                width = this.offsetWidth;
            this.style.transform = `translateY(${(e.offsetY - height) / 50}px) translateX(${(e.offsetX - width) / 50}px)`;   
            };
        
            function stopMove() {
                this.style.transform = 'translate(0, 0)';
            };
        });
    }
    if(tabs){
        tabs.forEach(tab =>{
            tab.addEventListener('click', function(e){
                e.preventDefault();
                const id = this.dataset.tabOpen,
                      parentBlock = this.closest('.tabs-wrapper'),  
                      tabsBlocks = parentBlock.querySelectorAll('[data-tab]'),
                      tabsButtons =  parentBlock.querySelectorAll('[data-tab-open]')
                tabsBlocks.forEach(block =>{
                    block.classList.remove('active')
                });
                tabsButtons.forEach(button =>{
                    button.classList.remove('active')
                });
                this.classList.add('active');
                document.querySelector(`[data-tab="${id}"]`).classList.add('active');
            });
        });
    }
    $('[data-modal]').iziModal();
    $('[data-modal-open]').on('click', function(e){
        e.preventDefault();
        const id = $(this).attr('data-modal-open');
        console.log(id)
        $(`[data-modal=${id}]`).iziModal('open');

    });
    $('.filter-range').each(function(i, elem){
        const range = $(elem).find('.js-range-from-to'),
              inputFrom = $(elem).find('[data-from]'),
              inputTo = $(elem).find('[data-to]')
        $(range).ionRangeSlider({
            min: $('.js-range-from-to').data('min'),
            max: $('.js-range-from-to').data('max'),
            from: $('.js-range-from-to').data('from'),
            to: $('.js-range-from-to').data('to'),
            type: 'double',
            onChange: function (data) {
                $(inputTo).val(data.to_pretty);
                $(inputFrom).val(data.from_pretty);
            }
        });
    })
    $('.filter-block__title').on('click', function(){
        $(this).toggleClass('active');
        $(this).closest('.filter-block').find('.filter-block__content').slideToggle();
    });

    $('.slider').each(function(i, slider){
        const slidesToShow = +slider.dataset.count,
                slides = $(slider).find('.slider__list'),
                prevArrow = $(slider).find('[data-slider-arrow="prev"]'),
                nextArrow = $(slider).find('[data-slider-arrow="next"]');
        slides.slick({
            slidesToShow: slidesToShow,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            responsive: [
                {
                  breakpoint: 1600,
                  settings: {
                    slidesToShow: slidesToShow - 1,
                  }
                },
                {
                    breakpoint: 1440,
                    settings: {
                      slidesToShow: slidesToShow - 2,
                    }
                  }
              ]
        })        
    })
});
