jQuery(document).ready(function () {

    let $ = jQuery;
    $('body').find('.bg-cover,[data-fix="image"]').each(function () {
        var wrap = $(this),
            image = wrap.find('>img');
        if (image.attr('src')) {
            if (wrap.data('fix') != 'image') {
                image.hide();
                wrap.css({
                    'background-image': 'url(\'' + image.attr('src') + '\')'
                });
            } else {
                wrap.find('.svg.img-fluid').css({
                    'background-image': 'url(\'' + image.attr('src') + '\')'
                });
            }
        }
    });
});
