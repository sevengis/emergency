'use strict';
/***************************************************************
 ** form-advance-element.js
 ** 
 ** Javascript Config for Form Elements like iCheck, InputMast,
 ** Select2, Selectize etc..
 ** Developer: Ranpariya - The Development Lab - India
 ***************************************************************/
$(document).ready(function(){
  setTimeout(function() {

    /*******************
     * Minimal checkbox
     *******************/
    $('.minimal input').iCheck({
      checkboxClass: 'icheckbox_minimal',
      radioClass: 'iradio_minimal'
    });

    /******************
     * Square checkbox
     ******************/
    $('.square input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue'
    });

    /****************
     * Flat checkbox
     ****************/
    $('.flat input').iCheck({
      checkboxClass: 'icheckbox_flat-red',
      radioClass: 'iradio_flat-red'
    });

    /****************
     * Line checkbox
     ****************/
    $('.line input').each(function(){
      var self = $(this),
      label = self.next(),
      label_text = label.text();

      label.remove();
        self.iCheck({
        checkboxClass: 'icheckbox_line-blue',
        radioClass: 'iradio_line-blue',
        insert: '<div class="icheck_line-icon"></div>' + label_text
      });
    });

    /*************
     * Input mask
     *************/
    $('#isbn .inputmask').inputmask({ mask: '999-99-999-9999-9' });
    $('#date .inputmask').inputmask({ mask: '99/99/9999' });
    $('#phone .inputmask').inputmask({ mask: '(999)999-9999' });
    $('#currency .inputmask').inputmask({ mask: '$ 999,999,999.99' });
    $('#sna .inputmask').inputmask({ mask: 'aa99-9999-99' });
    $('#ipv4 .inputmask').inputmask({ mask: '999.999.999.9' });
    $('#ipv6 .inputmask').inputmask({ mask: '****:****:****:****:****:****:****:****' });

    /**********
     * Select2
     **********/
    var selectTO = function(){
      $(".basic").select2();
      $(".multiple").select2();
      $(".multiple-placeholder").select2({
        placeholder: "Select any Items"
      });
    };
    var selectToResize;

    $(window).resize(function(e) {
      clearTimeout(selectToResize);
      selectToResize = setTimeout(selectTO, 100);
    });

    selectTO();

    /************
     * Selectize
     ************/
    var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
      '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';
    $('#selectize-mail').selectize({
      persist: false,
      maxItems: null,
      valueField: 'email',
      labelField: 'name',
      searchField: ['name', 'email'],
      render: {
        item: function(item, escape) {
          return '<div>' +
            (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
          '</div>';
        },
        option: function(item, escape) {
          var label = item.name || item.email,
            caption = item.name ? item.email : null;
          return '<div class="email-list">' +
            '<div class="label">' + escape(label) + '</div>' +
            (caption ? '<div class="caption">' + escape(caption) + '</div>' : '') +
            '</div>';
        }
      },
      createFilter: function(input) {
        var match, regex;
        regex = new RegExp('^' + REGEX_EMAIL + '$', 'i');
        match = input.match(regex);
        if(match) return !this.options.hasOwnProperty(match[0]);
      },
      create: function(input) {
        if((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
          return {email: input};
        }
        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
        if(match) {
          return {
            email : match[2],
            name  : $.trim(match[1])
          };
        }
        return false;
      }
    });

    /***********************
     * Date And Time Picker
     ***********************/
    $('#datetimepicker1').datetimepicker();
    $('#datetimepicker2').datetimepicker({ format: 'LT' });
    $('input[name="daterange"]').daterangepicker({
      timePicker: true,
      timePickerIncrement: 30,
      locale: {
        format: 'MM/DD/YYYY h:mm A'
      }
    });

    /*******************************
     * DateRange picker with option
     *******************************/
    var start = moment().subtract(29, 'days'),
      end = moment();
    function cb(start, end) {
      $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }
    $('#reportrange').daterangepicker({
      startDate: start,
      endDate: end,
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      }
    }, cb);
    cb(start, end);

    /*******
     * Knob
     *******/
    $(".knob-simple").knob();

    /***************
     * Color picker
     ***************/
    $('#cp1').colorpicker();

    /**************
     * Clockpicker
     **************/
    $('.clockpicker').clockpicker({
      donetext: 'Done'
    });

    /*******************************
     * jQuery Complexify (Password)
     *******************************/
    $('#password-complexify #password').complexify({}, function (valid, complexity) {
      var progressBar = $('#password-complexify #passeword-complexity-bar');

      progressBar.toggleClass('progress-bar-success', valid);
      progressBar.toggleClass('progress-bar-danger', !valid);
      progressBar.css({'width': complexity + '%'});

      $('#password-complexify .password-complexity').text(Math.round(complexity) + '%');
    });
  }, 1000);
});