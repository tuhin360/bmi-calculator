# 📊 BMI Calculator

A simple **React + Tailwind CSS** app to calculate Body Mass Index (BMI) based on user weight and height.  
It gives the BMI value, category (Underweight, Normal, Overweight, Obese), and health suggestions.

---

## 🚀 Tech Stack

- **React 19** → For building the user interface  
- **Vite** → Fast development & build tool  
- **Tailwind CSS 4** → For modern utility-first styling  
- **ESLint** → For maintaining clean and consistent code  

---

## ✨ Features

- 📥 **Input fields** for weight (kg) and height (inches)  
- 📊 **BMI calculation** with formula:  
  \[
  BMI = \frac{Weight}{(Height \times 0.0254)^2}
  \]  
- 🎨 **Dynamic results**:
  - Shows BMI value
  - Category with color code:
    - Underweight (blue)
    - Normal (green)
    - Overweight (yellow)
    - Obese (red)
- 💡 **Health suggestions** based on BMI category  
- 🔄 **Reset button** to clear inputs and results  
- 🛡 **Input validation**:
  - Prevents negative/empty values
  - Displays error message if inputs are invalid  

---

## 🛠 Setup

1. Clone the repo  
   ```bash
   git clone <repo-url>
   cd bmi-calculator

2. Install dependencies
    ```bash
    pnpm install

3. Run the app in dev mode
    ```bash
    pnpm dev