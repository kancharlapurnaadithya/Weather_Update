/**
 * India Weather Update Application - JavaScript
 * -------------------------------------------------------------
 * Clean, lightweight vanilla JavaScript designed specifically for
 * Indian States, Union Territories, and Cities.
 *
 * Guarantees accurate real-time meteorological data across India using
 * Indian Standard Time (IST) and India-filtered geocoding.
 */

// =============================================================================
// 1. Comprehensive Indian States & Major Cities Coordinates Database
// =============================================================================

const INDIA_LOCATIONS = [
  // Andhra Pradesh
  { state: 'Andhra Pradesh', city: 'Amaravati (Capital)', lat: 16.5131, lon: 80.5165, aliases: ['amaravati', 'andhra pradesh', 'andhra'] },
  { state: 'Andhra Pradesh', city: 'Visakhapatnam', lat: 17.6868, lon: 83.2185, aliases: ['visakhapatnam', 'vizag'] },
  { state: 'Andhra Pradesh', city: 'Vijayawada', lat: 16.5062, lon: 80.6480, aliases: ['vijayawada', 'bezawada'] },
  { state: 'Andhra Pradesh', city: 'Guntur', lat: 16.3067, lon: 80.4365, aliases: ['guntur'] },
  { state: 'Andhra Pradesh', city: 'Tirupati', lat: 13.6288, lon: 79.4192, aliases: ['tirupati'] },
  { state: 'Andhra Pradesh', city: 'Kurnool', lat: 15.8281, lon: 78.0373, aliases: ['kurnool'] },
  { state: 'Andhra Pradesh', city: 'Nellore', lat: 14.4426, lon: 79.9865, aliases: ['nellore'] },
  { state: 'Andhra Pradesh', city: 'Rajahmundry', lat: 17.0005, lon: 81.8040, aliases: ['rajahmundry', 'rajamahendravaram'] },
  { state: 'Andhra Pradesh', city: 'Kakinada', lat: 16.9891, lon: 82.2475, aliases: ['kakinada'] },
  { state: 'Andhra Pradesh', city: 'Anantapur', lat: 14.6819, lon: 77.6006, aliases: ['anantapur'] },
  { state: 'Andhra Pradesh', city: 'Kadapa', lat: 14.4673, lon: 78.8242, aliases: ['kadapa', 'cuddapah'] },

  // Telangana
  { state: 'Telangana', city: 'Hyderabad (Capital)', lat: 17.3850, lon: 78.4867, aliases: ['hyderabad', 'telangana'] },
  { state: 'Telangana', city: 'Warangal', lat: 17.9689, lon: 79.5941, aliases: ['warangal'] },
  { state: 'Telangana', city: 'Nizamabad', lat: 18.6725, lon: 78.0941, aliases: ['nizamabad'] },
  { state: 'Telangana', city: 'Karimnagar', lat: 18.4386, lon: 79.1288, aliases: ['karimnagar'] },
  { state: 'Telangana', city: 'Khammam', lat: 17.2473, lon: 80.1514, aliases: ['khammam'] },
  { state: 'Telangana', city: 'Ramagundam', lat: 18.7610, lon: 79.4750, aliases: ['ramagundam'] },

  // Maharashtra
  { state: 'Maharashtra', city: 'Mumbai (Capital)', lat: 19.0760, lon: 72.8777, aliases: ['mumbai', 'bombay', 'maharashtra'] },
  { state: 'Maharashtra', city: 'Pune', lat: 18.5204, lon: 73.8567, aliases: ['pune', 'poona'] },
  { state: 'Maharashtra', city: 'Nagpur', lat: 21.1458, lon: 79.0882, aliases: ['nagpur'] },
  { state: 'Maharashtra', city: 'Nashik', lat: 19.9975, lon: 73.7898, aliases: ['nashik', 'nasik'] },
  { state: 'Maharashtra', city: 'Aurangabad (Chhatrapati Sambhajinagar)', lat: 19.8762, lon: 75.3433, aliases: ['aurangabad', 'sambhajinagar'] },
  { state: 'Maharashtra', city: 'Thane', lat: 19.2183, lon: 72.9781, aliases: ['thane'] },

  // Karnataka
  { state: 'Karnataka', city: 'Bengaluru (Capital)', lat: 12.9716, lon: 77.5946, aliases: ['bengaluru', 'bangalore', 'karnataka'] },
  { state: 'Karnataka', city: 'Mysuru', lat: 12.2958, lon: 76.6394, aliases: ['mysuru', 'mysore'] },
  { state: 'Karnataka', city: 'Hubballi', lat: 15.3647, lon: 75.1240, aliases: ['hubballi', 'hubli'] },
  { state: 'Karnataka', city: 'Mangaluru', lat: 12.9141, lon: 74.8560, aliases: ['mangaluru', 'mangalore'] },
  { state: 'Karnataka', city: 'Belagavi', lat: 15.8497, lon: 74.4977, aliases: ['belagavi', 'belgaum'] },

  // Tamil Nadu
  { state: 'Tamil Nadu', city: 'Chennai (Capital)', lat: 13.0827, lon: 80.2707, aliases: ['chennai', 'madras', 'tamil nadu'] },
  { state: 'Tamil Nadu', city: 'Coimbatore', lat: 11.0168, lon: 76.9558, aliases: ['coimbatore'] },
  { state: 'Tamil Nadu', city: 'Madurai', lat: 9.9252, lon: 78.1198, aliases: ['madurai'] },
  { state: 'Tamil Nadu', city: 'Tiruchirappalli', lat: 10.7905, lon: 78.7047, aliases: ['tiruchirappalli', 'trichy'] },
  { state: 'Tamil Nadu', city: 'Salem', lat: 11.6643, lon: 78.1460, aliases: ['salem'] },

  // Delhi (NCT)
  { state: 'Delhi (NCT)', city: 'New Delhi (Capital)', lat: 28.6139, lon: 77.2090, aliases: ['delhi', 'new delhi', 'ncr'] },

  // Gujarat
  { state: 'Gujarat', city: 'Gandhinagar (Capital)', lat: 23.2156, lon: 72.6369, aliases: ['gandhinagar', 'gujarat'] },
  { state: 'Gujarat', city: 'Ahmedabad', lat: 23.0225, lon: 72.5714, aliases: ['ahmedabad'] },
  { state: 'Gujarat', city: 'Surat', lat: 21.1702, lon: 72.8311, aliases: ['surat'] },
  { state: 'Gujarat', city: 'Vadodara', lat: 22.3072, lon: 73.1812, aliases: ['vadodara', 'baroda'] },
  { state: 'Gujarat', city: 'Rajkot', lat: 22.3039, lon: 70.8022, aliases: ['rajkot'] },

  // Uttar Pradesh
  { state: 'Uttar Pradesh', city: 'Lucknow (Capital)', lat: 26.8467, lon: 80.9462, aliases: ['lucknow', 'uttar pradesh', 'up'] },
  { state: 'Uttar Pradesh', city: 'Kanpur', lat: 26.4499, lon: 80.3319, aliases: ['kanpur'] },
  { state: 'Uttar Pradesh', city: 'Varanasi', lat: 25.3176, lon: 82.9739, aliases: ['varanasi', 'banaras', 'kashi'] },
  { state: 'Uttar Pradesh', city: 'Agra', lat: 27.1767, lon: 78.0081, aliases: ['agra'] },
  { state: 'Uttar Pradesh', city: 'Prayagraj', lat: 25.4358, lon: 81.8463, aliases: ['prayagraj', 'allahabad'] },
  { state: 'Uttar Pradesh', city: 'Noida', lat: 28.5355, lon: 77.3910, aliases: ['noida'] },

  // West Bengal
  { state: 'West Bengal', city: 'Kolkata (Capital)', lat: 22.5726, lon: 88.3639, aliases: ['kolkata', 'calcutta', 'west bengal'] },
  { state: 'West Bengal', city: 'Howrah', lat: 22.5958, lon: 88.2636, aliases: ['howrah'] },
  { state: 'West Bengal', city: 'Darjeeling', lat: 27.0410, lon: 88.2663, aliases: ['darjeeling'] },
  { state: 'West Bengal', city: 'Siliguri', lat: 26.7271, lon: 88.3953, aliases: ['siliguri'] },

  // Rajasthan
  { state: 'Rajasthan', city: 'Jaipur (Capital)', lat: 26.9124, lon: 75.7873, aliases: ['jaipur', 'rajasthan'] },
  { state: 'Rajasthan', city: 'Jodhpur', lat: 26.2389, lon: 73.0243, aliases: ['jodhpur'] },
  { state: 'Rajasthan', city: 'Udaipur', lat: 24.5854, lon: 73.7125, aliases: ['udaipur'] },
  { state: 'Rajasthan', city: 'Kota', lat: 25.2138, lon: 75.8648, aliases: ['kota'] },

  // Kerala
  { state: 'Kerala', city: 'Thiruvananthapuram (Capital)', lat: 8.5241, lon: 76.9366, aliases: ['thiruvananthapuram', 'trivandrum', 'kerala'] },
  { state: 'Kerala', city: 'Kochi', lat: 9.9312, lon: 76.2673, aliases: ['kochi', 'cochin'] },
  { state: 'Kerala', city: 'Kozhikode', lat: 11.2588, lon: 75.7804, aliases: ['kozhikode', 'calicut'] },

  // Madhya Pradesh
  { state: 'Madhya Pradesh', city: 'Bhopal (Capital)', lat: 23.2599, lon: 77.4126, aliases: ['bhopal', 'madhya pradesh', 'mp'] },
  { state: 'Madhya Pradesh', city: 'Indore', lat: 22.7196, lon: 75.8577, aliases: ['indore'] },
  { state: 'Madhya Pradesh', city: 'Gwalior', lat: 26.2183, lon: 78.1828, aliases: ['gwalior'] },

  // Bihar
  { state: 'Bihar', city: 'Patna (Capital)', lat: 25.5941, lon: 85.1376, aliases: ['patna', 'bihar'] },
  { state: 'Bihar', city: 'Gaya', lat: 24.7914, lon: 85.0002, aliases: ['gaya'] },

  // Punjab & Haryana
  { state: 'Punjab', city: 'Chandigarh (Capital)', lat: 30.7333, lon: 76.7794, aliases: ['chandigarh', 'punjab'] },
  { state: 'Punjab', city: 'Amritsar', lat: 31.6340, lon: 74.8723, aliases: ['amritsar'] },
  { state: 'Punjab', city: 'Ludhiana', lat: 30.9010, lon: 75.8573, aliases: ['ludhiana'] },
  { state: 'Haryana', city: 'Gurugram', lat: 28.4595, lon: 77.0266, aliases: ['gurugram', 'gurgaon', 'haryana'] },

  // Odisha
  { state: 'Odisha', city: 'Bhubaneswar (Capital)', lat: 20.2961, lon: 85.8245, aliases: ['bhubaneswar', 'odisha', 'orissa'] },
  { state: 'Odisha', city: 'Cuttack', lat: 20.4625, lon: 85.8828, aliases: ['cuttack'] },
  { state: 'Odisha', city: 'Puri', lat: 19.8135, lon: 85.8312, aliases: ['puri'] },

  // Assam & North East
  { state: 'Assam', city: 'Guwahati / Dispur (Capital)', lat: 26.1445, lon: 91.7362, aliases: ['guwahati', 'dispur', 'assam'] },
  { state: 'Sikkim', city: 'Gangtok (Capital)', lat: 27.3389, lon: 88.6065, aliases: ['gangtok', 'sikkim'] },
  { state: 'Tripura', city: 'Agartala (Capital)', lat: 23.8315, lon: 91.2868, aliases: ['agartala', 'tripura'] },
  { state: 'Meghalaya', city: 'Shillong (Capital)', lat: 25.5788, lon: 91.8933, aliases: ['shillong', 'meghalaya'] },
  { state: 'Manipur', city: 'Imphal (Capital)', lat: 24.8170, lon: 93.9368, aliases: ['imphal', 'manipur'] },
  { state: 'Nagaland', city: 'Kohima (Capital)', lat: 25.6751, lon: 94.1086, aliases: ['kohima', 'nagaland'] },
  { state: 'Mizoram', city: 'Aizawl (Capital)', lat: 23.7271, lon: 92.7176, aliases: ['aizawl', 'mizoram'] },
  { state: 'Arunachal Pradesh', city: 'Itanagar (Capital)', lat: 27.0844, lon: 93.6053, aliases: ['itanagar', 'arunachal pradesh'] },

  // Other States & UTs
  { state: 'Goa', city: 'Panaji (Capital)', lat: 15.4909, lon: 73.8278, aliases: ['panaji', 'panjim', 'goa'] },
  { state: 'Jharkhand', city: 'Ranchi (Capital)', lat: 23.3441, lon: 85.3096, aliases: ['ranchi', 'jharkhand'] },
  { state: 'Chhattisgarh', city: 'Raipur (Capital)', lat: 21.2514, lon: 81.6296, aliases: ['raipur', 'chhattisgarh'] },
  { state: 'Uttarakhand', city: 'Dehradun (Capital)', lat: 30.3165, lon: 78.0322, aliases: ['dehradun', 'uttarakhand'] },
  { state: 'Himachal Pradesh', city: 'Shimla (Capital)', lat: 31.1048, lon: 77.1734, aliases: ['shimla', 'himachal pradesh'] },
  { state: 'Jammu and Kashmir', city: 'Srinagar (Capital)', lat: 34.0837, lon: 74.7973, aliases: ['srinagar', 'kashmir', 'jammu and kashmir'] },
  { state: 'Jammu and Kashmir', city: 'Jammu', lat: 32.7266, lon: 74.8570, aliases: ['jammu'] },
  { state: 'Ladakh', city: 'Leh (Capital)', lat: 34.1526, lon: 77.5771, aliases: ['leh', 'ladakh'] },
  { state: 'Puducherry', city: 'Puducherry', lat: 11.9416, lon: 79.8083, aliases: ['puducherry', 'pondicherry'] },
  { state: 'Andaman & Nicobar', city: 'Port Blair', lat: 11.6234, lon: 92.7265, aliases: ['port blair', 'andaman'] },
];

// =============================================================================
// 2. Configuration & State
// =============================================================================

let openWeatherApiKey = localStorage.getItem('openweather_api_key') || '';

// =============================================================================
// 3. DOM Elements
// =============================================================================

const stateCitySelect = document.getElementById('stateCitySelect');
const searchForm = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const locationBtn = document.getElementById('locationBtn');
const errorBanner = document.getElementById('errorBanner');
const errorMessage = document.getElementById('errorMessage');
const loadingIndicator = document.getElementById('loadingIndicator');

// Weather fields
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weatherCondition');
const cityName = document.getElementById('cityName');
const currentTime = document.getElementById('currentTime');
const tempMin = document.getElementById('tempMin');
const tempMax = document.getElementById('tempMax');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

// API Key UI
const apiKeyToggleBtn = document.getElementById('apiKeyToggleBtn');
const apiKeySection = document.getElementById('apiKeySection');
const apiKeyInput = document.getElementById('apiKeyInput');
const saveApiKeyBtn = document.getElementById('saveApiKeyBtn');

// Quick City Buttons
const quickChipBtns = document.querySelectorAll('.chip-btn');

// =============================================================================
// 4. Initialization
// =============================================================================

function initializeApp() {
  populateStateDropdown();
  setupEventListeners();

  // Load Hyderabad, Telangana by default as initial view
  const defaultLocation = INDIA_LOCATIONS.find((l) => l.city.includes('Hyderabad')) || INDIA_LOCATIONS[0];
  loadWeatherForLocation(defaultLocation);
}

/**
 * Populate Indian States & Cities Dropdown grouped by state
 */
function populateStateDropdown() {
  if (!stateCitySelect) return;

  // Group locations by Indian State
  const stateGroups = {};
  INDIA_LOCATIONS.forEach((loc, index) => {
    if (!stateGroups[loc.state]) {
      stateGroups[loc.state] = [];
    }
    stateGroups[loc.state].push({ ...loc, index });
  });

  Object.keys(stateGroups).sort().forEach((stateName) => {
    const optgroup = document.createElement('optgroup');
    optgroup.label = stateName;

    stateGroups[stateName].forEach((loc) => {
      const option = document.createElement('option');
      option.value = loc.index;
      option.textContent = `${loc.city}, ${loc.state}`;
      optgroup.appendChild(option);
    });

    stateCitySelect.appendChild(optgroup);
  });
}

function setupEventListeners() {
  // Dropdown selection change
  stateCitySelect.addEventListener('change', (e) => {
    const selectedIdx = parseInt(e.target.value, 10);
    if (!isNaN(selectedIdx) && INDIA_LOCATIONS[selectedIdx]) {
      loadWeatherForLocation(INDIA_LOCATIONS[selectedIdx]);
    }
  });

  // Search form submit
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = cityInput.value.trim();
    if (query) {
      handleIndiaSearch(query);
    }
  });

  // Geolocation button
  locationBtn.addEventListener('click', handleCurrentLocation);

  // Quick Chips
  quickChipBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetCity = btn.dataset.city;
      cityInput.value = targetCity;
      handleIndiaSearch(targetCity);
    });
  });

  // API Key section toggles
  apiKeyToggleBtn.addEventListener('click', () => {
    apiKeySection.classList.toggle('hidden');
    if (!apiKeySection.classList.contains('hidden') && openWeatherApiKey) {
      apiKeyInput.value = openWeatherApiKey;
    }
  });

  saveApiKeyBtn.addEventListener('click', () => {
    openWeatherApiKey = apiKeyInput.value.trim();
    localStorage.setItem('openweather_api_key', openWeatherApiKey);
    apiKeySection.classList.add('hidden');
    showError('API Key saved! Fetching real-time weather...', false);

    // Refresh current location
    const currentText = cityName.textContent.split(',')[0].trim();
    handleIndiaSearch(currentText || 'Hyderabad');
  });
}

// =============================================================================
// 5. Intelligent India-Focused Search
// =============================================================================

function handleIndiaSearch(query) {
  const normalized = query.toLowerCase().trim();

  // 1. Check exact match in India database
  const matched = INDIA_LOCATIONS.find((loc) => {
    if (loc.city.toLowerCase().includes(normalized)) return true;
    if (loc.state.toLowerCase() === normalized) return true;
    return loc.aliases && loc.aliases.some((alias) => alias === normalized || alias.includes(normalized));
  });

  if (matched) {
    loadWeatherForLocation(matched);
    return;
  }

  // 2. If not in predefined list, geocode strictly inside India (country_code=IN)
  fetchWeatherForCustomIndianPlace(query);
}

/**
 * Geocode any Indian city/town/village using strict India country boundaries
 */
async function fetchWeatherForCustomIndianPlace(placeName) {
  showLoading(true);
  hideError();

  try {
    // Open-Meteo geocoding restricted to country_code=IN (India)
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(placeName)}&count=1&language=en&format=json&country_code=IN`;
    const res = await fetch(geoUrl);
    if (!res.ok) throw new Error('Network error while locating Indian city.');

    const data = await res.json();
    if (!data.results || data.results.length === 0) {
      throw new Error(`"${placeName}" not found in India. Please verify spelling or select from the dropdown above.`);
    }

    const place = data.results[0];
    const resolvedState = place.admin1 || place.admin2 || 'India';

    const locationObj = {
      city: place.name,
      state: resolvedState,
      lat: place.latitude,
      lon: place.longitude,
    };

    await loadWeatherForLocation(locationObj);
  } catch (err) {
    showError(err.message || 'Unable to fetch weather. Please try again.');
  } finally {
    showLoading(false);
  }
}

// =============================================================================
// 6. Accurate Weather Fetching & Rendering
// =============================================================================

async function loadWeatherForLocation(location) {
  showLoading(true);
  hideError();

  try {
    // If an OpenWeather API key is provided, use OpenWeather by coordinates
    if (openWeatherApiKey && openWeatherApiKey.trim() !== '') {
      const owmUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${openWeatherApiKey}`;
      const response = await fetch(owmUrl);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid OpenWeather API Key. Please verify key or leave empty for free live data.');
        } else {
          throw new Error('OpenWeather API error. Switching to live feed...');
        }
      }

      const data = await response.json();
      displayOpenWeatherData(data, location);
    } else {
      // Pinpoint accurate real-time meteorological API with Asia/Kolkata timezone
      await fetchAccurateIndianWeather(location);
    }
  } catch (err) {
    console.warn('Weather fetch warning:', err);
    // If OpenWeather fails, fallback seamlessly to direct live feed
    try {
      await fetchAccurateIndianWeather(location);
    } catch (fallbackErr) {
      showError(fallbackErr.message || 'Error connecting to weather service.');
    }
  } finally {
    showLoading(false);
  }
}

/**
 * Fetch weather configured with Asia/Kolkata (IST) timezone
 */
async function fetchAccurateIndianWeather(location) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FKolkata`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Unable to retrieve weather data from meteorological service.');
  }

  const data = await response.json();
  const current = data.current;
  const isDay = current.is_day === 1;
  const conditionMeta = mapIndianWeatherCode(current.weather_code, isDay);

  displayWeatherData({
    displayName: `${location.city}, ${location.state}`,
    temp: Math.round(current.temperature_2m),
    condition: conditionMeta.text,
    icon: conditionMeta.icon,
    feelsLike: Math.round(current.apparent_temperature),
    tempMin: Math.round(data.daily.temperature_2m_min[0]),
    tempMax: Math.round(data.daily.temperature_2m_max[0]),
    humidity: Math.round(current.relative_humidity_2m),
    windSpeed: (current.wind_speed_10m / 3.6).toFixed(1), // m/s
    time: getIndianStandardTime(),
  });
}

function displayOpenWeatherData(data, location) {
  const weather = data.weather[0] || {};
  displayWeatherData({
    displayName: `${location.city}, ${location.state}`,
    temp: Math.round(data.main.temp),
    condition: weather.main || 'Clear',
    icon: weather.icon || '01d',
    feelsLike: Math.round(data.main.feels_like),
    tempMin: Math.round(data.main.temp_min),
    tempMax: Math.round(data.main.temp_max),
    humidity: data.main.humidity,
    windSpeed: data.wind.speed.toFixed(1),
    time: getIndianStandardTime(),
  });
}

/**
 * Update UI Elements with verified weather data
 */
function displayWeatherData(info) {
  cityName.textContent = info.displayName;
  temperature.textContent = info.temp;
  weatherCondition.textContent = info.condition;
  feelsLike.textContent = `${info.feelsLike}°C`;
  tempMin.textContent = `${info.tempMin}°C`;
  tempMax.textContent = `${info.tempMax}°C`;
  humidity.textContent = `${info.humidity}%`;
  windSpeed.textContent = `${info.windSpeed} m/s`;
  currentTime.textContent = info.time;

  // Weather icon
  weatherIcon.src = `https://openweathermap.org/img/wn/${info.icon}@2x.png`;
  weatherIcon.alt = info.condition;

  // Background theme gradient
  updateBackgroundTheme(info.condition);
}

// =============================================================================
// 7. Browser Geolocation (Current Location in India)
// =============================================================================

function handleCurrentLocation() {
  if (!navigator.geolocation) {
    showError('Geolocation is not supported by your browser.');
    return;
  }

  showLoading(true);
  hideError();

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Reverse geocode to find Indian city and state
      try {
        const revUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
        const res = await fetch(revUrl);
        let detectedCity = 'Current Location';
        let detectedState = 'India';

        if (res.ok) {
          const revData = await res.json();
          const addr = revData.address || {};
          detectedCity = addr.city || addr.town || addr.village || addr.suburb || 'Local Region';
          detectedState = addr.state || 'India';
        }

        await loadWeatherForLocation({
          city: detectedCity,
          state: detectedState,
          lat: lat,
          lon: lon,
        });
      } catch {
        // Fallback with raw coordinates
        await loadWeatherForLocation({
          city: 'My Location',
          state: 'India',
          lat: lat,
          lon: lon,
        });
      }
    },
    (err) => {
      showLoading(false);
      if (err.code === err.PERMISSION_DENIED) {
        showError('Location access was denied. You can select your state or city from the dropdown above.');
      } else {
        showError('Unable to detect current location. Please select your Indian state/city manually.');
      }
    },
    { timeout: 8000 }
  );
}

// =============================================================================
// 8. Helper Functions
// =============================================================================

function getIndianStandardTime() {
  const options = {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  return `${new Intl.DateTimeFormat('en-IN', options).format(new Date())} IST`;
}

function updateBackgroundTheme(condition) {
  const cond = condition.toLowerCase();
  document.body.className = '';

  if (cond.includes('thunder') || cond.includes('storm')) {
    document.body.classList.add('theme-thunderstorm');
  } else if (cond.includes('rain') || cond.includes('drizzle')) {
    document.body.classList.add('theme-rain');
  } else if (cond.includes('snow')) {
    document.body.classList.add('theme-snow');
  } else if (cond.includes('haze') || cond.includes('fog') || cond.includes('mist') || cond.includes('smoke')) {
    document.body.classList.add('theme-haze');
  } else if (cond.includes('cloud')) {
    document.body.classList.add('theme-clouds');
  } else if (cond.includes('clear') || cond.includes('sun')) {
    document.body.classList.add('theme-clear');
  } else {
    document.body.classList.add('theme-default');
  }
}

function showLoading(isLoading) {
  loadingIndicator.classList.toggle('hidden', !isLoading);
  searchBtn.disabled = isLoading;
}

function showError(msg, isError = true) {
  errorMessage.textContent = msg;
  errorBanner.classList.remove('hidden');
  if (!isError) {
    errorBanner.style.background = 'rgba(56, 189, 248, 0.2)';
    errorBanner.style.borderColor = 'rgba(56, 189, 248, 0.4)';
    errorBanner.style.color = '#bae6fd';
  } else {
    errorBanner.style.background = 'rgba(239, 68, 68, 0.2)';
    errorBanner.style.borderColor = 'rgba(239, 68, 68, 0.4)';
    errorBanner.style.color = '#fca5a5';
  }
}

function hideError() {
  errorBanner.classList.add('hidden');
}

/**
 * Accurate WMO Weather Code to Condition mapping
 */
function mapIndianWeatherCode(code, isDay) {
  const s = isDay ? 'd' : 'n';
  if (code === 0) return { text: 'Clear Sky', icon: `01${s}` };
  if (code === 1) return { text: 'Mainly Clear', icon: `02${s}` };
  if (code === 2) return { text: 'Partly Cloudy', icon: `02${s}` };
  if (code === 3) return { text: 'Overcast', icon: `04${s}` };
  if (code === 45 || code === 48) return { text: 'Haze / Fog', icon: `50${s}` };
  if (code >= 51 && code <= 55) return { text: 'Drizzle', icon: `09${s}` };
  if (code >= 61 && code <= 65) return { text: 'Rain', icon: `10${s}` };
  if (code >= 71 && code <= 77) return { text: 'Snow', icon: `13${s}` };
  if (code >= 80 && code <= 82) return { text: 'Rain Showers', icon: `09${s}` };
  if (code >= 95) return { text: 'Thunderstorm', icon: `11${s}` };
  return { text: 'Scattered Clouds', icon: `03${s}` };
}

// Initialize on DOM Ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
