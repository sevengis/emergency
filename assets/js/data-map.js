'use strict';
/*****************************************************
 ** data-map.js
 ** 
 ** Javascript for Data Map Config.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {
  setTimeout(function(){

    /****************
     * Basic Datamap
     ****************/
    var basicDatamaps = new Datamap({
      element: document.getElementById('basic-datamaps'),
      responsive: true,
      fills: {
        defaultFill: '#DBDAD6'
      },
      geographyConfig: {
        highlightFillColor: '#909190',
        highlightBorderColor: '#909190',
      }
    });

    /********************************
     * Datamap with selected regions
     ********************************/
    var selectedDatamaps = new Datamap({
      element: document.getElementById('selected-datamaps'),
      responsive: true,
      fills: {
        'USA': '#ed174c',
        'RUS': '#ed174c',
        'IND': '#ed174c',
        defaultFill: '#DBDAD6'
      },
      geographyConfig: {
        highlightFillColor: '#909190',
        highlightBorderColor: '#909190'
      },
      data: {
        'USA': {fillKey: 'USA'},
        'RUS': {fillKey: 'RUS'},
        'IND': {fillKey: 'IND'}
      }
    });

    /**************
     * Custom Scope
     **************/
    var usaScope = new Datamap({
      element: document.getElementById('usa-scope'),
      responsive: true,
      scope: 'usa',
      fills: {
        defaultFill: '#DBDAD6'
      },
      geographyConfig: {
        highlightFillColor: '#ed174c',
        highlightBorderColor: '#ed174c'
      }
    });

    /*******************
     * Datamap with Arcs
     *******************/
    var arcMap = new Datamap({
      element: document.getElementById('arc-datamaps'),
      responsive: true,
      fills: {
        'CAN': '#ed174c',
        'IND': '#909190',
        'RUS': '#909190',
        'CHN': '#909190',
        'JAP': '#909190',
        'SAU': '#909190',
        'BRA': '#909190',
        defaultFill: '#DBDAD6'
      },
      geographyConfig: {
        highlightFillColor: '#909190',
        highlightBorderColor: '#909190'
      },
      data: {
        'CAN': {fillKey: 'CAN'},
        'IND': {fillKey: 'IND'},
        'RUS': {fillKey: 'RUS'},
        'CHN': {fillKey: 'CHN'},
        'JAP': {fillKey: 'JAP'},
        'SAU': {fillKey: 'SAU'},
        'BRA': {fillKey: 'BRA'},
      },
      arcConfig: {
      strokeColor: '#DD1C77',
      strokeWidth: 1,
      arcSharpness: 1,
      animationSpeed: 600,
      popupOnHover: false,
      popupTemplate: function(geography, data) { 
          if((data.origin && data.destination ) && data.origin.latitude && data.origin.longitude && data.destination.latitude && data.destination.longitude) {
            return '<div class="hoverinfo"><strong>Arc</strong><br>Origin: ' + JSON.stringify(data.origin) + '<br>Destination: ' + JSON.stringify(data.destination) + '</div>';
          }
          else if(data.origin && data.destination) {
            return '<div class="hoverinfo"><strong>Arc</strong><br>' + data.origin + ' -> ' + data.destination + '</div>';
          }
          else {
            return '';
          }
        }
      }
    });

    arcMap.arc(
    [
      { origin: 'CAN', destination: 'IND'},
      { origin: 'CAN', destination: 'RUS'},
      { origin: 'CAN', destination: 'CHN'},
      { origin: 'CAN', destination: 'JAP'},
      { origin: 'CAN', destination: 'SAU'},
      { origin: 'CAN', destination: 'BRA'}
    ],  { strokeColor: '#ED174C', strokeWidth: 1});
  }, 1000);
});