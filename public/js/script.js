'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('[data-card=""]'),
        tabs = document.querySelectorAll('[data-tab-open]'),
        showMore = document.querySelector('[data-show-props]');

    if (showMore) {
        showMore.addEventListener('click', function (e) {
            e.preventDefault();
            var hiddenItems = document.querySelectorAll('[data-hidden-prop="true"]');
            if (showMore.classList.contains('active')) {
                hiddenItems.forEach(function (element) {
                    element.classList.remove('hidden');
                });
                showMore.classList.remove('active');
                showMore.querySelector('span').innerText = 'Развернуть';
            } else {
                hiddenItems.forEach(function (element) {
                    element.classList.add('hidden');
                });
                showMore.classList.add('active');
                showMore.querySelector('span').innerText = 'Свернуть';
            }
        });
    }

    if (cards) {
        cards.forEach(function (card) {
            card.addEventListener('mousemove', startMove);
            card.addEventListener('mouseout', stopMove);
            function startMove(e) {
                var height = this.offsetHeight,
                    width = this.offsetWidth;
                this.style.transform = 'translateY(' + (e.offsetY - height) / 50 + 'px) translateX(' + (e.offsetX - width) / 50 + 'px)';
            };

            function stopMove() {
                this.style.transform = 'translate(0, 0)';
            };
        });
    }
    if (tabs) {
        tabs.forEach(function (tab) {
            tab.addEventListener('click', function (e) {
                e.preventDefault();
                var id = this.dataset.tabOpen,
                    parentBlock = this.closest('.tabs-wrapper'),
                    tabsBlocks = parentBlock.querySelectorAll('[data-tab]'),
                    tabsButtons = parentBlock.querySelectorAll('[data-tab-open]');
                tabsBlocks.forEach(function (block) {
                    block.classList.remove('active');
                });
                tabsButtons.forEach(function (button) {
                    button.classList.remove('active');
                });
                this.classList.add('active');
                document.querySelector('[data-tab="' + id + '"]').classList.add('active');
            });
        });
    }
    $('[data-modal]').iziModal();
    $('[data-modal-open]').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('data-modal-open');
        console.log(id);
        $('[data-modal=' + id + ']').iziModal('open');
    });
    $('.filter-range').each(function (i, elem) {
        var range = $(elem).find('.js-range-from-to'),
            inputFrom = $(elem).find('[data-from]'),
            inputTo = $(elem).find('[data-to]');
        $(range).ionRangeSlider({
            min: $('.js-range-from-to').data('min'),
            max: $('.js-range-from-to').data('max'),
            from: $('.js-range-from-to').data('from'),
            to: $('.js-range-from-to').data('to'),
            type: 'double',
            onChange: function onChange(data) {
                $(inputTo).val(data.to_pretty);
                $(inputFrom).val(data.from_pretty);
            }
        });
    });
    $('.filter-block__title').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.filter-block').find('.filter-block__content').slideToggle();
    });

    $('.select').niceSelect();

    $('.slider').each(function (i, slider) {
        var slidesToShow = +slider.dataset.count,
            slides = $(slider).find('.slider__list'),
            prevArrow = $(slider).find('[data-slider-arrow="prev"]'),
            nextArrow = $(slider).find('[data-slider-arrow="next"]');
        slides.slick({
            slidesToShow: slidesToShow,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            responsive: [{
                breakpoint: 1600,
                settings: {
                    slidesToShow: slidesToShow - 1
                }
            }, {
                breakpoint: 1440,
                settings: {
                    slidesToShow: slidesToShow - 2
                }
            }]
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0YWJzIiwic2hvd01vcmUiLCJxdWVyeVNlbGVjdG9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGlkZGVuSXRlbXMiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImZvckVhY2giLCJlbGVtZW50IiwicmVtb3ZlIiwiaW5uZXJUZXh0IiwiYWRkIiwiY2FyZCIsInN0YXJ0TW92ZSIsInN0b3BNb3ZlIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsInN0eWxlIiwidHJhbnNmb3JtIiwib2Zmc2V0WSIsIm9mZnNldFgiLCJ0YWIiLCJpZCIsImRhdGFzZXQiLCJ0YWJPcGVuIiwicGFyZW50QmxvY2siLCJjbG9zZXN0IiwidGFic0Jsb2NrcyIsInRhYnNCdXR0b25zIiwiYmxvY2siLCJidXR0b24iLCIkIiwiaXppTW9kYWwiLCJvbiIsImF0dHIiLCJjb25zb2xlIiwibG9nIiwiZWFjaCIsImkiLCJlbGVtIiwicmFuZ2UiLCJmaW5kIiwiaW5wdXRGcm9tIiwiaW5wdXRUbyIsImlvblJhbmdlU2xpZGVyIiwibWluIiwiZGF0YSIsIm1heCIsImZyb20iLCJ0byIsInR5cGUiLCJvbkNoYW5nZSIsInZhbCIsInRvX3ByZXR0eSIsImZyb21fcHJldHR5IiwidG9nZ2xlQ2xhc3MiLCJzbGlkZVRvZ2dsZSIsIm5pY2VTZWxlY3QiLCJzbGlkZXIiLCJzbGlkZXNUb1Nob3ciLCJjb3VudCIsInNsaWRlcyIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInNsaWNrIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQTZDLFlBQVU7QUFDbkQsUUFBTUMsUUFBUUYsU0FBU0csZ0JBQVQsQ0FBMEIsZ0JB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LHNCQUFGLEVBQTBCRSxFQUExQixDQUE2QixPQUE3QixFQUFzQyxZQUFVO0FBQzVDRixVQUFFLElBQUYsRUFBUXdCLFdBQVIsQ0FBb0IsUUFBcEI7QUFDQXhCLFVBQUUsSUFBRixFQUFRTCxPQUFSLENBQWdCLGVBQWhCLEVBQWlDZSxJQUFqQyxDQUFzQyx3QkFBdEMsRUFBZ0VlLFdBQWhFO0FBQ0gsS0FIRDs7QUFLQXpCLE1BQUUsU0FBRixFQUFhMEIsVUFBYjs7QUFFQTFCLE1BQUUsU0FBRixFQUFhTSxJQUFiLENBQWtCLFVBQVNDLENBQVQsRUFBWW9CLE1BQVosRUFBbUI7QUFDakMsWUFBTUMsZUFBZSxDQUFDRCxPQUFPbkMsT0FBUCxDQUFlcUMsS0FBckM7QUFBQSxZQUNRQyxTQUFTOUIsRUFBRTJCLE1BQUYsRUFBVWpCLElBQVYsQ0FBZSxlQUFmLENBRGpCO0FBQUEsWUFFUXFCLFlBQVkvQixFQUFFMkIsTUFBRixFQUFVakIsSUFBVixDQUFlLDRCQUFmLENBRnBCO0FBQUEsWUFHUXNCLFlBQVloQyxFQUFFMkIsTUFBRixFQUFVakIsSUFBVixDQUFlLDRCQUFmLENBSHBCO0FBSUFvQixlQUFPRyxLQUFQLENBQWE7QUFDVEwsMEJBQWNBLFlBREw7QUFFVEcsdUJBQVdBLFNBRkY7QUFHVEMsdUJBQVdBLFNBSEY7QUFJVEUsd0JBQVksQ0FDUjtBQUNFQyw0QkFBWSxJQURkO0FBRUVDLDBCQUFVO0FBQ1JSLGtDQUFjQSxlQUFlO0FBRHJCO0FBRlosYUFEUSxFQU9SO0FBQ0lPLDRCQUFZLElBRGhCO0FBRUlDLDBCQUFVO0FBQ1JSLGtDQUFjQSxlQUFlO0FBRHJCO0FBRmQsYUFQUTtBQUpILFNBQWI7QUFtQkgsS0F4QkQ7QUF5QkgsQ0FuSEQiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2FyZD1cIlwiXScpLFxyXG4gICAgICAgICAgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYi1vcGVuXScpLFxyXG4gICAgICAgICAgc2hvd01vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zaG93LXByb3BzXScpXHJcblxyXG4gICAgaWYoc2hvd01vcmUpe1xyXG4gICAgICAgIHNob3dNb3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgaGlkZGVuSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1oaWRkZW4tcHJvcD1cInRydWVcIl0nKVxyXG4gICAgICAgICAgICBpZihzaG93TW9yZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgICAgIGhpZGRlbkl0ZW1zLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNob3dNb3JlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgc2hvd01vcmUucXVlcnlTZWxlY3Rvcignc3BhbicpLmlubmVyVGV4dCA9ICfQoNCw0LfQstC10YDQvdGD0YLRjCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoaWRkZW5JdGVtcy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzaG93TW9yZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHNob3dNb3JlLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5pbm5lclRleHQgPSAn0KHQstC10YDQvdGD0YLRjCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZihjYXJkcyl7XHJcbiAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzdGFydE1vdmUpO1xyXG4gICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgc3RvcE1vdmUpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBzdGFydE1vdmUgKGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHsoZS5vZmZzZXRZIC0gaGVpZ2h0KSAvIDUwfXB4KSB0cmFuc2xhdGVYKCR7KGUub2Zmc2V0WCAtIHdpZHRoKSAvIDUwfXB4KWA7ICAgXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0b3BNb3ZlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKDAsIDApJztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmKHRhYnMpe1xyXG4gICAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT57XHJcbiAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLmRhdGFzZXQudGFiT3BlbixcclxuICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEJsb2NrID0gdGhpcy5jbG9zZXN0KCcudGFicy13cmFwcGVyJyksICBcclxuICAgICAgICAgICAgICAgICAgICAgIHRhYnNCbG9ja3MgPSBwYXJlbnRCbG9jay5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWJdJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YWJzQnV0dG9ucyA9ICBwYXJlbnRCbG9jay5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YWItb3Blbl0nKVxyXG4gICAgICAgICAgICAgICAgdGFic0Jsb2Nrcy5mb3JFYWNoKGJsb2NrID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRhYnNCdXR0b25zLmZvckVhY2goYnV0dG9uID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFiPVwiJHtpZH1cIl1gKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkKCdbZGF0YS1tb2RhbF0nKS5pemlNb2RhbCgpO1xyXG4gICAgJCgnW2RhdGEtbW9kYWwtb3Blbl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbW9kYWwtb3BlbicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgICQoYFtkYXRhLW1vZGFsPSR7aWR9XWApLml6aU1vZGFsKCdvcGVuJyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAkKCcuZmlsdGVyLXJhbmdlJykuZWFjaChmdW5jdGlvbihpLCBlbGVtKXtcclxuICAgICAgICBjb25zdCByYW5nZSA9ICQoZWxlbSkuZmluZCgnLmpzLXJhbmdlLWZyb20tdG8nKSxcclxuICAgICAgICAgICAgICBpbnB1dEZyb20gPSAkKGVsZW0pLmZpbmQoJ1tkYXRhLWZyb21dJyksXHJcbiAgICAgICAgICAgICAgaW5wdXRUbyA9ICQoZWxlbSkuZmluZCgnW2RhdGEtdG9dJylcclxuICAgICAgICAkKHJhbmdlKS5pb25SYW5nZVNsaWRlcih7XHJcbiAgICAgICAgICAgIG1pbjogJCgnLmpzLXJhbmdlLWZyb20tdG8nKS5kYXRhKCdtaW4nKSxcclxuICAgICAgICAgICAgbWF4OiAkKCcuanMtcmFuZ2UtZnJvbS10bycpLmRhdGEoJ21heCcpLFxyXG4gICAgICAgICAgICBmcm9tOiAkKCcuanMtcmFuZ2UtZnJvbS10bycpLmRhdGEoJ2Zyb20nKSxcclxuICAgICAgICAgICAgdG86ICQoJy5qcy1yYW5nZS1mcm9tLXRvJykuZGF0YSgndG8nKSxcclxuICAgICAgICAgICAgdHlwZTogJ2RvdWJsZScsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgJChpbnB1dFRvKS52YWwoZGF0YS50b19wcmV0dHkpO1xyXG4gICAgICAgICAgICAgICAgJChpbnB1dEZyb20pLnZhbChkYXRhLmZyb21fcHJldHR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgICQoJy5maWx0ZXItYmxvY2tfX3RpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5maWx0ZXItYmxvY2snKS5maW5kKCcuZmlsdGVyLWJsb2NrX19jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5zZWxlY3QnKS5uaWNlU2VsZWN0KCk7XHJcblxyXG4gICAgJCgnLnNsaWRlcicpLmVhY2goZnVuY3Rpb24oaSwgc2xpZGVyKXtcclxuICAgICAgICBjb25zdCBzbGlkZXNUb1Nob3cgPSArc2xpZGVyLmRhdGFzZXQuY291bnQsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXMgPSAkKHNsaWRlcikuZmluZCgnLnNsaWRlcl9fbGlzdCcpLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93ID0gJChzbGlkZXIpLmZpbmQoJ1tkYXRhLXNsaWRlci1hcnJvdz1cInByZXZcIl0nKSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdyA9ICQoc2xpZGVyKS5maW5kKCdbZGF0YS1zbGlkZXItYXJyb3c9XCJuZXh0XCJdJyk7XHJcbiAgICAgICAgc2xpZGVzLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBzbGlkZXNUb1Nob3csXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkFycm93LFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRBcnJvdyxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxNjAwLFxyXG4gICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogc2xpZGVzVG9TaG93IC0gMSxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxNDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHNsaWRlc1RvU2hvdyAtIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pICAgICAgICBcclxuICAgIH0pXHJcbn0pO1xyXG4iXX0=
