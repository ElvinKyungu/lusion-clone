document.addEventListener("DOMContentLoaded", ()=>{
  console.log("hey everyone");
  const thirdCounter = document.querySelector(".third-counter")
  for(let i = 0; i < 2; i++){
    for(let j = 0; j < 10; j++){
      const div = document.createElement('div')
      div.className = 'num'
      div.textContent = j
      thirdCounter.appendChild(div)
    }
  }
  const finalDiv = document.createElement("div")
  finalDiv.className = 'num'
  finalDiv.textContent = "0"
  thirdCounter.appendChild(finalDiv)

  function animate (counter, duration, delay = 0, ){
    const numHeight = counter.querySelector(".num").clientHeight
    const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight

    gsap.to(counter,{
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power2.inOut"
    })
  }
  animate(thirdCounter, 5)
  animate(document.querySelector(".second-counter"), 6)
  animate(document.querySelector(".first-counter"), 2, 4)
})
