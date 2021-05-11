$(function() { 
    $("#btnSave").click(function() { 
        html2canvas($("#imgGenerator"), {
            onrendered: function(canvas) {
                theCanvas = canvas;
                document.body.appendChild(canvas);
                canvas.toBlob(function(blob) {
					saveAs(blob, "logo.png"); 
				});
            }
        });
    });
  
  
}); 


$( ".question li a" ).click(function() {
  var itemNum = $(this).attr("data-question");
  console.log(itemNum);
  if(itemNum == "num1"){
    $(".boxGenerate").attr("data-icon","num1");
    $("i").removeClass().addClass("fa fa-bath");
  }
  else if(itemNum == "num2"){
    $(".boxGenerate").attr("data-icon","num2");
    $("i").removeClass().addClass("fa fa-bicycle ");
    
  }
  else if(itemNum == "num3"){
    $(".boxGenerate").attr("data-icon","num3");
    $("i").removeClass().addClass("fa fa-camera ");
  }
  else if(itemNum == "num4"){
    $(".boxGenerate").attr("data-icon","num4");
    $("i").removeClass().addClass("fa fa-compass ");
  }
  else if(itemNum == "num5"){
    $(".boxGenerate").attr("data-icon","num5");
    $("i").removeClass().addClass("fa fa-headphones");
  }
  else if(itemNum == "num6"){
    $(".boxGenerate").attr("data-icon","num6");
    $("i").removeClass().addClass("fa fa-book");
  }
  else if(itemNum == "num7"){
    $(".boxGenerate").attr("data-icon","num7");
    $("i").removeClass().addClass("fa fa-battery-half");
  }
  else if(itemNum == "num8"){
    $(".boxGenerate").attr("data-icon","num8");
    $("i").removeClass().addClass("fa fa-bell-o");
  }
  else if(itemNum == "num9"){
    $(".boxGenerate").attr("data-icon","num9");
    $("i").removeClass().addClass("fa fa-cube");
  }
});


var app= angular.module("app",[ ]);