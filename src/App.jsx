import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [calculatedBmi, setCalculatedBmi] = useState(null);
  const [category, setCategory] = useState({ text: "", color: "" });
  const [suggestion, setSuggestion] = useState("");
  const [error, setError] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // --- Validation ---
    if (!weight || !height) {
      setError("Please enter both weight and height.");
      return;
    }
    if (weight <= 0 || height <= 0) {
      setError("Weight and height must be positive values.");
      return;
    }

    setError(""); // clear error if valid

    // --- Calculate BMI ---
    // Formula: weight(kg) / (height(m)^2)
    const bmiValue = weight / Math.pow(height * 0.0254, 2);
    const roundedBmi = bmiValue.toFixed(1);
    setCalculatedBmi(roundedBmi);

    // --- Determine category with color + suggestion ---
    if (bmiValue < 18.5) {
      setCategory({ text: "Underweight", color: "text-blue-500" });
      setSuggestion(
        "Eat more balanced, calorie-rich meals with proteins and healthy fats. Do strength training to build muscle."
      );
    } else if (bmiValue < 25) {
      setCategory({ text: "Normal", color: "text-green-600" });
      setSuggestion(
        "Maintain your healthy lifestyle with balanced meals, regular exercise, and good sleep."
      );
    } else if (bmiValue < 30) {
      setCategory({ text: "Overweight", color: "text-yellow-500" });
      setSuggestion(
        "Focus on portion control, reduce sugary foods, and exercise regularly."
      );
    } else {
      setCategory({ text: "Obese", color: "text-red-600" });
      setSuggestion(
        "Consult a healthcare provider for a personalized plan. Adopt a calorie-controlled diet and increase physical activity."
      );
    }
  };

  // --- Reset all states ---
  const resetForm = () => {
    setWeight("");
    setHeight("");
    setCalculatedBmi(null);
    setCategory({ text: "", color: "" });
    setSuggestion("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-10 px-4">
      <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl">
        {/* --- Title --- */}
        <h1 className="text-3xl font-bold text-center text-green-600 mb-2">
          BMI Calculator
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Check your body mass index
        </p>

        {/* --- Form Section --- */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Weight Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
            </div>

            {/* Height Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Height (inches)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            {/* Buttons */}
            <div className="flex space-x-4">
              <button
                type="submit"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md"
              >
                Calculate BMI
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg transition duration-200"
              >
                Reset
              </button>
            </div>
          </div>
        </form>

        {/* --- Results Section --- */}
        {calculatedBmi && (
          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
              Your Results
            </h2>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">BMI:</span>
              <span className="text-xl font-bold">{calculatedBmi}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Category:</span>
              <span className={`text-xl font-bold ${category.color}`}>
                {category.text}
              </span>
            </div>

            {/* BMI Categories Reference */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                BMI Categories: <br />
                Underweight: &lt;18.5 <br />
                Normal: 18.5–24.9 <br />
                Overweight: 25–29.9 <br />
                Obese: ≥30
              </p>
            </div>
            {/* Health Suggestion */}
            <div className="mt-4 p-4 rounded-xl shadow-lg bg-white text-gray-800">
              <p className="mt-2 text-sm">{suggestion}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
