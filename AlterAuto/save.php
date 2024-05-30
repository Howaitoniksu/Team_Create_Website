<?php
  // Get CSV content from POST request
  $csvContent = file_get_contents("php://input");

  // Write content to CSV file
  $file = fopen("testDrive.csv", "a"); // Open file in append mode
  fwrite($file, $csvContent); // Write content
  fclose($file); // Close file

  echo "OK"; // Send response to request
?>