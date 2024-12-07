// Function to calculate the total cost
function calculateTotalCost() {
    // Get input values
    const courseFee = parseFloat(document.getElementById('courseFee').value) || 0;
    const accommodation = parseFloat(document.getElementById('accommodation').value) || 0;
    const subsistence = parseFloat(document.getElementById('subsistence').value) || 0;
    const travel = parseFloat(document.getElementById('travel').value) || 0;
  
    // Calculate the total cost
    const totalCost = courseFee + accommodation + subsistence + travel;
  
    // Display the total cost
    document.getElementById('totalCost').value = totalCost.toFixed(2); // Round to 2 decimal places
  }
  
  document.getElementById('courseFee').addEventListener('input', calculateTotalCost);
  document.getElementById('accommodation').addEventListener('input', calculateTotalCost);
  document.getElementById('subsistence').addEventListener('input', calculateTotalCost);
  document.getElementById('travel').addEventListener('input', calculateTotalCost);
  