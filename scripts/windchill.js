// Wind Chill Calculator
function calculateWindChill(temperature, windSpeed) {
    // Check if conditions are met for wind chill calculation
    if (temperature <= 10 && windSpeed > 4.8) {
      // Wind chill formula for Celsius
      return (
        13.12 +
        0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16)
      )
    }
    return "N/A"
  }
  
  // Update wind chill on page load
  document.addEventListener("DOMContentLoaded", () => {
    const temperature = Number.parseFloat(document.getElementById("temperature").textContent)
    const windSpeed = Number.parseFloat(document.getElementById("wind-speed").textContent)
  
    const windChill = calculateWindChill(temperature, windSpeed)
    const windChillDisplay = typeof windChill === "number" ? windChill.toFixed(1) + "°C" : windChill
    document.getElementById("wind-chill").textContent = windChillDisplay
  
    // Update copyright year
    document.getElementById("year").textContent = new Date().getFullYear()
  
    // Update last modified date
    document.getElementById("lastModified").textContent = document.lastModified
  })
  
  