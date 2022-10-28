$(document).ready(function () {
  const listCheck = {};
  $('li input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      listCheck[$(this).data('id')] = $(this).data('name');
    } else {
      delete listCheck[$(this).data('id')];
    }
    const values = Object.values(listCheck);
    const list = values.join(', ');
    const short = list.slice(0, 30);
    $('.amenities h4').text(short + '...');
    if (values.length === 0) $('.amenities h4').html('&nbsp;');
  });
});
