jQuery(function() {
  var mainContainer = jQuery('body div[role="main"]');
  jQuery('<section>', { 'id': Application.Configuration.Selectors.viaId.patients}).appendTo(mainContainer);
  jQuery('<section>', { 'id': Application.Configuration.Selectors.viaId.patientDetails}).appendTo(mainContainer);

  Application.initialize();
});

