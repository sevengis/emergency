'use strict';
/*****************************************************
 ** lobi-panel.js
 ** 
 ** Javascript for Logi Panel Config
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {

  /****************
   * Basic Example
   ****************/
  $('.basic-example').lobiPanel();

  /**************************
   * Disable control buttons
   **************************/
  $('.disable-control').lobiPanel({
    reload: false,
    close: false,
    editTitle: false
  });

  /*************************
   * Use font awesome icons
   *************************/
  $('.font-awesome-icon').lobiPanel({
    reload: {
      icon: 'fa fa-refresh'
    },
    editTitle: {
      icon: 'fa fa-edit',
      icon2: 'fa fa-save'
    },
    unpin: {
      icon: 'fa fa-arrows'
    },
    minimize: {
      icon: 'fa fa-chevron-up',
      icon2: 'fa fa-chevron-down'
    },
    close: {
      icon: 'fa fa-times-circle'
    },
    expand: {
      icon: 'fa fa-expand',
      icon2: 'fa fa-compress'
    }
  });

  /***********************
   * Constrain panel size
   ***********************/
  $('.lobipanel-constrain-size').lobiPanel({
    minWidth: 300,
    minHeight: 300,
    maxWidth: 600,
    maxHeight: 480
  });
});