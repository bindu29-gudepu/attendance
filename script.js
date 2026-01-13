body {
    font-family: Arial, sans-serif;
    background: #e6f2ff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.chat-container {
    width: 360px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 10px gray;
    overflow: hidden;
}

.chat-header {
    background: #007bff;
    color: white;
    text-align: center;
    padding: 15px;
    font-weight: bold;
}

.chat-box {
    height: 320px;
    padding: 10px;
    overflow-y: auto;
}

.user {
    text-align: right;
    margin: 6px;
}

.user span {
    background: #d1e7ff;
    padding: 8px;
    border-radius: 10px;
    display: inline-block;
}

.bot {
    text-align: left;
    margin: 6px;
}

.bot span {
    background: #f1f1f1;
    padding: 8px;
    border-radius: 10px;
    display: inline-block;
}

small {
    display: block;
    color: gray;
    font-size: 10px;
}

.chat-input {
    display: flex;
    border-top: 1px solid #ccc;
}

.chat-input input {
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
}

.chat-input button {
    padding: 10px 15px;
    border: none;
    background: #007bff;
    color: white;
    cursor: pointer;
}
