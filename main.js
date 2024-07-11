var imageArray = [
    "img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"
]; //Массив, в котором содержатся ссылки на изображения



window.Number = '0';
//Привязываем количество картинок к размеру массива

var imageCount = imageArray.length;
function image(num){

//Если выбрана следующая картинка

    if (num==1){//Если это последняя картинка, то не увеличиваем счетчик number

        if(Number < imageCount-1){
            Number++;
            document.getElementById("images").src=imageArray[Number];
            document.getElementById('num_img').innerHTML = Number +1+"/"+imageCount;

        }

    } else{  //Если выбрана предыдущая картинка	 
        //Если это первая картинка, то не уменьшаем счетчик 
        number
        if(Number>0){
            Number--;
            document.getElementById("images").src=imageArray
            [Number];
            document.getElementById('num_img').innerHTML = Number +1
            +'/'+imageCount;
        }
    }
}
//Функция для показа стрелочек
function btn_show(){
    if(Number!=0 )
    document.getElementById('left').style.display='block';
    if(Number!=imageCount-1)
    document.getElementById('right').style.display='block';
}
 //Функция, которая прекращает показ стрелочек

function btn_noshow(){
    document.getElementById('left').style.display='none';
    document.getElementById('right').style.display='none';

}
 //Выводим картинки

document.write('<img id="images" src="'+imageArray[0]+'">');