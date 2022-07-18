import { useState } from 'react'

const Statistics = ({good, neutral, bad}) =>  {
  let klikkaukset = good+neutral+bad
  if(klikkaukset === 0){
    return(
      <p>No feedback given</p>
    )
  }
  return(
  <table>
    <tbody>
      <StatisticsLine text='Good' value={good} />
      <StatisticsLine text='Neutral' value={neutral} />
      <StatisticsLine text='Bad' value={bad} />
      <StatisticsLine text='Average' value={good-bad/2} />
      <StatisticsLine text='Positive' value={good/klikkaukset * 100 + '%'} />
    </tbody>
  </table>
  )
}

const StatisticsLine = ({text, value}) => {
  return(
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
}

const Button = ({handleClick, text}) => {
  return(
  <button onClick={handleClick}>
    {text}
  </button>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback!</h1>
      <div>
        <Button handleClick={() => setGood(good + 1)} text='Good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='Bad' />
      </div>
      <h2>Statistics</h2>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

export default App