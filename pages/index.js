import React, { useState } from 'react'

export default function index() {
  const mytext = ['Happy', 'Sad', 'Try',]
  const [text1, setText1] = useState('random')
  const randomNuM = () => {
    setText1(mytext[Math.floor(Math.random() * 3)])
    console.log(text1)
  }
  return (
    <div>
      <head>
        <title>Hello</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Dosis"/>
      </head>
      <div className="container" style={{fontFamily:"Dosis"}}>
        <h1>{text1}</h1>
        <button onClick={randomNuM} className="btn btn-success">Random</button>
      </div>

    </div>
  )
}
