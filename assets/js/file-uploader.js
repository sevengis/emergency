'use strict';
/*****************************************************
 ** file-uploader.js
 ** 
 ** Javascript for File Uploader.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {

  /*********************
   * Image with preview
   *********************/
  $("#input-ficons-3").fileinput({
    uploadUrl: "/file-upload-batch/2",
    previewFileIcon: '<i class="fa fa-file"></i>',
    allowedPreviewTypes: ['image', 'text'], /* allow only preview of image & text files */
    previewFileIconSettings: {
      'docx': '<i class="fa fa-file-word-o text-primary"></i>',
      'xlsx': '<i class="fa fa-file-excel-o text-success"></i>',
      'pptx': '<i class="fa fa-file-powerpoint-o text-danger"></i>',
      'pdf': '<i class="fa fa-file-pdf-o text-danger"></i>',
      'zip': '<i class="fa fa-file-archive-o text-muted"></i>',
    }
  });

  /**************************
   * Maximum image dimension
   **************************/
  $("#input-dim-2").fileinput({
    uploadUrl: "/file-upload-batch/2",
    allowedFileExtensions: ["jpg", "png", "gif"],
    maxImageWidth: 250,
    maxImageHeight: 250
  });

  /***************************************************************
   * Bootstrap fileinput with image files for selection & preview
   ***************************************************************/
  $("#input-21").fileinput({
    previewFileType: "image",
    browseClass: "btn btn-success",
    browseLabel: "Pick Image",
    browseIcon: "<i class=\"glyphicon glyphicon-picture\"></i> ",
    removeClass: "btn btn-danger",
    removeLabel: "Delete",
    removeIcon: "<i class=\"glyphicon glyphicon-trash\"></i> ",
    uploadClass: "btn btn-info",
    uploadLabel: "Upload",
    uploadIcon: "<i class=\"glyphicon glyphicon-upload\"></i> "
  });
});