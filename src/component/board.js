import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

export default function Board(props) {
  const player = useSelector(state => Object.keys(state.player).length)
  const players = useSelector(state => state.player)


  

  let posX = 0;
  let posY = 0;
  const dispatch = useDispatch()

  function dragStartHandler (e) {
    const img = new Image();

    e.dataTransfer.setDragImage(img, 0, 0);

    posX = e.clientX;
    posY = e.clientY;
  }


  function dragHandler (e) {
    posY = e.clientY;
    posX = e.clientX;

    if (posX > 380 || posY > 610) {
      console.log('yeah')
      dispatch({type : 'deletePlayer', payload : e.target.id}) 
    }


    e.target.style.top = `${e.clientY-45}px`;
    e.target.style.left = `${e.clientX-35}px`;

  }

  const play = Object.entries(players).map((entry) => {
    console.log(`entry -> ${entry}`)
    return (
      <Players draggable id={entry[0]} key={entry[0]} onDrag={dragStartHandler} onDragEnd={dragHandler}> {entry[1]} </Players>
    )
  })
  


  // const a = players.map((player, idx) => {
  //   return(
  //     <Players draggable id={idx} key={idx} onDrag={dragStartHandler} onDragEnd={dragHandler}> {player} </Players>
  //   )
  // })


  return (
    <FootballField >
      {play}
    </FootballField>
  )
}

const FootballField = styled.div`
  width : 400px;
  height : 600px;
  background : #5EA152;
  position : relative;

`

const Players = styled.div`
  width : 60px;
  height : 60px;
  background : red;
  position : absolute;
  border-radius : 30px;
  font-size : 12px;
  font-weight : 800;
  display : flex;
  justify-content : center;
  align-items : center;
`
