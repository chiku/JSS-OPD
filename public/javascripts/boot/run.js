jQuery(function() {
  var selectors = Application.Configuration.Selectors;
  var mainContainer = jQuery(selectors.main);
  jQuery('<section>', { 'id': selectors.appointments.replace('#', '')}).appendTo(mainContainer);
  jQuery('<section>', { 'id': selectors.patient.replace('#', '')}).appendTo(mainContainer);

  Application.initialize();
});
