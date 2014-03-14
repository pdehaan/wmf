/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/*global define*/

define([
  'views/base',
  'stache!templates/location',
  'views/play_sound',
  'lib/modal_manager'
], function (BaseView, LocationTemplate, PlaySoundView, ModalManager) {
  'use strict';

  var LocationView = BaseView.extend({
    template: LocationTemplate,

    events: {
      'click span.play-sound': 'playSound',
      'click span.lost-mode': 'lostMode',
      'click span.erase': 'erase'
    },

    playSound: function(event) {
      ModalManager.push(new PlaySoundView());
    },

    lostMode: function(event) {
      alert("LOSING THE DEVICE");
    },

    erase: function(event) {
      alert("ERASING THE DEVICE");
    },

    afterInsert: function() {
      // Setup the map
      var map = L.mapbox.map('map', 'nchapman.hejm93ej', { zoomControl: false });

      // Position zoom controls
      new L.Control.Zoom({ position: 'topright' }).addTo(map);
    }
  });

  return LocationView;
});
