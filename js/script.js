$(function () {

  var form = $("form");
  enableFastFeedback(form);

  function enableFastFeedback(formElement) {
    var nameInput = formElement.find("#name");
    var passwordInput = formElement.find("#password");
    var addressInput = formElement.find("#address");
    var checkboxInput = formElement.find("#checkbox");

    nameInput.blur(function(event){
      var name = $(this).val();
      validateName(name, event);

      if(!isValidName(name)) {
        $(this).css({
          "box-shadow" : "0 0 4px #811",
          "border" : "1px solid #600"
        });
      }
      else{
        $(this).css({
          "box-shadow" : "0 0 4px #181",
          "border" : "1px solid #060"
        });
      }
    });

    passwordInput.blur(function(event){
      var password = $(this).val();
      validatePassword(password, event);

      if(!isValidPassword(password)) {
        $(this).css({
          "box-shadow" : "0 0 4px #811",
          "border" : "1px solid #600"
        });
      }
      else{
        $(this).css({
          "box-shadow" : "0 0 4px #181",
          "border" : "1px solid #060"
        });
      }
    });

    addressInput.blur(function(event){
      var address = $(this).val();
      validateMessage(address, event);

      if(!isValidMessage(address)) {
        $(this).css({
          "box-shadow" : "0 0 4px #811",
          "border" : "1px solid #600"
        });
      }
      else{
        $(this).css({
          "box-shadow" : "0 0 4px #181",
          "border" : "1px solid #060"
        });
      }
    });

    checkboxInput.change(function(event){
      var isChecked = $(this).is(":checked");
      validateCheckboxField(isChecked, event);

      if(!isChecked) {
        $(this).add("label[for='checkbox']").css({
          "box-shadow" : "0 0 4px #811",
          "border" : "1px solid #600"
        });
      }
      else{
        $(this).add("label[for='checkbox']").css({
          "box-shadow" : "0 0 4px #181",
          "border" : "1px solid #060"
        });
      }
    });

  }

  form.submit(function(event){
    var name = $("#name").val();
    var password = $("#password").val();
    var address = $("#address").val();
    var checkbox = $("#checkbox").is(":checked");

    validateName(name, event);
    validatePassword(password, event);
    validateMessage(address, event);
    validateCheckboxField(checkbox, event);
  });

  function validateName(name, event){
    if(!isValidName(name)) {
      $("#name-feedback").text("Please enter a name of atleast three characters");
      event.preventDefault();
    }
    else{
      $("#name-feedback").text("");
    }
  }

  function isValidName(name) {
    return name.length >= 3;
  }

  function validatePassword(password, event) {
    if(!isValidPassword(password)) {
      $("#password-feedback").text("Please enter a password of atleast six characters and contain a number");
      event.preventDefault();
    }
    else{
      $("#password-feedback").text("");
    }
  }

  function isValidPassword(password) {
    return password.length >= 6 && /.*[0-9].*/.test(password);
  }

  function validateMessage(address, event) {
    if(!isValidMessage(address)) {
      $("#address-feedback").text("Please enter a address");
      event.preventDefault();
    }
    else{
      $("#address-feedback").text("");
    }
  }

  function isValidMessage(address) {
    return address.trim() != "";
  }

  function validateCheckboxField(isChecked, event) {
    if(!isChecked) {
      $("#checkbox-feedback").text("Please select the checkbox");
      event.preventDefault();
    }
    else{
      $("#checkbox-feedback").text("");
    }
  }

});