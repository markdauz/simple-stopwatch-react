import useTimer from "./useTimer";
import { formatTime } from "./helper";

export const Timer = () => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset
  } = useTimer(0);
  return (
    <div>
      <p style={{ fontSize: 24, color: "red" }}>{formatTime(timer)}</p>
      <div>
        {!isActive && !isPaused ? (
          <button
            onClick={handleStart}
            style={{
              width: 100,
              padding: 8,
              backgroundColor: "lightgreen",
              cursor: "pointer",
              margin: 4
            }}
          >
            Start
          </button>
        ) : isPaused ? (
          <button
            onClick={handlePause}
            style={{
              width: 100,
              padding: 8,
              backgroundColor: "orange",
              cursor: "pointer",
              margin: 4
            }}
          >
            Pause
          </button>
        ) : (
          <button
            onClick={handleResume}
            style={{
              width: 100,
              padding: 8,
              backgroundColor: "blue",
              cursor: "pointer",
              margin: 4
            }}
          >
            Resume
          </button>
        )}
        <button
          onClick={handleReset}
          style={{
            width: 100,
            padding: 8,
            backgroundColor: "yellow",
            cursor: "pointer",
            margin: 4
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
