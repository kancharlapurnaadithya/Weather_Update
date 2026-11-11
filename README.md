# India Weather Update Application

A clean, responsive, and accurate real-time Weather Update Application built exclusively using **HTML5**, **CSS3**, and **JavaScript** (Fetch API), specifically calibrated for all 28 States and 8 Union Territories of India.

---

## Features

1. **Accurate Indian State & City Coverage**:
   - Built-in coordinates database for Indian states and capitals/major cities (Andhra Pradesh, Telangana, Maharashtra, Karnataka, Tamil Nadu, Delhi, Gujarat, Uttar Pradesh, West Bengal, Kerala, Rajasthan, Bihar, Punjab, etc.).
   - Interactive **Select Indian State / Major City** dropdown grouped by state.
   - Search by state name (e.g. `Andhra Pradesh`, `Telangana`) or city name (e.g. `Hyderabad`, `Vijayawada`, `Visakhapatnam`, `Mumbai`, `Bengaluru`).

2. **India-Filtered Geocoding**:
   - All search queries outside the predefined list are automatically restricted to India (`country_code=IN`), eliminating ambiguous international results.

3. **Current Weather Information in Indian Standard Time (IST)**:
   - Location display with city and state name (e.g., `Hyderabad, Telangana` or `Vijayawada, Andhra Pradesh`).
   - Current temperature in Celsius (°C).
   - Real-time weather condition (Clear Sky, Haze / Fog, Partly Cloudy, Rain, Thunderstorm).
   - Official weather icon.
   - Feels-like temperature (°C).
   - Daily Minimum and Maximum temperatures (°C).
   - Humidity percentage (%) and Wind speed (m/s).
   - Live Indian Standard Time (IST) date and time display.

4. **Current Location (GPS)**:
   - **My Location** button retrieves device coordinates and reverse geocodes to the exact Indian city and state.

5. **Technology Stack**:
   - **HTML5**: Clean, accessible semantic card markup.
   - **CSS3**: Responsive glassmorphic design with adaptive atmospheric gradient backgrounds.
   - **JavaScript**: Pure vanilla JS with the modern Fetch API (no frameworks or extra languages).
