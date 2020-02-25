TweenMax.to("#feturbulence", 5, {
  attr:{"baseFrequency": "0.06 0"},
  repeat:-1,
  yoyo:true,
  ease: Linear.easeNone, 
});

TweenMax.to(".jellyfish", 3, {
  y: -30,
  repeat:-1,
  yoyo: true,
  ease: Linear.easeNone, 
},0.2)

TweenMax.staggerFrom(".bubble", 4, {
  scale: .2,
  opacity: 0.2,
  repeat:-1,
  yoyo: true,
  svgOrigin:"center",
  ease: Linear.easeNone, 
},1)


var blink = new TimelineMax({ repeat: -1, repeatDelay:5 })
blink.to(".eye", 0.5, {
  scaleY: .5,
  opacity: 0.2,
  svgOrigin:"center",
  delay: 3,
  ease: Back.easeOut.config(1.7),
})
.to(".eye", 0.5, {
  scaleY: 1,
  opacity: 1,
  svgOrigin:"center",
  ease: Back.easeOut.config(1.7),
})