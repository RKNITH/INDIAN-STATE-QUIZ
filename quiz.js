const quizData = [
  {
    question: "What is the capital of Maharashtra?",
    options: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    correct: 0
  },
  {
    question: "What is the capital of Gujarat?",
    options: ["Surat", "Vadodara", "Gandhinagar", "Ahmedabad"],
    correct: 2
  },
  {
    question: "What is the capital of Karnataka?",
    options: ["Mysuru", "Bengaluru", "Mangaluru", "Hubli"],
    correct: 1
  },
  {
    question: "What is the capital of Tamil Nadu?",
    options: ["Chennai", "Madurai", "Coimbatore", "Salem"],
    correct: 0
  },
  {
    question: "What is the capital of Kerala?",
    options: ["Kochi", "Kozhikode", "Thiruvananthapuram", "Thrissur"],
    correct: 2
  },
  {
    question: "What is the capital of Uttar Pradesh?",
    options: ["Kanpur", "Agra", "Varanasi", "Lucknow"],
    correct: 3
  },
  {
    question: "What is the capital of Rajasthan?",
    options: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer"],
    correct: 0
  },
  {
    question: "What is the capital of Bihar?",
    options: ["Gaya", "Patna", "Bhagalpur", "Muzaffarpur"],
    correct: 1
  },
  {
    question: "What is the capital of West Bengal?",
    options: ["Kolkata", "Siliguri", "Asansol", "Durgapur"],
    correct: 0
  },
  {
    question: "What is the capital of Madhya Pradesh?",
    options: ["Indore", "Gwalior", "Jabalpur", "Bhopal"],
    correct: 3
  },
  {
    question: "What is the capital of Andhra Pradesh?",
    options: ["Visakhapatnam", "Amaravati", "Kurnool", "Tirupati"],
    correct: 1
  },
  {
    question: "What is the capital of Telangana?",
    options: ["Warangal", "Nizamabad", "Khammam", "Hyderabad"],
    correct: 3
  },
  {
    question: "What is the capital of Odisha?",
    options: ["Bhubaneswar", "Cuttack", "Rourkela", "Puri"],
    correct: 0
  },
  {
    question: "What is the capital of Chhattisgarh?",
    options: ["Bhilai", "Raipur", "Bilaspur", "Durg"],
    correct: 1
  },
  {
    question: "What is the capital of Jharkhand?",
    options: ["Jamshedpur", "Dhanbad", "Ranchi", "Bokaro"],
    correct: 2
  },
  {
    question: "What is the capital of Assam?",
    options: ["Guwahati", "Dispur", "Silchar", "Jorhat"],
    correct: 1
  },
  {
    question: "What is the capital of Punjab?",
    options: ["Amritsar", "Ludhiana", "Chandigarh", "Jalandhar"],
    correct: 2
  },
  {
    question: "What is the capital of Haryana?",
    options: ["Chandigarh", "Faridabad", "Gurugram", "Panipat"],
    correct: 0
  },
  {
    question: "What is the capital of Uttarakhand?",
    options: ["Dehradun", "Haridwar", "Nainital", "Rishikesh"],
    correct: 0
  },
  {
    question: "What is the capital of Himachal Pradesh?",
    options: ["Manali", "Dharamshala", "Shimla", "Kullu"],
    correct: 2
  },
  {
    question: "What is the capital of Jammu and Kashmir?",
    options: ["Srinagar (Summer), Jammu (Winter)", "Srinagar", "Jammu", "Leh"],
    correct: 0
  },
  {
    question: "What is the capital of Sikkim?",
    options: ["Namchi", "Gangtok", "Pelling", "Lachung"],
    correct: 1
  },
  {
    question: "What is the capital of Manipur?",
    options: ["Imphal", "Thoubal", "Churachandpur", "Bishnupur"],
    correct: 0
  },
  {
    question: "What is the capital of Meghalaya?",
    options: ["Tura", "Shillong", "Jowai", "Nongstoin"],
    correct: 1
  },
  {
    question: "What is the capital of Nagaland?",
    options: ["Dimapur", "Kohima", "Mokokchung", "Wokha"],
    correct: 1
  },
  {
    question: "What is the capital of Tripura?",
    options: ["Udaipur", "Dharmanagar", "Agartala", "Belonia"],
    correct: 2
  },
  {
    question: "What is the capital of Arunachal Pradesh?",
    options: ["Naharlagun", "Pasighat", "Itanagar", "Tawang"],
    correct: 2
  },
  {
    question: "What is the capital of Mizoram?",
    options: ["Lunglei", "Aizawl", "Champhai", "Kolasib"],
    correct: 1
  },
  {
    question: "What is the capital of Goa?",
    options: ["Vasco da Gama", "Margao", "Panaji", "Mapusa"],
    correct: 2
  },
  {
    question: "What is the capital of Delhi (NCT)?",
    options: ["New Delhi", "Old Delhi", "South Delhi", "East Delhi"],
    correct: 0
  },
  {
    question: "What is the capital of Puducherry (UT)?",
    options: ["Karaikal", "Puducherry", "Yanam", "Mahe"],
    correct: 1
  },
  {
    question: "What is the capital of Andaman and Nicobar Islands (UT)?",
    options: ["Port Blair", "Rangat", "Mayabunder", "Diglipur"],
    correct: 0
  },
  {
    question: "What is the capital of Chandigarh (UT)?",
    options: ["Chandigarh", "Manimajra", "Mohali", "Panchkula"],
    correct: 0
  },
  {
    question: "What is the capital of Dadra and Nagar Haveli and Daman and Diu (UT)?",
    options: ["Daman", "Silvassa", "Diu", "Dadra"],
    correct: 1
  },
  {
    question: "What is the capital of Lakshadweep (UT)?",
    options: ["Andrott", "Kavaratti", "Agatti", "Kalpeni"],
    correct: 1
  },
  {
    question: "What is the capital of Ladakh (UT)?",
    options: ["Kargil", "Leh", "Drass", "Zanskar"],
    correct: 1
  }
];

class Quiz {
  constructor() {
    this.currentQuestion = 0;
    this.score = 0;
    this.timeLeft = 30;
    this.timer = null;
    this.timerCircle = document.querySelector('.timer-progress');
    this.circumference = 2 * Math.PI * 45;
    this.initializeElements();
    this.bindEvents();
  }

  initializeElements() {
    this.startScreen = document.getElementById('start-screen');
    this.quizScreen = document.getElementById('quiz-screen');
    this.resultScreen = document.getElementById('result-screen');
    this.questionEl = document.getElementById('question');
    this.optionsEl = document.getElementById('options');
    this.currentQuestionEl = document.getElementById('current-question');
    this.totalQuestionsEl = document.getElementById('total-questions');
    this.timerTextEl = document.getElementById('timer-text');
    this.scoreEl = document.getElementById('score');
    this.correctAnswersEl = document.getElementById('correct-answers');
    this.timeTakenEl = document.getElementById('time-taken');
    
    this.totalQuestionsEl.textContent = quizData.length;
  }

  bindEvents() {
    document.getElementById('start-btn').addEventListener('click', () => this.startQuiz());
    document.getElementById('retry-btn').addEventListener('click', () => this.resetQuiz());
  }

  startQuiz() {
    this.startScreen.classList.add('hidden');
    this.quizScreen.classList.remove('hidden');
    this.loadQuestion();
    this.startTimer();
  }

  loadQuestion() {
    const question = quizData[this.currentQuestion];
    this.questionEl.textContent = question.question;
    this.currentQuestionEl.textContent = this.currentQuestion + 1;
    
    this.optionsEl.innerHTML = '';
    question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.classList.add('option');
      button.textContent = option;
      button.addEventListener('click', () => this.checkAnswer(index));
      this.optionsEl.appendChild(button);
    });
  }

  startTimer() {
    this.timeLeft = 30;
    this.updateTimerDisplay();
    
    this.timer = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();
      
      if (this.timeLeft <= 0) {
        this.moveToNext();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    this.timerTextEl.textContent = this.timeLeft;
    const offset = this.circumference * (1 - this.timeLeft / 30);
    this.timerCircle.style.strokeDashoffset = offset;
  }

  checkAnswer(selectedIndex) {
    const correct = quizData[this.currentQuestion].correct;
    const options = this.optionsEl.children;
    
    options[selectedIndex].classList.add(selectedIndex === correct ? 'correct' : 'wrong');
    options[correct].classList.add('correct');
    
    if (selectedIndex === correct) {
      this.score++;
    }
    
    Array.from(options).forEach(option => {
      option.disabled = true;
    });
    
    setTimeout(() => this.moveToNext(), 1000);
  }

  moveToNext() {
    clearInterval(this.timer);
    
    if (this.currentQuestion < quizData.length - 1) {
      this.currentQuestion++;
      this.loadQuestion();
      this.startTimer();
    } else {
      this.showResults();
    }
  }

  showResults() {
    this.quizScreen.classList.add('hidden');
    this.resultScreen.classList.remove('hidden');
    this.scoreEl.textContent = this.score;
    this.correctAnswersEl.textContent = this.score;
    this.timeTakenEl.textContent = (30 - this.timeLeft);
  }

  resetQuiz() {
    this.currentQuestion = 0;
    this.score = 0;
    this.timeLeft = 30;
    clearInterval(this.timer);
    this.resultScreen.classList.add('hidden');
    this.startScreen.classList.remove('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Quiz();
});