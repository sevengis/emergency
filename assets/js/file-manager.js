'use strict';
/*****************************************************
 ** file-manager.js
 ** 
 ** Javascript for File Manager Page.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {
  setTimeout(function() {

    /*******************
     * File menu height
     *******************/
    function setFileMenuHeight() {
      var fileMenuHeight = $(".file-breadcrumb").height() + $(".file-view").height();
      if($(document).width() <= 767) {
        fileMenuHeight = fileMenuHeight + 10;
      }
      $(".file-menu").height(fileMenuHeight);
    }
    setFileMenuHeight();
    function fileMenuToggle() {
      if($(document).width() <= 767) {
        $(".file-block").addClass("file-menu-close");
      } else {
        $(".file-block").removeClass("file-menu-close");
      }
    }
    fileMenuToggle();
    $(window).resize(function() {
      setTimeout(function() {
        fileMenuToggle();
        setFileMenuHeight();
      }, 100);
    });

    /*******************
     * Toggle file menu
     *******************/
    $('.toggle-file-menu').on("click", function(){
      $(".file-block").toggleClass("file-menu-close");
    });
  }, 1000);

  var _file = ".file-view .folder .file",
    _fileType = $(".file-view .folder .file .file-type i.fa"),
    _selectedFile = $(".file-view .folder .file .selected-file"),
    newFileSelect = null,
    data = [
      {
        text: "&nbsp;&nbsp;My drive",
        icon: "fa fa-hdd-o",
        nodes: [
          { text: "&nbsp;&nbsp;Music", icon: "fa fa-music" },
          { text: "&nbsp;&nbsp;Video", icon: "fa fa-video-camera" },
          { text: "&nbsp;&nbsp;Image", icon: "fa fa-picture-o" },
          { text: "&nbsp;&nbsp;Text", icon: "fa fa-file-text" },
          { text: "&nbsp;&nbsp;Untitle folder", icon: "fa fa-folder" },
          { text: "&nbsp;&nbsp;Untitle folder", icon: "fa fa-folder" }
        ]
      },
      { text: "&nbsp;&nbsp;Share", icon: "fa fa-share-alt-square" },
      { text: "&nbsp;&nbsp;Recent", icon: "fa fa-clock-o" },
      { text: "&nbsp;&nbsp;Star", icon: "fa fa-star" },
      { text: "&nbsp;&nbsp;Trash", icon: "fa fa-trash" }
    ];

  /********************************
   * New file / folder create menu
   ********************************/
  $.contextMenu({
    selector: '.new-file-btn',
    trigger: 'left', 
    callback: function(key, options) {
      newFileSelect = key;
    },
    items: {
      "folder": {name: "Folder", icon: "fa-folder"},
      "file-upload": {name: "File Upload", icon: "fa-file"},
      "more": {name: "File upload", icon: "fa-file"},
      "sep1": "---------",
      "more": {
        "name": "More", 
        "items": {
          "pdf": {name: "Pdf", icon: "fa-file-pdf-o"},
          "word": {name: "Word", icon: "fa-file-word-o"}
        }
      }
    }
  });

  /*********************************
   * Folder & File Right click menu
   *********************************/
  $.contextMenu({
    selector: '.file-view .file',
    trigger: 'right', 
    callback: function(key, options) {
    },
    items: {
      "open": {name: "Open", icon: "fa-eye"},
      "sep2": "---------",
      "share": {name: "Share...", icon: "fa-share-alt-square"},
      "move-to": {name: "Move to...", icon: "fa-scissors"},
      "copy-to": {name: "Copy to...", icon: "fa-files-o"},
      "star": {name: "Add star", icon: "fa-star"},
      "rename": {name: "Rename...", icon: "fa-pencil-square-o"},
      "sep2": "---------",
      "view-detail": {name: "View detail", icon: "fa-info-circle"},
      "download": {name: "Download", icon: "fa-download"},
      "sep3": "---------",
      "remove": {name: "Remove", icon: "fa-trash-o"}
    }
  });

  /***************
   * File options
   ***************/
  $.contextMenu({
    selector: '#file-option',
    trigger: 'left', 
    callback: function(key, options) {
      if(key === "select-all") {
        $(".file-view .doc .file").addClass("active");
        $(_file).addClass("active");
      }
    },
    items: {
      "select-all": {name: "Select all", icon: "fa-check-square-o"},
      "sep1": "---------",
      "share": {name: "Share...", icon: "fa-share-alt-square"},
      "move-to": {name: "Move to...", icon: "fa-scissors"},
      "copy-to": {name: "Copy to...", icon: "fa-files-o"},
      "star": {name: "Add star", icon: "fa-star"},
      "rename": {name: "Rename...", icon: "fa-pencil-square-o"},
      "sep2": "---------",
      "view-detail": {name: "View detail", icon: "fa-info-circle"},
      "download": {name: "Download", icon: "fa-download"},
      "sep3": "---------",
      "remove": {name: "Remove", icon: "fa-trash-o"}
    }
  });

  /****************
   * File Treeview
   ****************/
  $('#file-treeview').treeview({
    expandIcon: 'fa fa-angle-right margin-r',
    collapseIcon: 'fa fa-angle-down',
    data: data,
    state: {
      checked: true,
      disabled: true,
      expanded: true,
      selected: true
    }
  });

  /****************
   * Select Folder
   ****************/
  $('body').on("click", _file, function(event){
    if(event.ctrlKey) {
      $(this).toggleClass("active");
      $(this).find(".selected-file").toggleClass("show");
    } else {
      _fileType.removeClass("fa-folder-open").addClass("fa-folder");
      if($(this).hasClass("active")) {
        $(this).find(".file-type i.fa").removeClass("fa-folder").addClass("fa-folder-open");
      }
      $(".file-view .doc .file").removeClass("active");
      $(_file).removeClass("active");
      _selectedFile.removeClass("show");
      $(this).addClass("active");
      $(this).find(".selected-file").addClass("show");
    }
  });

  /**************
   * Select file
   **************/
  $('.file-view .doc .file').on("click", function(event){
    if(event.ctrlKey) {
      $(this).toggleClass("active");
    } else {
      _fileType.removeClass("fa-folder-open").addClass("fa-folder");
      $(_file).removeClass("active");
      _selectedFile.removeClass("show");
      $(".file-view .doc .file").removeClass("active");
      $(this).addClass("active");
    }
  });
});