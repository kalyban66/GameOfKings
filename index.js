const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 16 // 1024
canvas.height = 64 * 9 // 576

let parsedCollisions
let collisionBlocks
let background
let doors

let diamand = []

const player = new Player({
  imageSrc: './img/king/idle.png',
  frameRate: 11,
  animations: {
    idleRight: {
      frameRate: 11,
      frameBuffer: 8,
      loop: true,
      imageSrc: './img/king/idle.png',
    },
    idleLeft: {
      frameRate: 11,
      frameBuffer: 8,
      loop: true,
      imageSrc: './img/king/idleLeft.png',
    },
    runRight: {
      frameRate: 8,
      frameBuffer: 8,
      loop: true,
      imageSrc: './img/king/runRight.png',
    },
    runLeft: {
      frameRate: 8,
      frameBuffer: 8,
      loop: true,
      imageSrc: './img/king/runLeft.png',
    },
    enterDoor: {
      frameRate: 8,
      frameBuffer: 6,
      loop: false,
      imageSrc: './img/king/enterDoor.png',
      onComplete: () => {
        console.log('completed animation')
        gsap.to(overlay, {
          opacity: 1,
          onComplete: () => {
            level++

            if (level === 5) level = 1
            levels[level].init()
            player.switchSprite('idleRight')
            player.preventInput = false
            gsap.to(overlay, {
              opacity: 0,
            })
          },
        })
      },
    },
  },
})

let level = 1
let levels = {
  1: {
    init: () => {
      parsedCollisions = collisionsLevel1.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks

      player.position.x = 167
      player.position.y = 190
      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel1.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 767,
            y: 270,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
      diamand = [
        new Sprite({
          position: {
            x: 567,
            y: 340,
          },
          imageSrc: './img/bigDiamand.png',
          frameRate: 10,
          frameBuffer: 10,
          loop: true,
          autoplay: true,
        }),
        new Sprite({
          position: {
            x: 467,
            y: 340,
          },
          imageSrc: './img/bigDiamand.png',
          frameRate: 10,
          frameBuffer: 10,
          loop: true,
          autoplay: true,
        }),
        new Sprite({
          position: {
            x: 367,
            y: 340,
          },
          imageSrc: './img/bigDiamand.png',
          frameRate: 10,
          frameBuffer: 10,
          loop: true,
          autoplay: true,
        }),
      ]
    },
  },
  2: {
    init: () => {
      parsedCollisions = collisionsLevel2.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 96
      player.position.y = 140

      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel2.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 772.0,
            y: 336,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
      
      diamand = [
        new Sprite({
          position: {
            x: 75,
            y: 150,
          },
          imageSrc: './img/bigDiamand.png',
          frameRate: 10,
          frameBuffer: 10,
          loop: true,
          autoplay: true,
        }),
        new Sprite({
          position: {
            x: 150,
            y: 470,
          },
          imageSrc: './img/bigDiamand.png',
          frameRate: 10,
          frameBuffer: 10,
          loop: true,
          autoplay: true,
        }),
        new Sprite({
          position: {
            x: 580,
            y: 470,
          },
          imageSrc: './img/bigDiamand.png',
          frameRate: 10,
          frameBuffer: 10,
          loop: true,
          autoplay: true,
        }),
      ]
    },
  },
  3: {
    init: () => {
      parsedCollisions = collisionsLevel3.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 750
      player.position.y = 230
      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel3.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 176.0,
            y: 335,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
      diamand = [
        new Sprite({
          position: {
            x: 790,
            y: 345,
          },
          imageSrc: './img/bigDiamand.png',
          frameRate: 10,
          frameBuffer: 10,
          loop: true,
          autoplay: true,
        }),
        new Sprite({
          position: {
            x: 135,
            y: 340,
          },
          imageSrc: './img/bigDiamand.png',
          frameRate: 10,
          frameBuffer: 10,
          loop: true,
          autoplay: true,
        }),
      ]
    },
  },
  4: {
    init: () => {
      parsedCollisions = collisionsLevel4.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 130
      player.position.y = 50
      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel4.png',
      })

      doors = [
        new Sprite({
          position: {
            x: 176.0,
            y: 403,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
      diamand = [
        new Sprite({
          position: {
            x: 843,
            y: 375,
          },
          imageSrc: './img/bigDiamand.png',
          frameRate: 10,
          frameBuffer: 10,
          loop: true,
          autoplay: true,
        }),
        new Sprite({
          position: {
            x: 100,
            y: 460,
          },
          imageSrc: './img/bigDiamand.png',
          frameRate: 10,
          frameBuffer: 10,
          loop: true,
          autoplay: true,
        }),
      ]
    },
  },
}

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
}

const overlay = {
  opacity: 0,
}

function animate() {
  window.requestAnimationFrame(animate)

  background.draw()
  // collisionBlocks.forEach((collisionBlock) => {
  //   collisionBlock.draw()
  // })

  doors.forEach((door) => {
    door.draw()
  })

  diamand.forEach((diamand) => {
    diamand.draw()
  })

  player.handleInput(keys)
  player.draw()
  player.update()

  c.save()
  c.globalAlpha = overlay.opacity
  c.fillStyle = '#3f3851'
  c.fillRect(0, 0, canvas.width, canvas.height)
  c.restore()
}

levels[level].init()
animate()