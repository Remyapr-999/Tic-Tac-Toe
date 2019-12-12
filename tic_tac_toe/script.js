var number = 1;  //Setting mouseclick count

function mouseClicked(clicked) {

  // X can play only when the mouseclick is odd

  if(number%2 != 0)
  {
      var elem = document.getElementById(clicked);   //Getting currently ID of currently clicked button
      if(elem.value == " "){

      elem.value = "X";                             //Replacing value of button with X
      document.getElementById(clicked).style.color = "blue";
      if(document.getElementById("1").value=='X' && document.getElementById("2").value=='X' && document.getElementById("3").value=='X')
      {
        document.getElementById("1").style.border = "4px solid #00ff00";
        document.getElementById("2").style.border = "4px solid #00ff00";
        document.getElementById("3").style.border = "4px solid #00ff00";
        //Modal for x wins starts
        setTimeout(function() {
          var xmodal = document.getElementById("xmyModal");
          var xspan = document.getElementsByClassName("xclose")[0];
          xmodal.style.display = "block";
          xspan.onclick = function() {
          //xmodal.style.display = "none";
          document.location.reload();
          }
              window.onclick = function(event) {
              if (event.target == xmodal) {
                document.location.reload();
              }
            }
            //Modal for x wins ends
        }, 600);       //Alert to show the winner
      }
      else if(document.getElementById("1").value=='X' && document.getElementById("4").value=='X' && document.getElementById("7").value=='X')
      {
        document.getElementById("1").style.border = "4px solid #00ff00";
        document.getElementById("4").style.border = "4px solid #00ff00";
        document.getElementById("7").style.border = "4px solid #00ff00";
        //Modal for x wins starts
        setTimeout(function() {
          var xmodal = document.getElementById("xmyModal");
          var xspan = document.getElementsByClassName("xclose")[0];
          xmodal.style.display = "block";
          xspan.onclick = function() {
          //xmodal.style.display = "none";
          document.location.reload();
          }
              window.onclick = function(event) {
              if (event.target == xmodal) {
                document.location.reload();
              }
            }
            //Modal for x wins ends
        }, 600);       //Alert to show the winner
      }
      else if(document.getElementById("4").value=='X' && document.getElementById("5").value=='X' && document.getElementById("6").value=='X')
      {
        document.getElementById("4").style.border = "4px solid #00ff00";
        document.getElementById("5").style.border = "4px solid #00ff00";
        document.getElementById("6").style.border = "4px solid #00ff00";
        //Modal for x wins starts
        setTimeout(function() {
          var xmodal = document.getElementById("xmyModal");
          var xspan = document.getElementsByClassName("xclose")[0];
          xmodal.style.display = "block";
          xspan.onclick = function() {
          //xmodal.style.display = "none";
          document.location.reload();
          }
              window.onclick = function(event) {
              if (event.target == xmodal) {
                document.location.reload();
              }
            }
            //Modal for x wins ends
        }, 600);       //Alert to show the winner
      }
      else if(document.getElementById("7").value=='X' && document.getElementById("8").value=='X' && document.getElementById("9").value=='X')
      {
        document.getElementById("7").style.border = "4px solid #00ff00";
        document.getElementById("8").style.border = "4px solid #00ff00";
        document.getElementById("9").style.border = "4px solid #00ff00";
        //Modal for x wins starts
        setTimeout(function() {
          var xmodal = document.getElementById("xmyModal");
          var xspan = document.getElementsByClassName("xclose")[0];
          xmodal.style.display = "block";
          xspan.onclick = function() {
          //xmodal.style.display = "none";
          document.location.reload();
          }
              window.onclick = function(event) {
              if (event.target == xmodal) {
                document.location.reload();
              }
            }
            //Modal for x wins ends
        }, 600);       //Alert to show the winner
      }
      else if(document.getElementById("2").value=='X' && document.getElementById("5").value=='X' && document.getElementById("8").value=='X')
      {
        document.getElementById("2").style.border = "4px solid #00ff00";
        document.getElementById("5").style.border = "4px solid #00ff00";
        document.getElementById("8").style.border = "4px solid #00ff00";
        //Modal for x wins starts
        setTimeout(function() {
          var xmodal = document.getElementById("xmyModal");
          var xspan = document.getElementsByClassName("xclose")[0];
          xmodal.style.display = "block";
          xspan.onclick = function() {
          //xmodal.style.display = "none";
          document.location.reload();
          }
              window.onclick = function(event) {
              if (event.target == xmodal) {
                document.location.reload();
              }
            }
            //Modal for x wins ends
        }, 600);       //Alert to show the winner
      }
      else if(document.getElementById("3").value=='X' && document.getElementById("6").value=='X' && document.getElementById("9").value=='X')
      {
        document.getElementById("3").style.border = "4px solid #00ff00";
        document.getElementById("6").style.border = "4px solid #00ff00";
        document.getElementById("9").style.border = "4px solid #00ff00";
        //Modal for x wins starts
        setTimeout(function() {
          var xmodal = document.getElementById("xmyModal");
          var xspan = document.getElementsByClassName("xclose")[0];
          xmodal.style.display = "block";
          xspan.onclick = function() {
          //xmodal.style.display = "none";
          document.location.reload();
          }
              window.onclick = function(event) {
              if (event.target == xmodal) {
                document.location.reload();
              }
            }
            //Modal for x wins ends
        }, 600);       //Alert to show the winner
      }
      else if(document.getElementById("1").value=='X' && document.getElementById("5").value=='X' && document.getElementById("9").value=='X')
      {
        document.getElementById("1").style.border = "4px solid #00ff00";
        document.getElementById("5").style.border = "4px solid #00ff00";
        document.getElementById("9").style.border = "4px solid #00ff00";
        //Modal for x wins starts
        setTimeout(function() {
          var xmodal = document.getElementById("xmyModal");
          var xspan = document.getElementsByClassName("xclose")[0];
          xmodal.style.display = "block";
          xspan.onclick = function() {
          //xmodal.style.display = "none";
          document.location.reload();
          }
              window.onclick = function(event) {
              if (event.target == xmodal) {
                document.location.reload();
              }
            }
            //Modal for x wins ends
        }, 600);       //Alert to show the winner
      }
      else if(document.getElementById("3").value=='X' && document.getElementById("5").value=='X' && document.getElementById("7").value=='X')
      {
        document.getElementById("3").style.border = "4px solid #00ff00";
        document.getElementById("5").style.border = "4px solid #00ff00";
        document.getElementById("7").style.border = "4px solid #00ff00";
        //Modal for x wins starts
        setTimeout(function() {
          var xmodal = document.getElementById("xmyModal");
          var xspan = document.getElementsByClassName("xclose")[0];
          xmodal.style.display = "block";
          xspan.onclick = function() {
          //xmodal.style.display = "none";
          document.location.reload();
          }
              window.onclick = function(event) {
              if (event.target == xmodal) {
                document.location.reload();
              }
            }
            //Modal for x wins ends
        }, 600);       //Alert to show the winner
      }
      else {
        if(number==9)
          {
        var modal = document.getElementById("myModal");
        // Get the button that opens the modal
        //var btn = document.getElementById("myBtn");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function() {
        document.location.reload();
        }
        window.onclick = function(event) {
        if (event.target == modal) {
          document.location.reload();
        }
      }
    }
      /*  if(number==9)
        {
          document.getElementById("try").innerHTML = "GAME OVER..";           //All the turns over here
        }*/
      }
    }
}
else {
  // O can play only when the mouseclick is even
  var elem = document.getElementById(clicked);    //Getting currently ID of currently clicked button
  if(elem.value == " "){
  elem.value = "O";                               //Replacing value of button with O
  if(document.getElementById("1").value=='O' && document.getElementById("2").value=='O' && document.getElementById("3").value=='O')
  {
    document.getElementById("1").style.border = "4px solid #00ff00";
    document.getElementById("2").style.border = "4px solid #00ff00";
    document.getElementById("3").style.border = "4px solid #00ff00";
    //Modal for O wins starts
    setTimeout(function() {
      var omodal = document.getElementById("omyModal");
      var ospan = document.getElementsByClassName("oclose")[0];
      omodal.style.display = "block";
      ospan.onclick = function() {
      //xmodal.style.display = "none";
      document.location.reload();
      }
          window.onclick = function(event) {
          if (event.target == omodal) {
            document.location.reload();
          }
        }
        //Modal for O wins ends
    }, 600);       //Alert to show the winner
  }
  else if(document.getElementById("1").value=='O' && document.getElementById("4").value=='O' && document.getElementById("7").value=='O')
  {
    document.getElementById("1").style.border = "4px solid #00ff00";
    document.getElementById("4").style.border = "4px solid #00ff00";
    document.getElementById("7").style.border = "4px solid #00ff00";
    //Modal for O wins starts
    setTimeout(function() {
      var omodal = document.getElementById("omyModal");
      var ospan = document.getElementsByClassName("oclose")[0];
      omodal.style.display = "block";
      ospan.onclick = function() {
      //xmodal.style.display = "none";
      document.location.reload();
      }
          window.onclick = function(event) {
          if (event.target == omodal) {
            document.location.reload();
          }
        }
        //Modal for O wins ends
    }, 600);       //Alert to show the winner
  }
  else if(document.getElementById("4").value=='O' && document.getElementById("5").value=='O' && document.getElementById("6").value=='O')
  {
    document.getElementById("4").style.border = "4px solid #00ff00";
    document.getElementById("5").style.border = "4px solid #00ff00";
    document.getElementById("6").style.border = "4px solid #00ff00";
    //Modal for O wins starts
    setTimeout(function() {
      var omodal = document.getElementById("omyModal");
      var ospan = document.getElementsByClassName("oclose")[0];
      omodal.style.display = "block";
      ospan.onclick = function() {
      //xmodal.style.display = "none";
      document.location.reload();
      }
          window.onclick = function(event) {
          if (event.target == omodal) {
            document.location.reload();
          }
        }
        //Modal for O wins ends
    }, 600);       //Alert to show the winner
  }
  else if(document.getElementById("7").value=='O' && document.getElementById("8").value=='O' && document.getElementById("9").value=='O')
  {
    document.getElementById("7").style.border = "4px solid #00ff00";
    document.getElementById("8").style.border = "4px solid #00ff00";
    document.getElementById("9").style.border = "4px solid #00ff00";
    //Modal for O wins starts
    setTimeout(function() {
      var omodal = document.getElementById("omyModal");
      var ospan = document.getElementsByClassName("oclose")[0];
      omodal.style.display = "block";
      ospan.onclick = function() {
      //xmodal.style.display = "none";
      document.location.reload();
      }
          window.onclick = function(event) {
          if (event.target == omodal) {
            document.location.reload();
          }
        }
        //Modal for O wins ends
    }, 600);       //Alert to show the winner
  }
  else if(document.getElementById("2").value=='O' && document.getElementById("5").value=='O' && document.getElementById("8").value=='O')
  {
    document.getElementById("2").style.border = "4px solid #00ff00";
    document.getElementById("5").style.border = "4px solid #00ff00";
    document.getElementById("8").style.border = "4px solid #00ff00";
    //Modal for O wins starts
    setTimeout(function() {
      var omodal = document.getElementById("omyModal");
      var ospan = document.getElementsByClassName("oclose")[0];
      omodal.style.display = "block";
      ospan.onclick = function() {
      //xmodal.style.display = "none";
      document.location.reload();
      }
          window.onclick = function(event) {
          if (event.target == omodal) {
            document.location.reload();
          }
        }
        //Modal for O wins ends
    }, 600);       //Alert to show the winner
  }
  else if(document.getElementById("3").value=='O' && document.getElementById("6").value=='O' && document.getElementById("9").value=='O')
  {
    document.getElementById("3").style.border = "4px solid #00ff00";
    document.getElementById("6").style.border = "4px solid #00ff00";
    document.getElementById("9").style.border = "4px solid #00ff00";
    //Modal for O wins starts
    setTimeout(function() {
      var omodal = document.getElementById("omyModal");
      var ospan = document.getElementsByClassName("oclose")[0];
      omodal.style.display = "block";
      ospan.onclick = function() {
      //xmodal.style.display = "none";
      document.location.reload();
      }
          window.onclick = function(event) {
          if (event.target == omodal) {
            document.location.reload();
          }
        }
        //Modal for O wins ends
    }, 600);       //Alert to show the winner
  }
  else if(document.getElementById("1").value=='O' && document.getElementById("5").value=='O' && document.getElementById("9").value=='O')
  {
    document.getElementById("1").style.border = "4px solid #00ff00";
    document.getElementById("5").style.border = "4px solid #00ff00";
    document.getElementById("9").style.border = "4px solid #00ff00";
    //Modal for O wins starts
    setTimeout(function() {
      var omodal = document.getElementById("omyModal");
      var ospan = document.getElementsByClassName("oclose")[0];
      omodal.style.display = "block";
      ospan.onclick = function() {
      //xmodal.style.display = "none";
      document.location.reload();
      }
          window.onclick = function(event) {
          if (event.target == omodal) {
            document.location.reload();
          }
        }
        //Modal for O wins ends
    }, 600);       //Alert to show the winner
  }
  else if(document.getElementById("3").value=='O' && document.getElementById("5").value=='O' && document.getElementById("7").value=='O')
  {
    document.getElementById("3").style.border = "4px solid #00ff00";
    document.getElementById("5").style.border = "4px solid #00ff00";
    document.getElementById("7").style.border = "4px solid #00ff00";
    //Modal for O wins starts
    setTimeout(function() {
      var omodal = document.getElementById("omyModal");
      var ospan = document.getElementsByClassName("oclose")[0];
      omodal.style.display = "block";
      ospan.onclick = function() {
      //xmodal.style.display = "none";
      document.location.reload();
      }
          window.onclick = function(event) {
          if (event.target == omodal) {
            document.location.reload();
          }
        }
        //Modal for O wins ends
    }, 600);       //Alert to show the winner
  }
  else {
    if(number==9)
    {
      var modal = document.getElementById("myModal");
      // Get the button that opens the modal
      //var btn = document.getElementById("myBtn");
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
      modal.style.display = "block";
      span.onclick = function() {
      document.location.reload();
      }
      window.onclick = function(event) {
      if (event.target == modal) {
        document.location.reload();
      }
    }
               //All the turns over here
    }
  }
}
}
  number++;                                                                 //Taking count of every click
}
