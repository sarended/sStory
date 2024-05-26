import { useRef, useEffect } from 'react'

const resizeCanvas = (canvas: HTMLCanvasElement) => {
  const { width, height } = canvas.getBoundingClientRect()

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window
    const context = canvas.getContext('2d')
    canvas.width = width * ratio
    canvas.height = height * ratio
    context?.scale(ratio, ratio)
    return true
  }

  return false
}

const clearCanvas = (context: CanvasRenderingContext2D) => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height)
}

const draw = (context: CanvasRenderingContext2D, x: number) => {
  //   clearCanvas(context)
  context.fillStyle = '#2299cc'
  context.fillRect(x, 0, 100, 100)
  //   x++
  //   requestAnimationFrame(() => draw(context, x))
}

const renderChildren = (constext: CanvasRenderingContext2D) => {
  const children = constext.canvas.children
  for (const i in children) {
    if (children[i] instanceof HTMLDivElement) {
      console.log(constext.canvas.children, i)
      draw(constext, i * 200)
    }
  }
}

const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) {
      return
    }

    resizeCanvas(canvas)
    clearCanvas(context)
    console.log(context, canvas.children)
    let x = 0
    // draw(context, x)
    renderChildren(context)
  }, [])

  return canvasRef
}

export default useCanvas
