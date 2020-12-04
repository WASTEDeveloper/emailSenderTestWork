document.addEventListener('DOMContentLoaded', function(event) { 
    var btn = document.getElementById('btn');
    btn.addEventListener('click', function() {
        var input = document.getElementById('user_phone').value;
        if (input.length === 0) {
            alert('Поле обязательно для заполнения!');
        }
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: 'src/scripts/mail.php',
            data: $('form').serialize(),
            success: function () {
                alert('form was submitted');
            }
        });
    });
});