/**
 * Created by marcusedwards on 2017-12-08.
 */
$(document).ready(function() {
    $('.result').html($('#code-editor').text());
    hljs.highlightBlock($('.result')[0],'  ', false);
    $(document).on('keyup', '#code-editor', function(event) {
        $('.result').html(this.innerText);
        hljs.highlightBlock($('.result')[0],'  ', false);
    });
    $('.result').css({
        position: "absolute",
        top: $('#code-editor').position().top + "px",
        left: ($('#code-editor').position().left)+ "px",
        width: $('.editor').width() + 40
    }).show();
    (function() {
        var target = $(".result");
        $(".editor").scroll(function() {
            target.prop("scrollTop", this.scrollTop)
                .prop("scrollLeft", this.scrollLeft);
        });
    })();
});
$(window).resize(function(){
    $('.result').css({
        position: "absolute",
        top: $('#code-editor').position().top + "px",
        left: ($('#code-editor').position().left)+ "px",
        width: $('.editor').width() + 40
    });
});