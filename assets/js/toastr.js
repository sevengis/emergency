'use strict';
/******************************************************
 ** toastr.js
 ** 
 ** Javascript for Toastr Messages.
 ** Developer: Ranpariya - The Development Lab - India
 ******************************************************/
$(function () {

  /*****************
   * icheck Checkbox
   *****************/
  $('.square input').iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue'
  });

  var i = -1,
    toastCount = 0,
    $toastlast;

  var getTitle = function () {
    var title = ['Your Title is'];
    i++;
    if(i === title.length) {
      i = 0;
    }
    return title[i];
  };

  /**************
   * Clear Button
   **************/
  var getTitleWithClearButton = function (title) {
    title = title ? title : 'Clear itself?';
    title += '<br /><br /><button type="button" class="btn btn-default clear">Yes</button>';
    return title;
  };
  var getMessage = function () {
    var msgs = ['Hello Place enter your message here'];
    i++;
    if(i === msgs.length) {
      i = 0;
    }
    return msgs[i];
  };
  var getMessageWithClearButton = function (msg) {
    msg = msg ? msg : 'Clear itself?';
    msg += '<br /><br /><button type="button" class="btn btn-default clear">Yes</button>';
    return msg;
  };

  /*************
   * Show Toastr
   *************/
  $('#showtoast').on("click", function(){
    var shortCutFunction = $("#toastTypeGroup input:radio:checked").val(),
      msg = $('#message').val(),
      title = $('#title').val() || '',
      $showDuration = $('#showDuration'),
      $hideDuration = $('#hideDuration'),
      $timeOut = $('#timeOut'),
      $extendedTimeOut = $('#extendedTimeOut'),
      $showEasing = $('#showEasing'),
      $hideEasing = $('#hideEasing'),
      $showMethod = $('#showMethod'),
      $hideMethod = $('#hideMethod'),
      toastIndex = toastCount++,
      addClear = $('#addClear').prop('checked');

    toastr.options = {
      closeButton: $('#closeButton').prop('checked'),
      debug: $('#debugInfo').prop('checked'),
      newestOnTop: $('#newestOnTop').prop('checked'),
      progressBar: $('#progressBar').prop('checked'),
      positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',
      preventDuplicates: $('#preventDuplicates').prop('checked'),
      onclick: null
    };
    if($('#addBehaviorOnToastClick').prop('checked')) {
      toastr.options.onclick = function () {
        alert('You can perform some custom action after a toast goes away');
      };
    }
    if($showDuration.val().length) {
      toastr.options.showDuration = $showDuration.val();
    }
    if($hideDuration.val().length) {
      toastr.options.hideDuration = $hideDuration.val();
    }
    if($timeOut.val().length) {
      toastr.options.timeOut = addClear ? 0 : $timeOut.val();
    }
    if($extendedTimeOut.val().length) {
      toastr.options.extendedTimeOut = addClear ? 0 : $extendedTimeOut.val();
    }
    if($showEasing.val().length) {
      toastr.options.showEasing = $showEasing.val();
    }
    if($hideEasing.val().length) {
      toastr.options.hideEasing = $hideEasing.val();
    }
    if($showMethod.val().length) {
      toastr.options.showMethod = $showMethod.val();
    }
    if($hideMethod.val().length) {
      toastr.options.hideMethod = $hideMethod.val();
    }
    if(addClear) {
      msg = getMessageWithClearButton(msg);
      toastr.options.tapToDismiss = false;
    }
    if(!msg) {
      msg = getMessage();
    }
    if(!title) {
      title = getTitle();
    }
    $('#toastrOptions').text('Command: toastr["'
      + shortCutFunction
      + '"]("'
      + msg
      + (title ? '", "' + title : '')
      + '")\n\ntoastr.options = '
      + JSON.stringify(toastr.options, null, 2)
    );
    var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
    $toastlast = $toast;
    if(typeof $toast === 'undefined') {
      return;
    }
    if($toast.find('#okBtn').length) {
      $toast.delegate('#okBtn', 'click', function () {
        alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
        $toast.remove();
      });
    }
    if($toast.find('#surpriseBtn').length) {
      $toast.delegate('#surpriseBtn', 'click', function () {
        alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
      });
    }
    if($toast.find('.clear').length) {
      $toast.delegate('.clear', 'click', function () {
        toastr.clear($toast, { force: true });
      });
    }
  });

  /*****************
   * Get Last Toastr
   *****************/
  function getLastToast(){
    return $toastlast;
  }

  /*******************
   * Clear Last Toastr
   *******************/
  $('#clearlasttoast').on("click", function(){
    toastr.clear(getLastToast());
  });

  /******************
   * Clear All Toastr
   ******************/
  $('#cleartoasts').on("click", function(){
    toastr.clear();
  });
})