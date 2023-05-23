document.getElementById("example").DataTable( {
    "searching": false,
    "paging": false,
    "ordering": false,
    "info":     false,
    "bLengthChange" : false
} );


Array.from(document.querySelectorAll('.multipleCheck input')).forEach(e => e.addEventListener("click", function(){
    e.parent().parent().toggleClass('checkedX');
}))

Array.from(document.querySelectorAll('.deviceSelect input')).forEach(e => e.addEventListener("click", function(){
    e.parent().parent().toggleClass('checkedBox');

}))