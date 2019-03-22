function ajaxCall() {

  var howManyWord = prompt("Da quante frasi deve essere composta la parola?")
  var finalWords = ""

  for (var i = 0; i < howManyWord; i++) {

    $.ajax ({

      url: "https://www.boolean.careers/api/random/word",
      method: "GET",
      success: function(data, state) {

        if (data.success) {

          finalWords += data.response + " "

          wordGenerator(finalWords)
        }
      }, error: function(request, state, error) {

        alert("L'indirizzo del server è errato")
      }
    })
  }
}

function wordGenerator(finalWords) {

  var data = {

    words: finalWords
  }

  var template = $("#template").html();
  var compiled = Handlebars.compile(template);
  var finalHTML = compiled(data)

  $(".container").append(finalHTML)
}

function init() {

  ajaxCall();
}

$(document).ready(init)
