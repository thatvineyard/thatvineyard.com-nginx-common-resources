function setErrorPage(errorCodeElementId, errorMessageElementId) {
  // Get the status code from the URL query parameter
  const params = new URLSearchParams(window.location.search);
  const statusCode = params.get('code') || 'Error';

  // Define error messages
  const messages = {
      '403': 'Access Denied. You don’t have permission to view this page.',
      '404': 'Oops! The page you are looking for doesn’t exist.',
      '500': 'Server Error. Something went wrong on our end.',
      '502': 'Bad Gateway. The server received an invalid response.',
      '503': 'Service Unavailable. Please try again later.',
      '504': 'Gateway Timeout. The server took too long to respond.'
  };

  // Update the page elements dynamically
  document.getElementById(errorCodeElementId).textContent = statusCode;
  document.getElementById(errorMessageElementId).textContent = messages[statusCode] || 'An unexpected error occurred.';
}
