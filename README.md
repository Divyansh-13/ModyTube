# ModyTube

ModyTube is a music recommendation platform that suggests songs based on your mood. Whether you're feeling happy, sad, energetic, or relaxed, it curates personalized playlists to match your emotions, ensuring the perfect soundtrack for every moment.

## Features

- **Mood-based Music Recommendations**: Receive song suggestions tailored to your current mood.
- **Personalized Playlists**: Enjoy curated playlists that perfectly match your emotions.
- **Modern, Responsive UI**: Built for seamless use across devices with a stylish, modern interface.

## Tech Stack

### Frontend
- **React**: JavaScript library for building user interfaces.
- **AceternityUI**: UI component library for rapid interface development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Fast build tool and development server.

### Backend
- **Axios**: For sending and fetching API requests from the frontend.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **Express**: Web framework for building the backend API.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/Divyansh-13/ModyTube.git
cd ModyTube
```

#### 2. Set Up and Run the Frontend

```bash
cd frontend
npm install
npm run dev
```
The frontend will start (typically at [http://localhost:5173](http://localhost:5173) if using Vite).

#### 3. Set Up and Run the Backend

```bash
cd backend
npm install
node server.js      # or node app.js depending on your main backend file
```
The backend will start (typically at [http://localhost:5000](http://localhost:5000)).

> **Note:** Adjust file and folder names if your structure differs.

## Project Structure

```
ModyTube/
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
├── backend/
│   ├── index.js (or app.js)
│   ├── package.json
│   └── ...
├── README.md
└── ...
```

## Usage

1. Open the frontend in your browser ([http://localhost:5173](http://localhost:5173) by default).
2. Select your current mood.
3. Enjoy the personalized playlist generated just for you!

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.


> **ModyTube** – The perfect soundtrack for every mood.
