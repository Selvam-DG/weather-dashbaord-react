
# Weather Dashboard - React
A modern weather dashboard built using React, Vite, and Tailwind CSS, which fetches real-time weather data using the Open-Meteo API. This app displays hourly and multi-day forecasts based on the user's location or a searched city.


## Features

- Current weather based on user’s geolocation (fallback to London)

- Hourly forecast for the current day

- 1–3 day forecast selection

- Search weather by city or coordinates

- Responsive design using Tailwind CSS

- No API key or registration required

- Built with React, Vite, and Open-Meteo API


## Live Demo

[Click to open live demo](https://weather-om.vercel.app/)



##  Project Structure
```
weather-dashboard-react/
├── weather-dashboard
|   ├── public/ # Static assets (optional)
|   ├── src/
|   │ ├── components/ # Reusable components (Navbar, SearchPanel, etc.)
|   │ ├── App.jsx # Main application component
|   │ ├── main.jsx # Entry point
|   │ ├── index.css
|   │ └── ...
|   ├── .env # API key (not committed to Git)
|   ├── .gitignore
|   ├── package.json
|    ├── vite.config.js
├──.gitignore
├──LICENSCE
└── README.md


```
##  Getting Started

### 1. Clone the Repository

```bash

git clone https://github.com/your-username/weather-dashboard-react.git
cd weather-dashboard-react
```
### 2. Install Dependencies
```bash 

npm install
```

```

### 3. Run the App Locally
```bash

npm run dev
```
Then open your browser and navigate to http://localhost:5173

## Build for Production
```bash
npm run build
```
## Notes
- Weather data is sourced from the free and open Open-Meteo API, which requires no API key, registration, or credit card.

- This app respects Open-Meteo’s fair use policy (max 10,000 requests/day for non-commercial use).

- Please provide attribution when using the data: "Weather data provided by Open-Meteo.com"


