import { ProgressBar, Step } from "react-step-progress-bar/index.mjs";
import "react-step-progress-bar/styles.css";
import { useEffect, useMemo, useState } from "react";
import { getCookie, setCookie } from "../../utils/cookiesHandler";

const MyProgressBar = () => {
  const cookie = useMemo(() => getCookie("progressBar"), []);
  const [currentStep, setCurrentStep] = useState(
    cookie ? cookie.currentStep : 0
  );
  const [percent, setPercent] = useState(cookie ? cookie.percent : 0);
  const [history, setHistory] = useState(cookie ? cookie.history : []);

  const handleClick = (index) => {
    if (index === currentStep) {
      return;
    }
    handleHistory(index);
    setCurrentStep(index);
    setPercent(handlePercentage(index));
  };

  const getDate = () => {
    return new Date().toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };

  const handlePercentage = (index) => {
    const percentage = (index / 6) * 100 + 1;
    return percentage > 100 ? 100 : percentage;
  };

  const handleHistory = (index) => {
    const newHistory = [...history];
    if (index >= currentStep) {
      for (let i = 0; i <= index; i++) {
        if (!newHistory[i]) {
          newHistory[i] = getDate();
        }
      }
      newHistory[index] = getDate();
      setHistory(newHistory);
      return;
    }

    newHistory[index] = getDate();
    for (let i = index + 1; i < newHistory.length; i++) {
      delete newHistory[i];
    }
    setHistory(newHistory);
  };

  useEffect(() => {
    setCookie("progressBar", { currentStep, percent, history });
  }, [currentStep, history, percent]);

  const renderSteps = () => {
    const steps = [];
    for (let i = 0; i < 7; i++) {
      steps.push(
        <Step key={i}>
          {({ accomplished, index }) => {
            return (
              <div>
                <button
                  onClick={() => handleClick(index)}
                  className={`indexedStep ${
                    accomplished ? "accomplished" : ""
                  }`}
                ></button>
                {accomplished && history[index] ? (
                  <span className={"stepText"}>{history[index]}</span>
                ) : null}
              </div>
            );
          }}
        </Step>
      );
    }
    return steps;
  };

  return (
    <ProgressBar percent={percent} filledBackground={"dodgerblue"}>
      {renderSteps()}
    </ProgressBar>
  );
};

export default MyProgressBar;
