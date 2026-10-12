/* This joke form is intentionally local-only: no endpoint, storage or requests. */
(function () {
  'use strict';
  var form = document.getElementById('void-form');
  var button = document.getElementById('void-send');
  var feedback = document.getElementById('void-feedback');
  if (form && button && feedback) {
    form.addEventListener('submit', function (event) { event.preventDefault(); });
    button.disabled = false;
    button.addEventListener('click', function () {
      if (form.reportValidity()) {
        feedback.textContent = '虛空已讀不回。訊息未寄出。';
      }
    });
  }
}());
