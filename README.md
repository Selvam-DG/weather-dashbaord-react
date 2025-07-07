# Weather Dashboard - React

A modern weather dashboard built using **React**, **Vite**, and **Tailwind CSS**, which fetches real-time weather data using the [WeatherAPI](https://www.weatherapi.com/). This app displays hourly and multi-day forecasts based on the user's location or a searched city.

##  Features

- Current weather based on user's geolocation (fallback to London)
- Live hourly forecast for the current day
- 1–3 day forecast selection
- Dynamic search by location and forecast range
- Responsive and clean UI built with Tailwind CSS
- Environment variables for API key security
- Built with modern React stack and Vite for fast development

##  Live Demo

[Click to open live demo](https://weather-forecast-two-eosin.vercel.app/) 
- Note: The server may take a minute or two to wake up if it has been idle, as Render puts it to sleep after 15 minutes of inactivity. Thanks for your patience!

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

### 3. Set Up Environment Variables
Create a .env file in the root directory and add your WeatherAPI key:
```env
VITE_WEATHER_API_KEY=your_api_key_here
```

### 4. Run the App Locally
```bash

npm run dev
```
Then open your browser and navigate to http://localhost:5173

## Build for Production
```bash
npm run build
```
