import { styled } from 'styled-components'
import useCanvas from './hooks/useCanvas'

const Canvas = styled.canvas`
  border: 1px solid aqua;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`

export const Board = () => {
  const canvasRef = useCanvas()

  return (
    <>
      <Canvas ref={canvasRef}>
        <div>d</div>
        <div>daa</div>
        <div>da</div>
      </Canvas>
    </>
  )
}
