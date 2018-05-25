'use strict';
/*****************************************************
 ** sortble-list.js
 ** 
 ** Javascript for Sortable List.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function(){
  setTimeout(function() {

    /* Sortable Table */
    $('.sortable-table tbody').sortable({
      placeholderClass: 'table-sortable'
    });

    /* Sortable Image */
    $('.sortable-thumbnail').sortable({
      placeholderClass: 'col-sm-6 col-md-4 sortable-item'
    });

    /* Sortable List Group */
    $('.sortable-list-group').sortable({
      placeholderClass: 'list-group-item'
    });

    /* Sortable Connected List Group */
    $('.list-group-sortable-connected').sortable({
      placeholderClass: 'list-group-item',
      connectWith: '.connected'
    });

    /* Sortable List Group Exclude */
    $('.sortable-list-group-exclude').sortable({
      placeholderClass: 'list-group-item',
      items: ':not(.disabled)'
    });

    /* Sortable List Group Handles */
    $('.sortable-list-group-handles').sortable({
      placeholderClass: 'list-group-item',
      handle: 'span'
    });
  }, 1000);
});