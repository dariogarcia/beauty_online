const QUESTIONS = [
    { q: "Joe made the [MASK]; Susan decorated them.", v1: "costumes", v2: "chairs" },
    { q: "Joe made the sugar cookies; Susan [MASK] them.", v1: "cooked", v2: "baked" },
    { q: "Greetings from planet [MASK], or what we call home.", v1: "Jupiter", v2: "Saturn" },
    { q: "Her daily goal was to do more [MASK].", v1: "yoga", v2: "reading" },
    { q: "There can never be too many [MASK] on an ice cream.", v1: "layers", v2: "flavors" },
    { q: "He colored the [MASK] a soft yellow.", v1: "leaves", v2: "grass" },
    { q: "He colored the sky a soft [MASK].", v1: "yellow", v2: "purple" },
    { q: "It took him a month to finish the [MASK].", v1: "book", v2: "game" },
    { q: "It took him a month to [MASK] the table.", v1: "finish", v2: "fix" },
    { q: "He waited for the [MASK] to leave.", v1: "others", v2: "man" },
    { q: "She waited for the [MASK] to leave.", v1: "train", v2: "bus" },
    { q: "The fish listened intently to what the [MASK] had to say.", v1: "biologist", v2: "fisherman" },
    { q: "The [MASK] listened intently to what the girl had to say.", v1: "teacher", v2: "students" },
    { q: "[MASK] listened intently to what the girl had to say.", v1: "I", v2: "they" },
    { q: "Charles ate the french fries knowing they would be [MASK].", v1: "delicious", v2: "poisoned" },
    { q: "Charles ate the [MASK] knowing they would be poisoned.", v1: "eggs", v2: "potatoes" },
    { q: "He had reached the point where he was [MASK] about being paranoid.", v1: "worried", v2: "nervous" },
    { q: "He had a wall full of [MASK] in the basement.", v1: "boxes", v2: "furniture" },
    { q: "Susan ran from the giraffe toward the [MASK].", v1: "door", v2: "stairs" },
    { q: "Mark ran from the [MASK] toward the stairs.", v1: "kitchen", v2: "bedroom" },
    { q: "The [MASK] was covered in snow.", v1: "roof", v2: "car" },
    { q: "The boy played [MASK] all day.", v1: "outside", v2: "inside" },
    { q: "She bought a [MASK] of flowers.", v1: "bouquet", v2: "bunch" },
    { q: "The cat sat on the [MASK].", v1: "mat", v2: "rug" },
    { q: "He drank his [MASK] slowly.", v1: "coffee", v2: "tea" }
];

const COLORS = {
    1: { hex: "#6b006b", coords: [302, 33], textCol: "#ffffff" },
    2: { hex: "#35006b", coords: [416, 102], textCol: "#ffffff" },
    3: { hex: "#07076a", coords: [467, 205], textCol: "#ffffff" },
    4: { hex: "#00356b", coords: [466, 325], textCol: "#ffffff" },
    5: { hex: "#006b6b", coords: [405, 425], textCol: "#ffffff" },
    6: { hex: "#006b35", coords: [302, 483], textCol: "#ffffff" },
    7: { hex: "#005500", coords: [188, 484], textCol: "#ffffff" },
    8: { hex: "#4f6b00", coords: [79, 423], textCol: "#ffffff" },
    9: { hex: "#6b6b00", coords: [21, 325], textCol: "#ffffff" },
    10: { hex: "#6b3500", coords: [25, 180], textCol: "#ffffff" },
    11: { hex: "#6b0000", coords: [72, 100], textCol: "#ffffff" },
    12: { hex: "#6b0035", coords: [188, 33], textCol: "#ffffff" },
    13: { hex: "#9b009b", coords: [295, 66], textCol: "#ffffff" },
    14: { hex: "#4d009b", coords: [389, 125], textCol: "#ffffff" },
    15: { hex: "#0b0b9a", coords: [430, 207], textCol: "#ffffff" },
    16: { hex: "#004d9b", coords: [431, 301], textCol: "#ffffff" },
    17: { hex: "#009b9b", coords: [377, 398], textCol: "#ffffff" },
    18: { hex: "#009b4d", coords: [295, 444], textCol: "#ffffff" },
    19: { hex: "#009b00", coords: [190, 444], textCol: "#ffffff" },
    20: { hex: "#729b00", coords: [103, 394], textCol: "#ffffff" },
    21: { hex: "#9b9b00", coords: [55, 306], textCol: "#ffffff" },
    22: { hex: "#9b4d00", coords: [55, 219], textCol: "#ffffff" },
    23: { hex: "#9b0000", coords: [100, 125], textCol: "#ffffff" },
    24: { hex: "#9b004d", coords: [190, 66], textCol: "#ffffff" },
    25: { hex: "#ce00ce", coords: [286, 103], textCol: "#000000" },
    26: { hex: "#6700ce", coords: [352, 145], textCol: "#000000" },
    27: { hex: "#0f0fcd", coords: [392, 209], textCol: "#000000" },
    28: { hex: "#0067ce", coords: [396, 284], textCol: "#000000" },
    29: { hex: "#00cece", coords: [358, 360], textCol: "#000000" },
    30: { hex: "#00ce67", coords: [278, 407], textCol: "#000000" },
    31: { hex: "#00ce00", coords: [207, 405], textCol: "#000000" },
    32: { hex: "#98ce00", coords: [128, 360], textCol: "#000000" },
    33: { hex: "#cece00", coords: [88, 290], textCol: "#000000" },
    34: { hex: "#ce6700", coords: [95, 208], textCol: "#000000" },
    35: { hex: "#ce0000", coords: [135, 145], textCol: "#000000" },
    36: { hex: "#ce0067", coords: [205, 110], textCol: "#000000" },
    37: { hex: "#fa08fb", coords: [275, 140], textCol: "#000000" },
    38: { hex: "#8000ff", coords: [329, 175], textCol: "#000000" },
    39: { hex: "#1313fe", coords: [355, 220], textCol: "#000000" },
    40: { hex: "#0080ff", coords: [355, 290], textCol: "#000000" },
    41: { hex: "#00ffff", coords: [330, 340], textCol: "#000000" },
    42: { hex: "#00ff80", coords: [280, 370], textCol: "#000000" },
    43: { hex: "#42ff42", coords: [210, 370], textCol: "#000000" },
    44: { hex: "#bdff00", coords: [155, 335], textCol: "#000000" },
    45: { hex: "#ffff00", coords: [130, 280], textCol: "#000000" },
    46: { hex: "#ff8000", coords: [130, 230], textCol: "#000000" },
    47: { hex: "#ff0000", coords: [155, 180], textCol: "#000000" },
    48: { hex: "#ff0080", coords: [220, 140], textCol: "#000000" },
    49: { hex: "#ff86ff", coords: [263, 180], textCol: "#000000" },
    50: { hex: "#c286ff", coords: [305, 200], textCol: "#000000" },
    51: { hex: "#8f8ffe", coords: [325, 245], textCol: "#000000" },
    52: { hex: "#86c2ff", coords: [325, 280], textCol: "#000000" },
    53: { hex: "#86ffff", coords: [300, 315], textCol: "#000000" },
    54: { hex: "#86ffc2", coords: [265, 335], textCol: "#000000" },
    55: { hex: "#7fff7f", coords: [225, 335], textCol: "#000000" },
    56: { hex: "#dfff86", coords: [185, 315], textCol: "#000000" },
    57: { hex: "#ffff86", coords: [170, 280], textCol: "#000000" },
    58: { hex: "#ffc286", coords: [165, 244], textCol: "#000000" },
    59: { hex: "#ff8686", coords: [190, 200], textCol: "#000000" },
    60: { hex: "#ff86c2", coords: [220, 175], textCol: "#000000" },
    61: { hex: "#ffc6ff", coords: [255, 217], textCol: "#000000" },
    62: { hex: "#e2c6ff", coords: [280, 228], textCol: "#000000" },
    63: { hex: "#cacafe", coords: [290, 245], textCol: "#000000" },
    64: { hex: "#c6e2ff", coords: [288, 270], textCol: "#000000" },
    65: { hex: "#c6ffff", coords: [280, 291], textCol: "#000000" },
    66: { hex: "#c6ffe2", coords: [257, 302], textCol: "#000000" },
    67: { hex: "#c0ffc0", coords: [225, 307], textCol: "#000000" },
    68: { hex: "#f0ffc6", coords: [210, 292], textCol: "#000000" },
    69: { hex: "#ffffc6", coords: [203, 268], textCol: "#000000" },
    70: { hex: "#ffe2c6", coords: [203, 248], textCol: "#000000" },
    71: { hex: "#ffc6c6", coords: [215, 225], textCol: "#000000" },
    72: { hex: "#ffc6e2", coords: [230, 210], textCol: "#000000" }
};

const EDGES = [
    [1,2], [1,13], [2,3], [2,14], [3,4], [3,15], [4,5], [4,16],
    [5,6], [5,17], [6,7], [6,18], [7,8], [7,19], [8,9], [8,20],
    [9,10], [9,21], [10,11], [10,22], [11,12], [11,23], [12,1], [12,24],
    [13,14], [13,25], [14,15], [14,26], [15,16], [15,27], [16,17], [16,28],
    [17,18], [17,29], [18,19], [18,30], [19,20], [19,31], [20,21], [20,32],
    [21,22], [21,33], [22,23], [22,34], [23,24], [23,35], [24,13], [24,36],
    [25,26], [25,37], [26,27], [26,38], [27,28], [27,39], [28,29], [28,40],
    [29,30], [29,41], [30,31], [30,42], [31,32], [31,43], [32,33], [32,44],
    [33,34], [33,45], [34,35], [34,46], [35,36], [35,47], [36,25], [36,48],
    [37,38], [37,49], [38,39], [38,50], [39,40], [39,51], [40,41], [40,52],
    [41,42], [41,53], [42,43], [42,54], [43,44], [43,55], [44,45], [44,56],
    [45,46], [45,57], [46,47], [46,58], [47,48], [47,59], [48,37], [48,60],
    [49,50], [49,61], [50,51], [50,62], [51,52], [51,63], [52,53], [52,64],
    [53,54], [53,65], [54,55], [54,66], [55,56], [55,67], [56,57], [56,68],
    [57,58], [57,69], [58,59], [58,70], [59,60], [59,71], [60,49], [60,72],
    [61,62], [62,63], [63,64], [64,65], [65,66], [66,67], [67,68], [68,69],
    [69,70], [70,71], [71,72], [72,61]
];

const SHAPE_TYPES = {
    "small-square": {
        name: "Small Square",
        grid: [[1]],
        cells: 1
    },
    "big-square": {
        name: "Big Square",
        grid: [[1, 1], [1, 1]],
        cells: 4
    },
    "line-2h": {
        name: "Line 2 Horizontal",
        grid: [[1, 1]],
        cells: 2
    },
    "line-2v": {
        name: "Line 2 Vertical",
        grid: [[1], [1]],
        cells: 2
    },
    "line-3h": {
        name: "Line 3 Horizontal",
        grid: [[1, 1, 1]],
        cells: 3
    },
    "line-3v": {
        name: "Line 3 Vertical",
        grid: [[1], [1], [1]],
        cells: 3
    },
    "line-4h": {
        name: "Line 4 Horizontal",
        grid: [[1, 1, 1, 1]],
        cells: 4
    },
    "line-4v": {
        name: "Line 4 Vertical",
        grid: [[1], [1], [1], [1]],
        cells: 4
    },
    "L-3": {
        name: "L-3",
        grid: [[1, 0], [1, 1]],
        cells: 3
    },
    "L-4": {
        name: "L-4",
        grid: [[1, 0, 0], [1, 1, 1]],
        cells: 4
    },
    "T-4": {
        name: "T-4",
        grid: [[1, 1, 1], [0, 1, 0]],
        cells: 4
    },
    "corner-3": {
        name: "Corner 3",
        grid: [[1, 1], [1, 0]],
        cells: 3
    }
};

function rotateGrid(grid, times) {
    let result = grid;
    for (let i = 0; i < times; i++) {
        const rows = result.length;
        const cols = result[0].length;
        const rotated = [];
        for (let c = 0; c < cols; c++) {
            rotated[c] = [];
            for (let r = rows - 1; r >= 0; r--) {
                rotated[c].push(result[r][c]);
            }
        }
        result = rotated;
    }
    return result;
}

function canPlaceShape(shapeKey, startX, startY, rotation) {
    const shape = SHAPE_TYPES[shapeKey];
    if (!shape) {
        return { valid: false, reason: 'Unknown shape type' };
    }
    
    const rotatedGrid = rotateGrid(shape.grid, rotation);
    const rows = rotatedGrid.length;
    const cols = rotatedGrid[0].length;
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (rotatedGrid[r][c] === 1) {
                const targetX = startX + c;
                const targetY = startY + r;
                
                if (targetX < 0 || targetX >= 14 || targetY < 0 || targetY >= 14) {
                    return { valid: false, reason: 'Shape extends beyond mosaic bounds' };
                }
                
                if (gameState.tempMosaic[targetY][targetX] !== '#ffffff') {
                    return { valid: false, reason: 'Target cell is already filled' };
                }
            }
        }
    }
    
    return { valid: true, reason: '' };
}

function placeShape(shapeKey, startX, startY, rotation) {
    // Validate placement first using canPlaceShape
    const validation = canPlaceShape(shapeKey, startX, startY, rotation);
    
    if (!validation.valid) {
        return { success: false, reason: validation.reason, cellsPlaced: 0 };
    }
    
    const shape = SHAPE_TYPES[shapeKey];
    const rotatedGrid = rotateGrid(shape.grid, rotation);
    const colorHex = COLORS[gameState.paintColor].hex;
    let cellsPlaced = 0;
    
    // Fill all shape cells in tempMosaic with current paint color
    for (let r = 0; r < rotatedGrid.length; r++) {
        for (let c = 0; c < rotatedGrid[r].length; c++) {
            if (rotatedGrid[r][c] === 1) {
                gameState.tempMosaic[startY + r][startX + c] = colorHex;
                cellsPlaced++;
            }
        }
    }
    
    // Increment paintCount by number of cells placed
    gameState.paintCount += cellsPlaced;
    
    return { success: true, reason: '', cellsPlaced: cellsPlaced };
}

const ROUNDS_BY_PLAYERS = { 1: 10, 2: 8, 3: 6, 4: 5, 5: 4, 6: 3 };

let gameState = {
    players: [],
    numPlayers: 0,
    numRounds: 0,
    currentRound: 0,
    currentTurn: 0,
    currentPlayer: null,
    beautyOnly: false,
    empathyHits: 0,
    empathyQuestions: 0,
    currentQuestion: null,
    usedQuestions: new Set(),
    playerColors: {},
    availableColors: new Set(),
    mosaic: [],
    paintColor: null,
    paintCount: 0,
    paintTotal: 0,
    tempMosaic: []
};

function initGame() {
    gameState = {
        players: [],
        numPlayers: 0,
        numRounds: 0,
        currentRound: 0,
        currentTurn: 0,
        currentPlayer: null,
        beautyOnly: false,
        empathyHits: 0,
        empathyQuestions: 0,
        currentQuestion: null,
        usedQuestions: new Set(),
        playerColors: {},
        availableColors: new Set(Object.keys(COLORS).map(Number)),
        mosaic: createEmptyMosaic(),
        paintColor: null,
        paintCount: 0,
        paintTotal: 0,
        tempMosaic: createEmptyMosaic(),
        selectedShape: null,
        selectedRotation: 0,
        currentShapes: {}
    };
    renderColorMap();
    renderMosaic();
}

function createEmptyMosaic() {
    const mosaic = [];
    for (let i = 0; i < 14; i++) {
        mosaic[i] = [];
        for (let j = 0; j < 14; j++) {
            mosaic[i][j] = "#ffffff";
        }
    }
    return mosaic;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function goToNumPlayers() {
    showScreen('numPlayersScreen');
}

function goToPlayerNames() {
    gameState.numPlayers = parseInt(document.getElementById('numPlayersSelect').value);
    gameState.numRounds = ROUNDS_BY_PLAYERS[gameState.numPlayers];
    
    const container = document.getElementById('playerNameInputs');
    container.innerHTML = '';
    for (let i = 0; i < gameState.numPlayers; i++) {
        const div = document.createElement('div');
        div.className = 'player-item';
        div.innerHTML = `<span>Player ${i + 1}:</span><input type="text" maxlength="3" id="playerName${i}" placeholder="Name">`;
        container.appendChild(div);
    }
    showScreen('playerNamesScreen');
}

function goToInitialColors() {
    gameState.players = [];
    for (let i = 0; i < gameState.numPlayers; i++) {
        const name = document.getElementById(`playerName${i}`).value.trim().substring(0, 3) || `P${i + 1}`;
        gameState.players.push(name);
        gameState.playerColors[name] = [];
    }
    
    gameState.availableColors = new Set(Object.keys(COLORS).map(Number));
    const shuffled = Array.from(gameState.availableColors).sort(() => Math.random() - 0.5);
    
    const display = document.getElementById('initialColorsDisplay');
    display.innerHTML = '';
    for (let i = 0; i < gameState.numPlayers; i++) {
        const colorId = shuffled[i];
        gameState.playerColors[gameState.players[i]].push(colorId);
        gameState.availableColors.delete(colorId);
        
        const color = COLORS[colorId];
        const div = document.createElement('div');
        div.className = 'player-item';
        div.style.background = color.hex;
        div.style.color = color.textCol;
        div.style.padding = '0.5rem';
        div.style.margin = '0.3rem 0';
        div.textContent = `${gameState.players[i]}: Color ${colorId}`;
        display.appendChild(div);
    }
    
    showScreen('initialColorsScreen');
}

function goToGameType() {
    showScreen('gameTypeScreen');
}

function startGame(beautyOnly) {
    gameState.beautyOnly = beautyOnly;
    gameState.currentRound = 1;
    gameState.currentTurn = 0;
    gameState.currentPlayer = gameState.players[0];
    showInterRound();
}

function showInterRound() {
    const content = document.getElementById('interRoundContent');
    document.getElementById('roundNumberDisplay').textContent = `Round ${gameState.currentRound} / ${gameState.numRounds}`;
    
    if (gameState.currentRound === 1) {
        content.innerHTML = `
            <p>Let's start the first round!</p>
            <button class="btn btn-primary" onclick="startTurn()">Start Round</button>
        `;
    } else {
        content.innerHTML = `
            <p>Beautiful mosaic, right?</p>
            <p>You can continue or end the game here.</p>
            <button class="btn btn-primary" onclick="startTurn()">Play Next Round</button>
            <button class="btn btn-secondary" onclick="endGame()">End Game</button>
        `;
    }
    showScreen('interRoundScreen');
}

function startTurn() {
    gameState.currentPlayer = gameState.players[gameState.currentTurn];
    gameState.empathyHits = 0;
    gameState.empathyQuestions = 0;
    
    if (gameState.beautyOnly) {
        gameState.empathyHits = Math.floor(Math.random() * 6);
        checkEmpathyResult();
    } else {
        showEmpathyPhase();
    }
}

function showEmpathyPhase() {
    document.getElementById('empathyPlayerDisplay').textContent = `Current Player: ${gameState.currentPlayer}`;
    
    const content = document.getElementById('empathyContent');
    content.innerHTML = `
        <p>Decide who the guesser is (random, alphabetical, clockwise...)</p>
        <button class="btn btn-primary" onclick="showQuestion()">Show Question</button>
    `;
    showScreen('empathyScreen');
}

function showQuestion() {
    const idx = getRandomQuestion();
    if (idx === -1) {
        gameState.usedQuestions.clear();
        const newIdx = getRandomQuestion();
        gameState.currentQuestion = QUESTIONS[newIdx];
    } else {
        gameState.currentQuestion = QUESTIONS[idx];
    }
    
    const content = document.getElementById('empathyContent');
    const questionText = gameState.currentQuestion.q.replace('[MASK]', '[ ? ]');
    content.innerHTML = `
        <div class="question-display">${questionText}</div>
        <p>Read the sentence outloud, then decide which option feels more natural.</p>
        <button class="btn btn-primary" onclick="showOptions()">See Options</button>
    `;
}

function getRandomQuestion() {
    const available = [];
    for (let i = 0; i < QUESTIONS.length; i++) {
        if (!gameState.usedQuestions.has(i)) {
            available.push(i);
        }
    }
    if (available.length === 0) return -1;
    const idx = available[Math.floor(Math.random() * available.length)];
    gameState.usedQuestions.add(idx);
    return idx;
}

function showOptions() {
    const content = document.getElementById('empathyContent');
    content.innerHTML = `
        <div class="question-display">${gameState.currentQuestion.q.replace('[MASK]', '[ ? ]')}</div>
        <div class="options-display">
            <button class="option-btn" onclick="handleAnswer(true)">${gameState.currentQuestion.v1}</button>
            <button class="option-btn" onclick="handleAnswer(false)">${gameState.currentQuestion.v2}</button>
        </div>
        <p>Was the guess correct?</p>
    `;
}

function handleAnswer(correct) {
    gameState.empathyQuestions++;
    if (correct) {
        gameState.empathyHits++;
    }
    
    if (gameState.empathyQuestions < 5) {
        showQuestion();
    } else {
        endEmpathyPhase();
    }
}

function endEmpathyPhase() {
    const content = document.getElementById('empathyContent');
    content.innerHTML = `
        <p>You guessed correctly ${gameState.empathyHits} out of 5 questions.</p>
        <button class="btn btn-primary" onclick="checkEmpathyResult()">Let's Paint!</button>
    `;
}

function checkEmpathyResult() {
    const owned = gameState.playerColors[gameState.currentPlayer].length;
    const getsNew = getNewColor(gameState.empathyHits, owned);
    
    if (getsNew) {
        showColorSelection();
    } else {
        showPainting();
    }
}

function getNewColor(hits, owned) {
    if (hits === 5) return true;
    return hits > owned;
}

function showColorSelection() {
    const owned = gameState.playerColors[gameState.currentPlayer];
    const neighbors = getNeighborColors(owned);
    
    const content = document.getElementById('empathyContent');
    content.innerHTML = `
        <p>Because of empathy, ${gameState.currentPlayer} gets a new color!</p>
        <p>Your colors:</p>
        <div style="display:flex;gap:0.5rem;justify-content:center;margin:1rem 0;">
            ${owned.map(id => `<div class="color-swatch" style="background:${COLORS[id].hex}"></div>`).join('')}
        </div>
        <p>Choose a new color:</p>
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:0.5rem;">
            ${neighbors.map(id => `<div class="color-option" style="background:${COLORS[id].hex}" onclick="selectNewColor(${id})"></div>`).join('')}
        </div>
    `;
    showScreen('empathyScreen');
}

function getNeighborColors(owned) {
    const neighbors = new Set();
    const ownedSet = new Set(owned);
    
    for (const [c1, c2] of EDGES) {
        if (ownedSet.has(c1) && !ownedSet.has(c2) && gameState.availableColors.has(c2)) {
            neighbors.add(c2);
        }
        if (ownedSet.has(c2) && !ownedSet.has(c1) && gameState.availableColors.has(c1)) {
            neighbors.add(c1);
        }
    }
    
    return Array.from(neighbors);
}

function selectNewColor(colorId) {
    gameState.playerColors[gameState.currentPlayer].push(colorId);
    gameState.availableColors.delete(colorId);
    renderColorMap();
    showPainting();
}

function selectShape(shapeType) {
    gameState.selectedShape = shapeType;
    gameState.selectedRotation = 0;
    updateCurrentShapeDisplay();
    
    // Highlight the selected button
    document.querySelectorAll('.shape-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.dataset.shape === shapeType) {
            btn.classList.add('selected');
        }
    });
}

function updateCurrentShapeDisplay() {
    const display = document.getElementById('currentShapeDisplay');
    const rotationSpan = document.getElementById('rotationValue');
    
    if (gameState.selectedShape) {
        const shape = SHAPE_TYPES[gameState.selectedShape];
        display.innerHTML = `
            <div class="selected-shape-info">
                <strong>Selected:</strong> ${shape.name}
                <br>
                <span style="font-size: 0.9rem; color: #666;">${shape.cells} cell${shape.cells > 1 ? 's' : ''}</span>
                <span class="shape-preview" style="margin-left: 10px;">◻</span>
            </div>
        `;
    } else {
        display.innerHTML = '<span style="color: #666;">No shape selected - click a shape above or click on mosaic for single cell</span>';
    }
    
    if (rotationSpan) {
        rotationSpan.textContent = (gameState.selectedRotation * 90) + '°';
    }
}

function rotateShape() {
    if (!gameState.selectedShape) {
        alert('Please select a shape first');
        return;
    }
    gameState.selectedRotation = (gameState.selectedRotation + 1) % 4;
    updateCurrentShapeDisplay();
}

function updateShapeSelectionUI() {
    // Update the shape buttons to show remaining counts
    const container = document.querySelector('.shape-buttons');
    if (!container) return;
    
    let buttonsHtml = '';
    for (const [shapeType, count] of Object.entries(gameState.currentShapes)) {
        for (let i = 0; i < count; i++) {
            const shapeDef = SHAPE_TYPES[shapeType];
            const cells = shapeDef ? shapeDef.cells : (shapeType === 'small-square' ? 1 : 4);
            const name = shapeDef ? shapeDef.name : shapeType;
            const symbol = cells === 1 ? '◻' : '◼';
            
            buttonsHtml += `
                <button class="shape-btn ${gameState.selectedShape === shapeType ? 'selected' : ''}" 
                        data-shape="${shapeType}" 
                        onclick="selectShape('${shapeType}')">
                    ${symbol} ${name}
                </button>
            `;
        }
    }
    
    if (buttonsHtml === '') {
        buttonsHtml = '<span style="color: #666;">No shapes remaining - use single cell placement</span>';
    }
    
    container.innerHTML = buttonsHtml;
}

// Helper arrays for varied shape selection
const SHAPES_BY_CELLS = {
    1: ['small-square'],
    2: ['line-2h', 'line-2v'],
    3: ['line-3h', 'line-3v', 'L-3', 'corner-3'],
    4: ['big-square', 'line-4h', 'line-4v', 'L-4', 'T-4']
};

function getRandomShapeType(cells) {
    // Randomly select a shape type that matches the target cell count
    const available = SHAPES_BY_CELLS[cells];
    if (!available || available.length === 0) {
        // Fallback to small-square repeated
        return 'small-square';
    }
    return available[Math.floor(Math.random() * available.length)];
}

function getShapeCountPair(totalCells) {
    // Generate a random pair of shape types that sum to totalCells
    // Try different combinations for variety
    const shapes = {};
    let remaining = totalCells;
    
    // Option 1: Use varied shapes based on cell size需求
    if (remaining >= 4 && Math.random() > 0.3) {
        // Use big-square-based or multi-cell shapes
        const numBigShapes = Math.floor(Math.random() * (remaining / 4)) + 1;
        const bigCount = Math.min(numBigShapes, Math.floor(remaining / 4));
        
        if (bigCount > 0) {
            shapes['big-square'] = bigCount;
            remaining -= bigCount * 4;
        }
    }
    
    // Fill remainder with small-square shapes
    if (remaining > 0) {
        shapes['small-square'] = (shapes['small-square'] || 0) + remaining;
    }
    
    // Ensure we have at least some variety by occasionally replacing small-squares
    if (remaining <= 2 && remaining > 0 && Math.random() > 0.5) {
        // Replace small squares with variety shapes
        const shapeTypes = ['line-2h', 'line-2v'];
        const newType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        delete shapes['small-square'];
        shapes[newType] = 1;
    }
    
    return shapes;
}

function getRandomShape(hits, owned) {
    // Deck1: 0-1 correct answers - 70% 4 cells, 20% 8 cells, 10% 8 cells
    // Deck2: 2+ correct - 20% 8 cells, 40% 12 cells, 30% 16 cells, 10% 16 cells
    
    if (hits <= 1) {
        // Deck1 distribution
        const r = Math.random();
        if (r < 0.7) {
            // 4 cells - vary between small-square×4 or line-4 shapes
            return getShapeCountPair(4);
        } else if (r < 0.875) {
            // 8 cells - either 8 small, 4 small + 1 big, or varied 2×line-4
            return getShapeCountPair(8);
        } else {
            // 8 cells (alternate path for variety)
            return getShapeCountPair(8);
        }
    } else {
        // Deck2 distribution
        const r = Math.random();
        if (r < 0.2) {
            // 8 cells
            return getShapeCountPair(8);
        } else if (r < 0.6) {
            // 12 cells - varied: 3×small-square, 3×big-square, or mixed
            return getShapeCountPair(12);
        } else if (r < 0.9) {
            // 16 cells
            return getShapeCountPair(16);
        } else {
            // 16 cells (alternate)
            return getShapeCountPair(16);
        }
    }
}

function showPainting() {
    const shapes = getRandomShape(gameState.empathyHits, gameState.playerColors[gameState.currentPlayer].length);
    
    let totalCells = 0;
    let shapeButtonsHtml = '';
    
    // Generate shape buttons based on shapes available
    // shapes now returns objects like { 'small-square': 4, 'big-square': 1 }
    gameState.currentShapes = {};
    
    for (const [shapeKey, count] of Object.entries(shapes)) {
        // Look up cell count from SHAPE_TYPES
        const shapeDef = SHAPE_TYPES[shapeKey];
        const cells = shapeDef ? shapeDef.cells : (shapeKey === 'small-square' ? 1 : 4);
        const name = shapeDef ? shapeDef.name : shapeKey;
        const symbol = cells === 1 ? '◻' : '◼';
        
        totalCells += cells * count;
        
        // Store available count for each shape type
        gameState.currentShapes[shapeKey] = (gameState.currentShapes[shapeKey] || 0) + count;
        
        // Create buttons for each count
        for (let i = 0; i < count; i++) {
            shapeButtonsHtml += `
                <button class="shape-btn" data-shape="${shapeKey}" onclick="selectShape('${shapeKey}')">
                    ${symbol} ${name}
                </button>
            `;
        }
    }
    
    gameState.paintTotal = totalCells;
    gameState.paintCount = 0;
    gameState.tempMosaic = JSON.parse(JSON.stringify(gameState.mosaic));
    gameState.paintColor = null;
    gameState.selectedShape = null;
    gameState.selectedRotation = 0;
    
    document.getElementById('paintRoundDisplay').textContent = `Round ${gameState.currentRound}`;
    document.getElementById('paintPlayerDisplay').textContent = gameState.currentPlayer;
    
    const colorOptions = document.getElementById('paintColorOptions');
    const colors = gameState.playerColors[gameState.currentPlayer];
    colorOptions.innerHTML = colors.map(id => 
        `<div class="color-option ${gameState.paintColor === id ? 'selected' : ''}" 
              style="background:${COLORS[id].hex}" 
              onclick="selectPaintColor(${id})"></div>`
    ).join('');
    
    // Update shape selection area
    const shapeSelectionDiv = document.getElementById('shapeSelection');
    if (shapeSelectionDiv) {
        shapeSelectionDiv.innerHTML = `
            <div class="shape-selection-container">
                <p><strong>Select a shape to place:</strong></p>
                <div class="shape-buttons">${shapeButtonsHtml}</div>
                <div id="currentShapeDisplay" class="current-shape-display"></div>
                <div class="rotation-controls">
                    <span>Rotation: <span id="rotationValue">0°</span></span>
                    <button class="btn btn-secondary" onclick="rotateShape()">Rotate (R)</button>
                </div>
            </div>
        `;
    }
    
    document.getElementById('paintCount').textContent = '0';
    document.getElementById('paintTotal').textContent = totalCells;
    
    renderMosaic();
    showScreen('paintScreen');
}

function selectPaintColor(colorId) {
    gameState.paintColor = colorId;
    const colorOptions = document.getElementById('paintColorOptions');
    const colors = gameState.playerColors[gameState.currentPlayer];
    colorOptions.innerHTML = colors.map(id => 
        `<div class="color-option ${gameState.paintColor === id ? 'selected' : ''}" 
              style="background:${COLORS[id].hex}" 
              onclick="selectPaintColor(${id})"></div>`
    ).join('');
}

function handleMosaicClick(e) {
    if (!gameState.paintColor) return;
    if (gameState.paintCount >= gameState.paintTotal) return;
    
    const canvas = document.getElementById('mosaicCanvas');
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    
    const cellSize = 480 / 14;
    const cellX = Math.floor(x / cellSize);
    const cellY = Math.floor(y / cellSize);
    
    if (cellX >= 0 && cellX < 14 && cellY >= 0 && cellY < 14) {
        // Check if we have a selected shape
        if (gameState.selectedShape) {
            // Try to place the selected shape
            const result = placeShape(gameState.selectedShape, cellX, cellY, gameState.selectedRotation);
            
            if (result.success) {
                // Decrement the available count for this shape type
                if (gameState.currentShapes[gameState.selectedShape] > 0) {
                    gameState.currentShapes[gameState.selectedShape]--;
                }
                
                // Update paint count display
                document.getElementById('paintCount').textContent = gameState.paintCount;
                renderMosaic();
                
                // Update shape selection UI to reflect remaining shapes
                updateShapeSelectionUI();
                
                // Clear selection if no more of this shape type available
                if (gameState.currentShapes[gameState.selectedShape] <= 0) {
                    gameState.selectedShape = null;
                    gameState.selectedRotation = 0;
                    updateCurrentShapeDisplay();
                }
            } else {
                // Show feedback for invalid placement
                alert('Cannot place shape here: ' + result.reason);
            }
        } else {
            // Fallback: allow single cell placement (for small squares)
            // Check if there's room for at least 1 cell
            if (gameState.tempMosaic[cellY][cellX] === '#ffffff' && gameState.paintCount < gameState.paintTotal) {
                gameState.tempMosaic[cellY][cellX] = COLORS[gameState.paintColor].hex;
                gameState.paintCount++;
                document.getElementById('paintCount').textContent = gameState.paintCount;
                renderMosaic();
            }
        }
    }
}

function resetPaint() {
    gameState.tempMosaic = JSON.parse(JSON.stringify(gameState.mosaic));
    gameState.paintCount = 0;
    gameState.selectedShape = null;
    gameState.selectedRotation = 0;
    
    // Reset current shapes to original counts using new format
    const shapes = getRandomShape(gameState.empathyHits, gameState.playerColors[gameState.currentPlayer].length);
    gameState.currentShapes = {};
    for (const [shapeKey, count] of Object.entries(shapes)) {
        gameState.currentShapes[shapeKey] = (gameState.currentShapes[shapeKey] || 0) + count;
    }
    
    document.getElementById('paintCount').textContent = '0';
    renderMosaic();
    updateShapeSelectionUI();
    updateCurrentShapeDisplay();
}

function confirmPaint() {
    gameState.mosaic = JSON.parse(JSON.stringify(gameState.tempMosaic));
    gameState.currentTurn++;
    
    if (gameState.currentTurn >= gameState.players.length) {
        gameState.currentTurn = 0;
        gameState.currentRound++;
        
        if (gameState.currentRound > gameState.numRounds) {
            endGame();
            return;
        }
    }
    
    showInterRound();
}

function endGame() {
    showScreen('endScreen');
}

function resetGame() {
    initGame();
    showScreen('welcomeScreen');
}

function renderColorMap() {
    const canvas = document.getElementById('colorMapCanvas');
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 300, 300);
    
    ctx.strokeStyle = '#cccccc';
    ctx.lineWidth = 1;
    
    const centerX = 150, centerY = 150;
    const rings = [30, 55, 80, 105, 130];
    
    for (const r of rings) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    for (let i = 0; i < 72; i++) {
        const angle = (i / 72) * Math.PI * 2 - Math.PI / 2;
        const ringIdx = Math.floor(i / 12);
        const radius = rings[ringIdx];
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fillStyle = COLORS[i + 1].hex;
        ctx.fill();
        ctx.stroke();
    }
    
    for (const [name, colors] of Object.entries(gameState.playerColors)) {
        if (colors.length > 0) {
            const colorId = colors[0];
            const color = COLORS[colorId];
            const angle = ((colorId - 1) / 72) * Math.PI * 2 - Math.PI / 2;
            const ringIdx = Math.floor((colorId - 1) / 12);
            const radius = rings[ringIdx];
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            ctx.fillStyle = color.textCol;
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(name.substring(0, 2), x, y + 4);
        }
    }
    
    const playerColorsDiv = document.getElementById('playerColors');
    playerColorsDiv.innerHTML = '<h4>Player Colors</h4>';
    for (const [name, colors] of Object.entries(gameState.playerColors)) {
        const div = document.createElement('div');
        div.style.margin = '0.5rem 0';
        div.innerHTML = `<strong>${name}:</strong> ${colors.map(id => 
            `<span style="display:inline-block;width:20px;height:20px;background:${COLORS[id].hex};border:1px solid #000;margin-left:3px;"></span>`
        ).join('')}`;
        playerColorsDiv.appendChild(div);
    }
}

function renderMosaic() {
    const canvas = document.getElementById('mosaicCanvas');
    const ctx = canvas.getContext('2d');
    
    const cellSize = canvas.width / 14;
    
    for (let y = 0; y < 14; y++) {
        for (let x = 0; x < 14; x++) {
            ctx.fillStyle = gameState.tempMosaic[y][x];
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 1;
            ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
}

document.getElementById('mosaicCanvas').addEventListener('click', handleMosaicClick);

// Add keyboard handler for rotation (R key)
document.addEventListener('keydown', function(e) {
    if (e.key === 'r' || e.key === 'R') {
        rotateShape();
    }
});

initGame();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getNewColor,
        getRandomShape,
        getNeighborColors,
        QUESTIONS,
        COLORS,
        EDGES,
        SHAPE_TYPES,
        canPlaceShape,
        placeShape,
        rotateGrid
    };
}