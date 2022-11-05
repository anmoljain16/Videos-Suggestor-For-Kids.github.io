let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container .main-video').src = src;
      document.querySelector('.main-video-container .main-video').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});

function rangeSlide(value) {
   document.getElementById('rangeValue').innerHTML = value;
}


$(document).ready(function() {
   $('.list').css('display', 'none');
   $('.container').css('display', 'none');
   $('.agesh h3').css('font-size', 'larger');
   $('.navbar').css('display','none');


   $('.accept').click(function() {
      let age = $('#rangeValue').text();
      // console.log(age);
      $('.container').css('display', 'flex');
      $('.container2').css('display', 'none');
      $('.navbar').css('display', 'flex');

      if (age <= 5) {
         $('.small').css('display', 'flex');
      } else if (age > 5 && age <= 13) {
         $('.medium').css('display', 'flex');
      } else if (age > 13 && age < 18) {
         $('.large').css('display', 'flex');
      }


      $('#agesh').text('Showing Results For ' + age + ' year old kid');


      let sec=0;
      let min=0;
      let hr=0;
      setInterval(function() {
         sec = sec+1;

         if (sec === 60){
            min = min+1;
            sec=0;
            if(min === 60){
               hr= hr+1;
               min = 0;
            }
         }
         $('.navbar-brand').text( "Time Spend   " +hr+ ": " +min+ ": " +sec);

      },1000);


   });



});