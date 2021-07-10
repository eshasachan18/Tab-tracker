$(document).ready(function() {
if ($(".slider-section").hasClass("slider-condition")) {
var $status = $('.pagingInfo');
var $slickElement = $('.main-slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});
$slickElement.slick({
      dots: false,
      arrows: true,
      autoplay: true
});
   
 }  
//$('#body-row .collapse').collapse('hide');
$('.main-small-logo').hide();
// Collapse click

$('[data-toggle=sidebar-colapse]').click(function() {
SidebarCollapse();
});
function SidebarCollapse () {
// $('.menu-collapsed').toggleClass('d-none');
$('.menu-title').toggleClass('d-none');
//$('.current-page-active .menu-title').toggleClass('d-block');
$('.main-small-logo').toggleClass('d-block');
$('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
$('.main').toggleClass('main-expanded main-collapsed');
}
$('.table-data-collapsed').hide();
$('[data-toggle=table-colapse]').click(function() {
$('.table-data-collapsed').not(':hidden').slideToggle();
$(this).parent().find('.toggle-icon').toggleClass('bg-down-arrow bg-up-arrow');
$(this).parents('.display-table').next('.toggle-item-row').slideToggle();
//alert( text  );

return false;
});

if (($(".login-section").hasClass("register_product"))||($(".login-section").hasClass("update_product_status"))||($(".login-section").hasClass("iot-form"))) {
var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', autosize);

function autosize(){
        var el = this;
        setTimeout(function(){
        el.style.cssText = 'height:auto; padding:0';
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
        },0);
}
}


/*update product status*/
if ($(".login-section").hasClass("update_product_status")) {
      var file1 = document.querySelector("#upload-media");
      var file2 = document.querySelector("#upload-iot");
      function readURL(input) 
      {
      var file1_ext = file1.files[0].name;
      var file1_ext_result = file1_ext.split('.');
      var file1_ext_final_result = file1_ext_result[1];
         if(file1_ext_final_result == 'pdf'){
          $("#replace_img_1").attr("src","common/images/pdf-icon.png");
          $("#replace_img_1").attr("width","100");
          }
if((file1_ext_final_result == 'txt')||(file1_ext_final_result == 'docx') || (file1_ext_final_result == 'doc')) {
         $("#replace_img_1").attr("src","common/images/doc-icon.png");
          $("#replace_img_1").attr("width","100");
          }
          if((file1_ext_final_result == 'csv') || (file1_ext_final_result == 'xls')|| (file1_ext_final_result == 'xlsx')) {
           $("#replace_img_1").attr("src","common/images/xls-icon.png");
          $("#replace_img_1").attr("width","100");
          }          

      if ( /\.(jpe?g|png|gif)$/i.test(file1.files[0].name) === false ) {
      // alert("not an image!");
      } else{
                if (input.files && input.files[0]) 
                {
                    var reader = new FileReader();
                    reader.onload = function (e) 
                    {
                      $('#replace_img_1').attr('src', e.target.result);
                    }
                    reader.readAsDataURL(input.files[0]);
                }
             }
      }
      $("#upload-media").change(function(){
      readURL(this);
      });
      function readURL1(input) {
      if ( /\.(pdf|docx|txt)$/i.test(file2.files[0].name) === false ) {
      //alert("not an doc file!");
      }
      var file1_ext = file2.files[0].name;
      var file1_ext_result = file1_ext.split('.');
      var file1_ext_final_result = file1_ext_result[1];
         if(file1_ext_final_result == 'pdf'){
          $("#replace_img_2").attr("src","common/images/pdf-icon.png");
          $("#replace_img_2").attr("width","100");
          }
if((file1_ext_final_result == 'txt')||(file1_ext_final_result == 'docx') || (file1_ext_final_result == 'doc')) {
         $("#replace_img_2").attr("src","common/images/doc-icon.png");
          $("#replace_img_2").attr("width","100");
          }
          if((file1_ext_final_result == 'csv') || (file1_ext_final_result == 'xls')|| (file1_ext_final_result == 'xlsx')) {
           $("#replace_img_2").attr("src","common/images/xls-icon.png");
          $("#replace_img_2").attr("width","100");
          }       
    if ( /\.(jpe?g|png|gif)$/i.test(file2.files[0].name) === false ) {    
    
    } else{  
              if (input.files && input.files[0]) 
              {
                  var reader = new FileReader();
                  reader.onload = function (e) {
                  $('#replace_img_2').attr('src', e.target.result);
                  }
                  reader.readAsDataURL(input.files[0]);

                }
          }
      }
      $("#upload-iot").change(function(){
      readURL1(this);
      });
      const uploadmedia1 = document.getElementById('upload-media');
      const fileChosen1 = document.getElementById('upload-1');
      uploadmedia1.addEventListener('change', function(){
      fileChosen1.textContent = this.files[0].name
      })
      const uploadmedia2 = document.getElementById('upload-iot');
      const fileChosen2 = document.getElementById('upload-2');
      uploadmedia2.addEventListener('change', function(){
      fileChosen2.textContent = this.files[0].name
      })
}
if ($(".login-section").hasClass("register_product")) {
    /* register product */
 var file1 = document.querySelector("#upload");

      function readURL(input) 
      {
      var file1_ext = file1.files[0].name;
      var file1_ext_result = file1_ext.split('.');
      var file1_ext_final_result = file1_ext_result[1];
         if(file1_ext_final_result == 'pdf'){
          $("#replace_img_1").attr("src","common/images/pdf-icon.png");
          $("#replace_img_1").attr("width","100");
          }
         if((file1_ext_final_result == 'txt')||(file1_ext_final_result == 'docx') || (file1_ext_final_result == 'doc')) {
         $("#replace_img_1").attr("src","common/images/doc-icon.png");
          $("#replace_img_1").attr("width","100");
          }
          if((file1_ext_final_result == 'csv') || (file1_ext_final_result == 'xls')|| (file1_ext_final_result == 'xlsx')) {
           $("#replace_img_1").attr("src","common/images/xls-icon.png");
          $("#replace_img_1").attr("width","100");
          }          

      if ( /\.(jpe?g|png|gif)$/i.test(file1.files[0].name) === false ) {
      // alert("not an image!");
      } else{
                if (input.files && input.files[0]) 
                {
                    var reader = new FileReader();
                    reader.onload = function (e) 
                    {
                      $('#replace_img_1').attr('src', e.target.result);
                    }
                    reader.readAsDataURL(input.files[0]);
                }
             }
      }
      $("#upload").change(function(){
      readURL(this);
      });

    const uploadmedia3 = document.getElementById('upload');
    const fileChosen3 = document.getElementById('file-ext');
    uploadmedia3.addEventListener('change', function(){
    console.log(this.files[0].name);
    fileChosen3.textContent = this.files[0].name;
  
        })


    const uploadmedia4 = document.getElementById('upload-box');
    const fileChosen4 = document.getElementById('upload_data');
    uploadmedia4.addEventListener('change', function(){
    console.log(this.files[0].name);
    $('#upload_data').val(this.files[0].name);
        })
}

if ($(".myprofile_img_section").hasClass("text-center")) {


function readURL(input) {
        if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                        $('.myprofile_img_section  figure img').attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
        }
    }
    $("input:file").change(function(){
            readURL(this);
    });

}

});