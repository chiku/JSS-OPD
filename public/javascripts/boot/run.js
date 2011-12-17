jQuery(function() {
  var selectors = Application.Configuration.Selectors;
  var mainContainer = jQuery(selectors.main);
  jQuery('<section>', { 'id': selectors.patients.replace('#', '')}).appendTo(mainContainer);
  jQuery('<section>', { 'id': selectors.patientDetails.replace('#', '')}).appendTo(mainContainer);

  Application.initialize();
});
