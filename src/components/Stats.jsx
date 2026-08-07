const Stats = ({ characters, words, sentences, readingTime }) => {
  return (
    <div className="second-sect">
      <div className="card">
        <h3>{characters}</h3>
        <h5>Cant. de Caracteres</h5>
      </div>
      <div className="card2">
        <h3>{words}</h3>
        <h5>Cant. de Palabras</h5>
      </div>
      <div className="card3">
        <h3>{sentences}</h3>
        <h5>Cant. de oraciones</h5>
      </div>
    </div>
  )
}

export { Stats }