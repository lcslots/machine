body {
    font-family: 'Roboto', sans-serif;
    padding: 20px;
    background-image: url('bg.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: #fff;
    line-height: 1.6;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 10px;
}

.logo {
    height: 60px;
}

.account-button a {
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
    padding: 10px 20px;
    border-radius: 25px;
    font-weight: bold;
    transition: background-color 0.3s;
}

.account-button a:hover {
    background-color: #0056b3;
}

h1, h2 {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.datetime {
    text-align: center;
    font-size: 18px;
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px;
    border-radius: 10px;
}

.total-players {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 10px;
    color: #080808;
    text-shadow: 0 0 5px #00fc2a, 0 0 10px #00ff15, 0 0 15px #03df3a;
}

.neon-box {
    border: 2px solid #ffcc00;
    box-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00, 0 0 30px #ffcc00;
}

.shuffle-banner {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #ffcc00;
    margin-bottom: 20px;
    animation: fadeInOut 5s infinite;
}

@keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
}

.slots {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.slot {
    background: rgba(0, 0, 0, 0.8);
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 200px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.slot:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.slot-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
}

.chance-label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.progress-bar {
    position: relative;
    background-color: #ddd;
    border-radius: 10px;
    overflow: hidden;
    height: 20px;
    margin-bottom: 5px;
}

.fill {
    height: 100%;
    width: 0;
    transition: width 1s linear, background-color 0.5s;
    border-radius: 10px;
}

.percentage {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    color: #000;
    line-height: 20px;
    font-weight: bold;
}

.player-count {
    margin-top: 5px;
    font-size: 14px;
    color: #ffcc00;
}

.banner {
    text-align: center;
    margin: 20px 0;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 10px;
}

.banner h3 {
    margin-bottom: 10px;
    font-size: 20px;
    color: #ffcc00;
}

.banner p {
    font-size: 16px;
    color: #ffcc00;
    margin-bottom: 20px;
}

.banner-image {
    width: 100%;
    height: auto;
    max-width: 600px;
    border-radius: 10px;
}

.note, .awareness-note {
    text-align: center;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px;
    border-radius: 10px;
}

.play-button {
    text-align: center;
    margin-top: 20px;
}

.play-button a {
    text-decoration: none;
    color: white;
    background-color: #ff0055;
    padding: 10px 20px;
    border-radius: 25px;
    font-weight: bold;
    transition: background-color 0.3s;
    display: inline-block;
}

.play-button a .neon {
    text-shadow: 0 0 5px #fff, 0 0 10px #ff0055, 0 0 15px #ff0055;
}

.play-button a:hover {
    background-color: #ff3366;
}

@media (max-width: 768px) {
    .slots {
        flex-direction: column;
        align-items: center;
    }
}
