import {
  boardButtonContainer,
  playerTurnContainer,
  winnerNameContainer,
  winnerNameElm,
} from "./elements.js";
import playVariables from "./variables.js";

const handleAudio = (src) => {
  const audio = new Audio();
  audio.src = src;
  audio.play();
};

const handleTypingSound = () => {
  handleAudio("assets/audio/typing.mp3");
};

const handleErrorSound = () => {
  handleAudio("assets/audio/error.mp3");
};

const handleWiningSound = () => {
  handleAudio("assets/audio/clap.mp3");
};

const handleBtnDisableAttr = (elm1, elm2) => {
  elm1.setAttribute("disabled", true);
  elm2.removeAttribute("disabled");
};

const handleDecideWinner = () => {
  const { player1Score, player2Score, winScore } = playVariables;

  const isPlayer1Win = player1Score === winScore;
  const isPlayer2Win = player2Score === winScore;

  if (isPlayer1Win || isPlayer2Win) {
    handleWiningSound();
    boardButtonContainer.style.display = "none";
    winnerNameElm.textContent = isPlayer1Win ? "Player 1" : "Player 2";
    playerTurnContainer.style.display = "none";
    winnerNameContainer.style.display = "block";
  }
};

export {
  handleBtnDisableAttr,
  handleDecideWinner,
  handleErrorSound,
  handleTypingSound,
  handleWiningSound,
};
