function(instance, properties) {
  // Get HTML content from properties, fallback to default if empty
  const htmlContent = properties['html-code'] || '&lt;HTML&gt;';
  const isEmpty = !properties['html-code'] || properties['html-code'].trim() === '';

  // Get custom styling from properties, merge with default styles
  const customStyling = properties['custom-styling'] || {};

  // Default styles - conditionally center content if HTML is empty
  const defaultStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    'background-color': '#f8f9fa',
    margin: '0',
    padding: '0',
    width: '100%',
    height: '100%',
    'min-height': '100%',
    display: 'flex',
    'justify-content': isEmpty ? 'center' : 'flex-start',
    'align-items': isEmpty ? 'center' : 'flex-start',
    'border-radius': '8px',
    border: '1px solid #e9ecef',
    'font-family': "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    'font-size': '14px',
    color: '#495057',
    'font-weight': '500',
    overflow: 'hidden',
    'box-sizing': 'border-box'
  };

  // Merge default styles with custom styling
  const mergedStyles = { ...defaultStyles, ...customStyling };
  
  // Convert styles object to CSS string
  const styleString = Object.entries(mergedStyles)
    .map(([key, value]) => `${key}: ${value}`)
    .join('; ');
  
  $(instance.canvas).append(`
    <div style="${styleString}">
      ${htmlContent}
    </div>
  `);
}
