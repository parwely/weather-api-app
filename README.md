# ☀️ Weather API App

Eine einfache, funktionale Wetter-Anwendung, die Wetterdaten über eine öffentliche REST-API  (z. B. OpenWeatherMap) abruft und demonstriert grundlegende Prinzipien der Webservice-Nutzung, JSON-Parsing und Fehlerbehandlung in JavaScript.

## 🔧 Funktionen

- Abfrage aktueller Wetterdaten für jede beliebige Stadt
- Einfache Konsolenbedienung
- Ausgabe von Temperatur, Wetterbeschreibung, Luftfeuchtigkeit etc.
- Fehlerbehandlung bei ungültigen Eingaben oder Netzwerkproblemen
- JSON-Verarbeitung mit org.json (oder kompatibler Bibliothek)

## 💻 Technologien

- Node.js
- Axios (for API requests)
- TailwindCSS (for styling)
- React + Vite (for build tooling)
- OpenWeatherMap API
- RESTful API-Zugriff mit `HttpURLConnection`
- JSON-Verarbeitung mit `org.json`
- Externe API: OpenWeatherMap (https://openweathermap.org/)

## ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn
- API-Schlüssel für OpenWeatherMap (kostenlos erhältlich unter https://openweathermap.org/api)


---

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/parwely/weather-api-app.git
   cd weather-forecast-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment setup**:
   - Copy `.env.example` to `.env`
   - Replace `your_api_key_here` with your actual **OpenWeatherMap API key**

4. **Start the development server**:
   ```bash
   npm run dev
   ```

