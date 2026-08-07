const Controlls = ({
  excludeSpaces,
  handleExcludeSpaces,
  limitCharacter,
  handleChangeInputLimit,
  limitValue,
  handleLimitValue }) => {
  return (
    <div className="controles-texto">
      <div className="grupo-checkboxes">
        <label>
          <input
            type="checkbox"
            checked={excludeSpaces}
            onChange={() => handleExcludeSpaces(!excludeSpaces)}
          />
          Excluir espacios
        </label>
        <label>
          <input
            type="checkbox"
            checked={limitCharacter}
            onChange={handleChangeInputLimit}
          />
          Limite de caracteres
        </label>
        {
          limitCharacter &&
          <input
            type="number"
            min="1"
            value={limitValue}
            onChange={(e) => handleLimitValue(e.target.value)}
            className="input-limit"
          />
        }
      </div>
      <div>
        <p>Approx. reading time: &lt;1 minute</p>
      </div>
    </div>
  )
}

export { Controlls }