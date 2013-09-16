$(document).ready(function(){
    $('table tr').each(function(){
       var sum=0;
       $(this).children('td').each(function(){
         if(!isNaN($(this).html())){
           var data = parseInt($(this).html());
           sum= sum + data;
         }
       }); 
       $(this).append('<td>' + sum + '</td>');
    });
    var numCol = $('table tr:first').children('td').length;
    var columns = "";
    for(var i=0; i<numCol; i++){
        var sum = 0;
        $('table tr').each(function(){
            var data = $(this).children('td').get(i).innerHTML;
            if(!isNaN(data)){
                sum = sum + parseInt(data);
            }
               
        });
        columns = columns + '<td>' + sum + '</td>';
    }
    $('table').append('<tr>' + columns + '</tr>');
});