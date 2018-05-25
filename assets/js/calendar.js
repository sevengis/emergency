'use strict';
/*******************************************************
 ** calendar.js
 ** 
 ** Javascript for Calendar Page.
 ** Developer: Ranpariya - The Development Lab - India
 *******************************************************/
$(document).ready(function() {
  setTimeout(function() {

    var date = new Date(),
      d = date.getDate(),
      m = date.getMonth(),
      y = date.getFullYear();

    /**********************
     * Drop event checkbox
     **********************/
    $('.icheckbox-drop input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue'
    });
    /*******************************
     * External events (Drag events)
     *******************************/
    $('.external-events .event-list').each(function() {
      $(this).data('event', {
        title: $.trim($(this).text()),
        stick: true
      });
      $(this).draggable({
        zIndex: 999,
        revert: true,
        revertDuration: 0
      });
    });

    /****************
     * View calendar
     ****************/
    $('#calendar').fullCalendar({
      height: 600,
      header: { left: '', center: '', right: '' },
      editable: true,
      droppable: true,
      drop: function() {
        if ($('#drop-remove').is(':checked')) {
          $(this).remove();
        }
      },

      /************************
       * Random default events
       ************************/
      events: [
        { title: 'Meeting',
          start: new Date(y, m, d, 10, 30),
          allDay: false,
          backgroundColor: "#0073b7", /* Blue */
          borderColor: "#0073b7" /* Blue */
        },
        {
          title: 'Lunch',
          start: new Date(y, m, d, 12, 0),
          end: new Date(y, m, d, 14, 0),
          allDay: false,
          backgroundColor: "#00c0ef", /* Info (aqua) */
          borderColor: "#00c0ef" /* Info (aqua) */
        },
        {
          title: 'Birthday Party',
          start: new Date(y, m, d + 1, 19, 0),
          end: new Date(y, m, d + 1, 22, 30),
          allDay: false,
          backgroundColor: "#00a65a", /* Success (green) */
          borderColor: "#00a65a" /* Success (green) */
        },
        {
          title: 'Click for Google',
          start: new Date(y, m, 28),
          end: new Date(y, m, 29),
          url: 'http://google.com/',
          backgroundColor: "#3c8dbc", /* Primary (light-blue) */
          borderColor: "#3c8dbc" /* Primary (light-blue) */
        }
      ]
    });

    /************
     * get title
     ************/
    function getTitle() {
      var view = $('#calendar').fullCalendar('getView');
      $('#data-title').html(view.title);
    }
    getTitle();

    /*********************
     * View previous date
     *********************/
    $('#date-pre').on("click", function(){
      $('#calendar').fullCalendar('prev');
      $('#today').attr('disabled', false);
      getTitle();
    });

    /*****************
     * View next date
     *****************/
    $('#date-next').on("click", function(){
      $('#calendar').fullCalendar('next');
      $('#today').attr('disabled', false);
      getTitle();
    });

    /******************
     * View today date
     ******************/
    $('#today').on("click", function(){
      $('#calendar').fullCalendar('today');
      $(this).attr('disabled', true);
      getTitle();
    });

    /**************
     * Views month
     **************/
    $('#month').on("click", function(){
      $('#calendar').fullCalendar('changeView', 'month');
      getTitle();
    });

    /*************
     * Views week
     *************/
    $('#week').on("click", function(){
      $('#calendar').fullCalendar('changeView', 'agendaWeek');
      getTitle();
    });

    /************
     * Views day
     ************/
    $('#day').on("click", function(){
      $('#calendar').fullCalendar('changeView', 'agendaDay');
      getTitle();
    });
  }, 1000);
});