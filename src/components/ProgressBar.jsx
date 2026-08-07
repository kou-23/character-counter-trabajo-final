const ProgressBar = ({ letter }) => {
  return (
    <li>
      <span>{letter.letterName.toUpperCase()}</span>
      <div className="progress-container">
        <div className="progress-fill" style={{ width: `${letter.percentage}%` }}></div>
      </div>
      <span>{letter.amount} ({letter.percentage.toFixed(1)}%)</span>
    </li>
  )
}

export { ProgressBar }