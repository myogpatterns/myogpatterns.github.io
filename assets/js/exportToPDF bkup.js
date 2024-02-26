/* Exports a single page PDF from given pattern generator dimensions. 2024 @LearnMYOG
    Dependencies:
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/canvg/3.0.0/canvg.min.js"></script>
*/
function exportToPDFCircle(diameterInput) {
    const { jsPDF } = window.jspdf;
    const inchesToPixels = 300; // 300 ppi resolution
    const sa = 3 / 8;

    // Convert diameter from inches to pixels
    let isMetric = getIsMetric();

    const { diameterInInches } = isMetric ?
        { diameterInInches: parseFloat(diameterInput / 2.54).toFixed(2) } :
        { diameterInInches: diameterInput };
    
    const diameterInPixels = diameterInInches * inchesToPixels;

    // Set canvas size to fit the circle and labels with 1/2 inch margin
    const marginInches = 1 / 2;
    const marginInPixels = marginInches * inchesToPixels;
    const canvasWidth = diameterInPixels + 2 * marginInPixels;
    const canvasHeight = diameterInPixels + 2 * marginInPixels;
    const canvas = document.createElement('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Draw the circles on the canvas...
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const outerRadius = diameterInPixels / 2 + (sa * inchesToPixels);
    const innerRadius = diameterInPixels / 2;
    ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff'; // White fill
    ctx.strokeStyle = '#000'; // Black stroke
    ctx.lineWidth = 8;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'none'; // No fill
    ctx.strokeStyle = '#000'; // Black stroke
    ctx.lineWidth = 4;
    ctx.setLineDash([20, 20]); // Dashed stroke
    ctx.stroke();
    ctx.closePath();

    // Calculate label font size based on the diameter
    const minFontSize = 48;
    const maxFontSize = 72;
    const fontSize = minFontSize + (maxFontSize - minFontSize) * (diameterInPixels / 2400); // Scale font size based on diameter

    // Add labels...
    const labelFontSize = fontSize;
    const subLabelFontSize = fontSize * 2 / 3; // 2/3 of label font size
    ctx.font = `${labelFontSize}px Sans, Arial`;
    ctx.fillStyle = '#000'; // Black color
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Bottom Panel', centerX, centerY);

    ctx.font = `${subLabelFontSize}px Sans,Arial`;
    ctx.fillText('3/8 inch (1cm) S/A included', centerX, centerY + labelFontSize / 1.5);

    ctx.fillText(`Input Diameter: ${diameterInInches} inches`, centerX, centerY + labelFontSize / 1.5 + subLabelFontSize);
    ctx.fillText(`Print at 100% Scale`, centerX, centerY + labelFontSize / 1.5 + subLabelFontSize * 2);

    // Calculate scale factor for PDF page size
    const scale = 1 / inchesToPixels;

    // Create a new jsPDF instance with adjusted page size
    const pdf = new jsPDF({
        unit: 'in',
        format: [canvasWidth * scale, canvasHeight * scale] // Adjusted page size
    });

    // Add the canvas as an image to the PDF with adjusted dimensions
    pdf.addImage(canvas.toDataURL(), 'PNG', 0, 0, canvasWidth * scale, canvasHeight * scale);

    // Save PDF
    pdf.save('circle.pdf');
}
