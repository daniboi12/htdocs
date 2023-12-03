import React from 'react'

export default function Card({cardTitle, cardText, cardImg}) {
  return (
    <div className="col">
      <div className="card p-0 shadow-sm border-0">
        <a href="#">
          <img className="card-img-top" src={cardImg} alt="Card image cap"/>
        </a>
        <div className="card-body text-center rounded-bottom">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text text-truncate">{cardText}</p>
          <a href="#" className="btn btn-primary shadow-sm">READ POST</a>
        </div>
      </div>
    </div>
  )
}
